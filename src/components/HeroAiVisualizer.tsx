import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, RotateCcw, Box, Globe, Disc, Activity, Sparkles, Layers, Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Node3D {
  x: number;
  y: number;
  z: number;
  label?: string;
  activation?: number;
  pulsePhase?: number;
  colorType?: number;
}

interface Edge3D {
  source: number;
  target: number;
  weight: number;
}

type GeometryMode = 'sphere' | 'lattice' | 'torus';

export const HeroAiVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [mode, setMode] = useState<GeometryMode>('sphere');
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [pulseActive, setPulseActive] = useState(false);
  const [stats, setStats] = useState({ rotX: 0, rotY: 0, nodes: 0, edges: 0, fps: 60 });

  // Rotation angles (radians) & velocities for inertia
  const rotRef = useRef({ x: 0.3, y: 0.5, vx: 0.005, vy: 0.008 });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const pulseWaveRef = useRef(0);
  const nodesRef = useRef<Node3D[]>([]);
  const edgesRef = useRef<Edge3D[]>([]);

  // Generate 3D Geometries
  const generateGeometry = useCallback((currentMode: GeometryMode) => {
    const nodes: Node3D[] = [];
    const edges: Edge3D[] = [];

    if (currentMode === 'sphere') {
      // Fibonacci Sphere Distribution
      const count = 44;
      const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
      const radius = 120;

      for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
        const r = Math.sqrt(1 - y * y); // radius at y
        const theta = phi * i;

        const x = Math.cos(theta) * r;
        const z = Math.sin(theta) * r;

        nodes.push({
          x: x * radius,
          y: y * radius,
          z: z * radius,
          label: `N-${i + 1}`,
          activation: Math.random() * 0.8 + 0.2,
          pulsePhase: Math.random() * Math.PI * 2,
          colorType: i % 4, // 0: cyan, 1: purple, 2: emerald, 3: sky
        });
      }

      // Connect closest neighbours
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < 68) {
            edges.push({
              source: i,
              target: j,
              weight: Math.max(0.2, 1 - dist / 68),
            });
          }
        }
      }
    } else if (currentMode === 'lattice') {
      // 3D 3x3x3 Tensor Grid Lattice
      const size = 3;
      const spacing = 72;
      const offset = ((size - 1) * spacing) / 2;

      for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
          for (let z = 0; z < size; z++) {
            nodes.push({
              x: x * spacing - offset,
              y: y * spacing - offset,
              z: z * spacing - offset,
              label: `T[${x},${y},${z}]`,
              activation: Math.random() * 0.9 + 0.1,
              pulsePhase: (x + y + z) * 0.4,
              colorType: (x + y + z) % 4,
            });
          }
        }
      }

      // Grid connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = Math.abs(nodes[i].x - nodes[j].x);
          const dy = Math.abs(nodes[i].y - nodes[j].y);
          const dz = Math.abs(nodes[i].z - nodes[j].z);
          const isAdjacent = (dx === spacing && dy === 0 && dz === 0) ||
                             (dx === 0 && dy === spacing && dz === 0) ||
                             (dx === 0 && dy === 0 && dz === spacing);
          if (isAdjacent) {
            edges.push({ source: i, target: j, weight: 0.7 });
          }
        }
      }
    } else if (currentMode === 'torus') {
      // Latent Torus Manifold
      const majorR = 100;
      const minorR = 38;
      const uSteps = 16;
      const vSteps = 8;

      for (let u = 0; u < uSteps; u++) {
        const uAngle = (u / uSteps) * Math.PI * 2;
        for (let v = 0; v < vSteps; v++) {
          const vAngle = (v / vSteps) * Math.PI * 2;

          const x = (majorR + minorR * Math.cos(vAngle)) * Math.cos(uAngle);
          const y = (majorR + minorR * Math.cos(vAngle)) * Math.sin(uAngle);
          const z = minorR * Math.sin(vAngle);

          const idx = nodes.length;
          nodes.push({
            x,
            y,
            z,
            label: `M[${u},${v}]`,
            activation: (Math.sin(uAngle * 2) + 1) * 0.4 + 0.2,
            pulsePhase: uAngle + vAngle,
            colorType: u % 4,
          });

          // Along v circle
          const nextV = (v + 1) % vSteps;
          edges.push({
            source: idx,
            target: u * vSteps + nextV,
            weight: 0.5,
          });

          // Along u circle
          const nextU = (u + 1) % uSteps;
          edges.push({
            source: idx,
            target: nextU * vSteps + v,
            weight: 0.5,
          });
        }
      }
    }

    nodesRef.current = nodes;
    edgesRef.current = edges;

    setStats((prev) => ({
      ...prev,
      nodes: nodes.length,
      edges: edges.length,
    }));
  }, []);

  useEffect(() => {
    generateGeometry(mode);
  }, [mode, generateGeometry]);

  // Main Canvas Render Loop with Color Grading
  useEffect(() => {
    let animId: number;
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      const now = performance.now();
      frameCount++;
      if (now - lastFpsUpdate >= 1000) {
        setStats((prev) => ({ ...prev, fps: frameCount }));
        frameCount = 0;
        lastFpsUpdate = now;
      }

      // Handle Auto Rotation & Inertia
      if (isAutoRotate && !isDraggingRef.current) {
        rotRef.current.y += rotRef.current.vy;
        rotRef.current.x += rotRef.current.vx;
      }

      if (pulseWaveRef.current > 0) {
        pulseWaveRef.current += 0.08;
        if (pulseWaveRef.current > 4 * Math.PI) {
          pulseWaveRef.current = 0;
          setPulseActive(false);
        }
      }

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      const centerX = width / 2;
      const centerY = height / 2;
      const focalLength = 320;

      ctx.save();
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, width, height);

      const cosX = Math.cos(rotRef.current.x);
      const sinX = Math.sin(rotRef.current.x);
      const cosY = Math.cos(rotRef.current.y);
      const sinY = Math.sin(rotRef.current.y);

      // Project all 3D nodes
      const projectedNodes = nodesRef.current.map((node) => {
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.z * cosY + node.x * sinY;

        const y2 = node.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.y * sinX;

        const scale = focalLength / (focalLength + z2 + 180);
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;

        const depth = (z2 + 180) / 360;

        return {
          ...node,
          px,
          py,
          scale,
          z2,
          depth,
        };
      });

      // 1. Draw Depth Coordinate Axis Guides & Center Singularity
      ctx.strokeStyle = isDark ? 'rgba(99, 102, 241, 0.12)' : 'rgba(99, 102, 241, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 130, 0, Math.PI * 2);
      ctx.stroke();

      // Outer dashed orbital guide
      ctx.setLineDash([4, 6]);
      ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.18)' : 'rgba(56, 189, 248, 0.12)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 145, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // 2. Draw Edges
      edgesRef.current.forEach((edge) => {
        const p1 = projectedNodes[edge.source];
        const p2 = projectedNodes[edge.target];
        if (!p1 || !p2) return;

        const avgDepth = (p1.depth + p2.depth) / 2;
        const baseAlpha = Math.max(0.08, Math.min(0.65, (1 - avgDepth) * 0.8));

        // Signal pulse traveling along edges
        let pulseBrightness = 0;
        if (pulseWaveRef.current > 0) {
          const pulseDistance = Math.sin(pulseWaveRef.current + p1.pulsePhase!);
          if (pulseDistance > 0.5) {
            pulseBrightness = (pulseDistance - 0.5) * 2;
          }
        }

        const alpha = Math.min(1, baseAlpha + pulseBrightness);

        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);

        if (isDark) {
          if (pulseBrightness > 0.3) {
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 2.0;
          } else {
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha * 0.45})`;
            ctx.lineWidth = 1;
          }
        } else {
          if (pulseBrightness > 0.3) {
            ctx.strokeStyle = `rgba(2, 132, 199, ${alpha})`;
            ctx.lineWidth = 2.0;
          } else {
            ctx.strokeStyle = `rgba(79, 70, 229, ${alpha * 0.35})`;
            ctx.lineWidth = 1;
          }
        }
        ctx.stroke();
      });

      // 3. Draw Nodes (Depth Sorted: back to front)
      const sortedNodes = [...projectedNodes].sort((a, b) => b.z2 - a.z2);

      const colorMapDark = [
        '#00f0ff', // cyan
        '#c084fc', // purple
        '#34d399', // emerald
        '#38bdf8', // sky
      ];

      const colorMapLight = [
        '#0284c7', // sky
        '#7c3aed', // purple
        '#059669', // emerald
        '#4f46e5', // indigo
      ];

      const colorMap = isDark ? colorMapDark : colorMapLight;

      sortedNodes.forEach((node) => {
        const radius = Math.max(2.2, Math.min(6.8, (1 - node.depth) * 6.5));
        const alpha = Math.max(0.3, Math.min(1, (1 - node.depth) * 1.2));
        const nodeColor = colorMap[(node.colorType || 0) % colorMap.length];

        // Node Glow for foreground elements
        if (node.depth < 0.5) {
          ctx.beginPath();
          ctx.arc(node.px, node.py, radius * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? `${nodeColor}40`
            : `${nodeColor}25`;
          ctx.fill();
        }

        // Node Core
        ctx.beginPath();
        ctx.arc(node.px, node.py, radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.strokeStyle = isDark ? '#070913' : '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.fill();
        ctx.stroke();
      });

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isDark, isAutoRotate]);

  // Handle Resize for Crisp Display
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const targetWidth = rect.width || 380;
      const targetHeight = 310;

      canvas.width = targetWidth * dpr;
      canvas.height = targetHeight * dpr;
      canvas.style.width = `${targetWidth}px`;
      canvas.style.height = `${targetHeight}px`;
    };

    handleResize();
    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  // Mouse / Touch Interaction for 3D Drag Rotation
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;

    rotRef.current.y += dx * 0.01;
    rotRef.current.x += dy * 0.01;
    rotRef.current.vy = dx * 0.0015;
    rotRef.current.vx = dy * 0.0015;

    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    setStats((prev) => ({
      ...prev,
      rotX: Math.round((rotRef.current.x % (Math.PI * 2)) * (180 / Math.PI)),
      rotY: Math.round((rotRef.current.y % (Math.PI * 2)) * (180 / Math.PI)),
    }));
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Touch Support for Mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - lastMousePosRef.current.x;
    const dy = e.touches[0].clientY - lastMousePosRef.current.y;

    rotRef.current.y += dx * 0.012;
    rotRef.current.x += dy * 0.012;

    lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  const triggerSignalPulse = () => {
    pulseWaveRef.current = 0.01;
    setPulseActive(true);
  };

  const resetOrientation = () => {
    rotRef.current = { x: 0.3, y: 0.5, vx: 0.005, vy: 0.008 };
  };

  return (
    <div
      id="hero-ai-visualizer-card"
      ref={containerRef}
      className={`relative w-full p-5 sm:p-6 rounded-2xl border transition-all ${
        isDark 
          ? 'bg-[#0d1122]/85 backdrop-blur-xl border-indigo-500/20 text-white shadow-2xl shadow-indigo-950/40 hover:border-cyan-500/40' 
          : 'bg-white/90 backdrop-blur-xl border-slate-200 text-slate-900 shadow-xl shadow-slate-200/60 hover:border-indigo-400/50'
      } overflow-hidden`}
    >
      {/* 3D Visualizer Top Header */}
      <div className={`flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b ${
        isDark ? 'border-indigo-500/15' : 'border-slate-200'
      }`}>
        <div className="flex items-center gap-2.5">
          <div className={`w-2.5 h-2.5 rounded-full ${
            isDark ? 'bg-cyan-400 shadow-[0_0_10px_#00f0ff]' : 'bg-indigo-600 shadow-[0_0_8px_#4f46e5]'
          }`} />
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-xs font-display font-bold uppercase tracking-wider">
                3D Neural Tensor Lattice
              </h4>
              <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border uppercase font-semibold ${
                isDark ? 'bg-cyan-950/60 border-cyan-700/50 text-cyan-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
              }`}>
                Active 3D
              </span>
            </div>
            <span className={`text-[10px] font-mono block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Spatial AI Topology • 360° Inspection
            </span>
          </div>
        </div>

        {/* 3D Geometry Mode Switcher */}
        <div className={`flex items-center gap-1 p-1 rounded-lg border text-[11px] font-mono ${
          isDark ? 'bg-black/50 border-indigo-500/20' : 'bg-slate-100 border-slate-200'
        }`}>
          <button
            id="mode-btn-sphere"
            onClick={() => setMode('sphere')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded transition-all font-medium ${
              mode === 'sphere'
                ? isDark ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30' : 'bg-indigo-600 text-white font-bold shadow-sm'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
            }`}
            title="Fibonacci Neural Sphere"
          >
            <Globe className="w-3 h-3" />
            <span>Sphere</span>
          </button>

          <button
            id="mode-btn-lattice"
            onClick={() => setMode('lattice')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded transition-all font-medium ${
              mode === 'lattice'
                ? isDark ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30' : 'bg-indigo-600 text-white font-bold shadow-sm'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
            }`}
            title="3D Tensor Matrix Lattice"
          >
            <Box className="w-3 h-3" />
            <span>Matrix</span>
          </button>

          <button
            id="mode-btn-torus"
            onClick={() => setMode('torus')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded transition-all font-medium ${
              mode === 'torus'
                ? isDark ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30' : 'bg-indigo-600 text-white font-bold shadow-sm'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
            }`}
            title="Latent Torus Manifold"
          >
            <Disc className="w-3 h-3" />
            <span>Torus</span>
          </button>
        </div>
      </div>

      {/* Main Interactive WebGL / 2D Accelerated Canvas */}
      <div className="relative my-3 flex justify-center items-center cursor-grab active:cursor-grabbing">
        <canvas
          id="hero-ai-3d-canvas"
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="rounded-xl touch-none"
        />

        {/* Ambient Glow Aura */}
        <div className={`absolute inset-0 pointer-events-none rounded-xl ${
          isDark
            ? 'bg-gradient-to-t from-indigo-950/20 via-transparent to-cyan-950/15'
            : 'bg-gradient-to-t from-indigo-50/30 via-transparent to-sky-50/20'
        }`} />
      </div>

      {/* Interactive Controls Bar */}
      <div className={`flex flex-wrap items-center justify-between gap-3 pt-3 border-t text-xs font-mono ${
        isDark ? 'border-indigo-500/15 text-slate-300' : 'border-slate-200 text-slate-700'
      }`}>
        <div className="flex items-center gap-2">
          {/* Signal Pulse Trigger Button */}
          <button
            id="trigger-signal-pulse-btn"
            onClick={triggerSignalPulse}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold transition-all active:scale-95 shadow-sm ${
              pulseActive
                ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.5)]'
                : isDark
                  ? 'bg-indigo-950/60 border-indigo-500/40 text-cyan-300 hover:bg-indigo-900/80 hover:border-cyan-400'
                  : 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100'
            }`}
            title="Fire synaptic signal propagation through the graph"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{pulseActive ? 'Transmitting...' : 'Fire Synaptic Wave'}</span>
          </button>

          {/* Auto Rotate Toggle */}
          <button
            id="toggle-autorotate-btn"
            onClick={() => setIsAutoRotate(!isAutoRotate)}
            className={`p-1.5 rounded-lg border transition-colors ${
              isAutoRotate
                ? isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-slate-200 border-slate-300 text-black'
                : isDark ? 'bg-transparent border-slate-800 text-slate-500' : 'bg-transparent border-slate-200 text-slate-400'
            }`}
            title={isAutoRotate ? 'Pause Rotation' : 'Resume Auto Rotation'}
          >
            <Play className={`w-3.5 h-3.5 ${isAutoRotate ? 'fill-current' : ''}`} />
          </button>

          {/* Reset Orientation */}
          <button
            id="reset-orientation-btn"
            onClick={resetOrientation}
            className={`p-1.5 rounded-lg border transition-colors ${
              isDark ? 'bg-transparent border-slate-800 text-slate-400 hover:text-white' : 'bg-transparent border-slate-200 text-slate-600 hover:text-black'
            }`}
            title="Reset Spatial Camera Orientation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Telemetry Stats */}
        <div className="flex items-center gap-3 text-[11px] opacity-80">
          <span>{stats.nodes} Nodes</span>
          <span>•</span>
          <span>{stats.edges} Synapses</span>
          <span>•</span>
          <span className="text-emerald-400 font-bold">{stats.fps} FPS</span>
        </div>
      </div>
    </div>
  );
};
