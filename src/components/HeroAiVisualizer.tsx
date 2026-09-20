import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Play, 
  RotateCcw, 
  Box, 
  Globe, 
  Disc, 
  Sparkles, 
  Layers, 
  Cpu, 
  Zap, 
  Activity, 
  Check
} from 'lucide-react';
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
type WorkbenchTab = 'topology' | 'inference' | 'pipeline';

interface InferenceScenario {
  id: string;
  name: string;
  model: string;
  input: string;
  latencyMs: number;
  primaryClass: string;
  confidence: number;
  secondaryClass: string;
  secondaryConfidence: number;
  tensorShape: string;
  weights: number[];
}

const INFERENCE_SCENARIOS: InferenceScenario[] = [
  {
    id: 'churn',
    name: 'Customer Churn Predictor',
    model: 'XGBoost + SHAP Explainer',
    input: '{ tenure: 24mo, monthly_spend: $120, support_tickets: 4 }',
    latencyMs: 14.8,
    primaryClass: 'High Risk (Churn)',
    confidence: 89.4,
    secondaryClass: 'Retained',
    secondaryConfidence: 10.6,
    tensorShape: '[1, 38] -> [1, 2]',
    weights: [0.38, 0.24, 0.18, 0.12, 0.08],
  },
  {
    id: 'sentiment',
    name: 'LLM Intent & Toxicity Guard',
    model: 'DistilBERT Multi-Head Attention',
    input: '"Deploy the updated predictive model to production cluster"',
    latencyMs: 21.2,
    primaryClass: 'Safe System Command',
    confidence: 97.8,
    secondaryClass: 'Anomaly / Alert',
    secondaryConfidence: 2.2,
    tensorShape: '[1, 12, 768]',
    weights: [0.45, 0.28, 0.15, 0.09, 0.03],
  },
  {
    id: 'anomaly',
    name: 'Network Telemetry Anomaly',
    model: 'PyTorch Autoencoder (Recon Loss)',
    input: 'Packet delta: +480%, entropy: 0.94, port: 443',
    latencyMs: 8.6,
    primaryClass: 'Nominal Traffic',
    confidence: 93.1,
    secondaryClass: 'DDoS Signature',
    secondaryConfidence: 6.9,
    tensorShape: '[64, 128] -> [64, 8]',
    weights: [0.32, 0.30, 0.21, 0.11, 0.06],
  },
];

export const HeroAiVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [activeTab, setActiveTab] = useState<WorkbenchTab>('topology');
  const [selectedScenario, setSelectedScenario] = useState<InferenceScenario>(INFERENCE_SCENARIOS[0]);
  const [isRunningInference, setIsRunningInference] = useState(false);
  const [inferenceSuccess, setInferenceSuccess] = useState(false);

  // 3D Topology State
  const [mode, setMode] = useState<GeometryMode>('sphere');
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [pulseActive, setPulseActive] = useState(false);
  const [stats, setStats] = useState({ rotX: 0, rotY: 0, nodes: 0, edges: 0, fps: 60 });

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
      const count = 44;
      const phi = Math.PI * (3 - Math.sqrt(5));
      const radius = 115;

      for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
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
          colorType: i % 3,
        });
      }

      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < 65) {
            edges.push({
              source: i,
              target: j,
              weight: Math.max(0.2, 1 - dist / 65),
            });
          }
        }
      }
    } else if (currentMode === 'lattice') {
      const size = 3;
      const spacing = 70;
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
              colorType: (x + y + z) % 3,
            });
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = Math.abs(nodes[i].x - nodes[j].x);
          const dy = Math.abs(nodes[i].y - nodes[j].y);
          const dz = Math.abs(nodes[i].z - nodes[j].z);
          const isAdjacent = 
            (dx === spacing && dy === 0 && dz === 0) ||
            (dx === 0 && dy === spacing && dz === 0) ||
            (dx === 0 && dy === 0 && dz === spacing);
          if (isAdjacent) {
            edges.push({ source: i, target: j, weight: 0.7 });
          }
        }
      }
    } else if (currentMode === 'torus') {
      const majorR = 95;
      const minorR = 36;
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
            colorType: u % 3,
          });

          const nextV = (v + 1) % vSteps;
          edges.push({ source: idx, target: u * vSteps + nextV, weight: 0.5 });

          const nextU = (u + 1) % uSteps;
          edges.push({ source: idx, target: nextU * vSteps + v, weight: 0.5 });
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

  // Main Canvas Render Loop
  useEffect(() => {
    if (activeTab !== 'topology') return;

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
      const focalLength = 310;

      ctx.save();
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, width, height);

      const cosX = Math.cos(rotRef.current.x);
      const sinX = Math.sin(rotRef.current.x);
      const cosY = Math.cos(rotRef.current.y);
      const sinY = Math.sin(rotRef.current.y);

      const projectedNodes = nodesRef.current.map((node) => {
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.z * cosY + node.x * sinY;

        const y2 = node.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.y * sinX;

        const scale = focalLength / (focalLength + z2 + 180);
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;
        const depth = (z2 + 180) / 360;

        return { ...node, px, py, scale, z2, depth };
      });

      // Subtle Precision Coordinate Rings
      ctx.strokeStyle = isDark ? 'rgba(245, 158, 11, 0.12)' : 'rgba(217, 119, 6, 0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 125, 0, Math.PI * 2);
      ctx.stroke();

      ctx.setLineDash([3, 5]);
      ctx.strokeStyle = isDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(5, 150, 105, 0.12)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 140, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Synaptic Edges
      edgesRef.current.forEach((edge) => {
        const p1 = projectedNodes[edge.source];
        const p2 = projectedNodes[edge.target];
        if (!p1 || !p2) return;

        const avgDepth = (p1.depth + p2.depth) / 2;
        const baseAlpha = Math.max(0.06, Math.min(0.55, (1 - avgDepth) * 0.7));

        let pulseBrightness = 0;
        if (pulseWaveRef.current > 0) {
          const pulseDist = Math.sin(pulseWaveRef.current + p1.pulsePhase!);
          if (pulseDist > 0.5) pulseBrightness = (pulseDist - 0.5) * 2;
        }

        const alpha = Math.min(1, baseAlpha + pulseBrightness);

        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);

        if (pulseBrightness > 0.3) {
          ctx.strokeStyle = isDark ? `rgba(245, 158, 11, ${alpha})` : `rgba(217, 119, 6, ${alpha})`;
          ctx.lineWidth = 2.0;
        } else {
          ctx.strokeStyle = isDark ? `rgba(255, 255, 255, ${alpha * 0.22})` : `rgba(15, 23, 42, ${alpha * 0.22})`;
          ctx.lineWidth = 1;
        }
        ctx.stroke();
      });

      // Draw Nodes (Depth Sorted)
      const sortedNodes = [...projectedNodes].sort((a, b) => b.z2 - a.z2);

      const colorMapDark = [
        '#f59e0b', // Amber
        '#10b981', // Emerald
        '#38bdf8', // Cobalt/Titanium
      ];

      const colorMapLight = [
        '#d97706', // Amber 600
        '#059669', // Emerald 600
        '#0284c7', // Sky 600
      ];

      const colorMap = isDark ? colorMapDark : colorMapLight;

      sortedNodes.forEach((node) => {
        const radius = Math.max(2.2, Math.min(6.2, (1 - node.depth) * 6));
        const nodeColor = colorMap[(node.colorType || 0) % colorMap.length];

        if (node.depth < 0.45) {
          ctx.beginPath();
          ctx.arc(node.px, node.py, radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? `${nodeColor}30` : `${nodeColor}20`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(node.px, node.py, radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.strokeStyle = isDark ? '#090b10' : '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.fill();
        ctx.stroke();
      });

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [isDark, isAutoRotate, activeTab]);

  // Resize Observer
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const targetWidth = rect.width || 380;
      const targetHeight = 290;

      canvas.width = targetWidth * dpr;
      canvas.height = targetHeight * dpr;
      canvas.style.width = `${targetWidth}px`;
      canvas.style.height = `${targetHeight}px`;
    };

    handleResize();
    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [activeTab]);

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

  const triggerSignalPulse = () => {
    pulseWaveRef.current = 0.01;
    setPulseActive(true);
  };

  const runSampleInference = () => {
    setIsRunningInference(true);
    setInferenceSuccess(false);
    setTimeout(() => {
      setIsRunningInference(false);
      setInferenceSuccess(true);
      setTimeout(() => setInferenceSuccess(false), 2000);
    }, 450);
  };

  return (
    <div
      id="hero-ai-workbench"
      ref={containerRef}
      className={`relative w-full rounded-2xl border transition-all overflow-hidden ${
        isDark 
          ? 'bg-[#0f131c]/90 backdrop-blur-xl border-white/[0.08] text-white shadow-2xl shadow-black/50 hover:border-amber-400/30' 
          : 'bg-white/95 backdrop-blur-xl border-slate-200 text-slate-900 shadow-xl shadow-slate-200/60 hover:border-amber-500/40'
      }`}
    >
      {/* Workbench Header & Primary Tab Switcher */}
      <div className={`p-4 sm:p-5 pb-3.5 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
        isDark ? 'border-white/[0.07] bg-[#121722]/60' : 'border-slate-100 bg-slate-50/60'
      }`}>
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider">
                AI Engineering Workbench
              </h4>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded uppercase font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/20">
                Interactive
              </span>
            </div>
            <span className={`text-[10px] font-mono block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Architecture • Inference Telemetry • Pipelines
            </span>
          </div>
        </div>

        {/* 3 Main View Tabs */}
        <div className={`inline-flex items-center p-1 rounded-xl border text-[11px] font-mono ${
          isDark ? 'bg-black/40 border-white/[0.08]' : 'bg-slate-200/70 border-slate-200'
        }`}>
          <button
            onClick={() => setActiveTab('topology')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-semibold ${
              activeTab === 'topology'
                ? isDark 
                  ? 'bg-amber-400 text-slate-950 shadow-sm font-bold' 
                  : 'bg-white text-slate-950 shadow-sm font-bold'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
            }`}
          >
            <Globe className="w-3 h-3" />
            <span>3D Topology</span>
          </button>

          <button
            onClick={() => setActiveTab('inference')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-semibold ${
              activeTab === 'inference'
                ? isDark 
                  ? 'bg-amber-400 text-slate-950 shadow-sm font-bold' 
                  : 'bg-white text-slate-950 shadow-sm font-bold'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
            }`}
          >
            <Cpu className="w-3 h-3" />
            <span>Inference Lab</span>
          </button>

          <button
            onClick={() => setActiveTab('pipeline')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-semibold ${
              activeTab === 'pipeline'
                ? isDark 
                  ? 'bg-amber-400 text-slate-950 shadow-sm font-bold' 
                  : 'bg-white text-slate-950 shadow-sm font-bold'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>Pipeline</span>
          </button>
        </div>
      </div>

      {/* Tab 1: 3D Topology View */}
      {activeTab === 'topology' && (
        <div className="p-4 sm:p-5">
          {/* Sub-mode switcher */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className={`text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Geometry: <strong className="text-amber-400 uppercase">{mode}</strong>
            </span>

            <div className="flex items-center gap-1">
              {(['sphere', 'lattice', 'torus'] as GeometryMode[]).map((gMode) => (
                <button
                  key={gMode}
                  onClick={() => setMode(gMode)}
                  className={`px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider border transition-all ${
                    mode === gMode
                      ? isDark 
                        ? 'bg-white/10 border-amber-400/60 text-amber-300 font-bold' 
                        : 'bg-slate-100 border-amber-600 text-amber-700 font-bold'
                      : isDark ? 'border-white/[0.06] text-slate-400 hover:text-white' : 'border-slate-200 text-slate-600 hover:text-black'
                  }`}
                >
                  {gMode}
                </button>
              ))}
            </div>
          </div>

          {/* Canvas */}
          <div className="relative flex justify-center items-center cursor-grab active:cursor-grabbing rounded-xl overflow-hidden bg-black/20">
            <canvas
              ref={canvasRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="touch-none"
            />
          </div>

          {/* Controls & Telemetry */}
          <div className={`flex flex-wrap items-center justify-between gap-2.5 pt-3.5 mt-2 border-t text-xs font-mono ${
            isDark ? 'border-white/[0.06] text-slate-300' : 'border-slate-100 text-slate-700'
          }`}>
            <div className="flex items-center gap-2">
              <button
                onClick={triggerSignalPulse}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-semibold text-xs transition-all active:scale-95 ${
                  pulseActive
                    ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-sm'
                    : isDark
                      ? 'bg-white/5 border-white/10 text-amber-300 hover:border-amber-400/40 hover:bg-white/10'
                      : 'bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{pulseActive ? 'Transmitting...' : 'Fire Activation'}</span>
              </button>

              <button
                onClick={() => setIsAutoRotate(!isAutoRotate)}
                className={`p-1.5 rounded-lg border transition-all ${
                  isAutoRotate
                    ? isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-slate-100 border-slate-300 text-black'
                    : isDark ? 'border-white/[0.06] text-slate-500' : 'border-slate-200 text-slate-400'
                }`}
                title={isAutoRotate ? 'Pause Rotation' : 'Auto Rotate'}
              >
                <Play className={`w-3.5 h-3.5 ${isAutoRotate ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={() => {
                  rotRef.current = { x: 0.3, y: 0.5, vx: 0.005, vy: 0.008 };
                }}
                className={`p-1.5 rounded-lg border transition-all ${
                  isDark ? 'border-white/[0.06] text-slate-400 hover:text-white' : 'border-slate-200 text-slate-600 hover:text-black'
                }`}
                title="Reset Orientation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono opacity-85">
              <span>{stats.nodes} Nodes</span>
              <span>•</span>
              <span className="text-emerald-400 font-bold">{stats.fps} FPS</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Live Inference Playground */}
      {activeTab === 'inference' && (
        <div className="p-4 sm:p-5 flex flex-col gap-4">
          {/* Scenario Selector Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {INFERENCE_SCENARIOS.map((sc) => (
              <button
                key={sc.id}
                onClick={() => setSelectedScenario(sc)}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] font-mono border transition-all ${
                  selectedScenario.id === sc.id
                    ? isDark
                      ? 'bg-amber-400/15 border-amber-400/60 text-amber-300 font-bold'
                      : 'bg-amber-50 border-amber-500 text-amber-900 font-bold'
                    : isDark
                      ? 'border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/5'
                      : 'border-slate-200 text-slate-600 hover:text-black hover:bg-slate-50'
                }`}
              >
                {sc.name}
              </button>
            ))}
          </div>

          {/* Inference Test Console */}
          <div className={`p-3.5 rounded-xl border font-mono text-xs ${
            isDark ? 'bg-black/50 border-white/[0.08]' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] mb-2 text-[10px] text-slate-400 uppercase tracking-wider">
              <span>Model: {selectedScenario.model}</span>
              <span className="text-emerald-400">STATUS: READY</span>
            </div>

            <div className="text-[11px] font-mono mb-3 overflow-x-auto text-slate-300">
              <span className="text-amber-400">&gt; Input Payload: </span>
              <code>{selectedScenario.input}</code>
            </div>

            {/* Run Button */}
            <button
              onClick={runSampleInference}
              disabled={isRunningInference}
              className={`w-full py-2 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                isRunningInference
                  ? 'bg-amber-500/50 text-slate-900 cursor-wait'
                  : inferenceSuccess
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-amber-400 hover:bg-amber-300 text-slate-950 active:scale-[0.98]'
              }`}
            >
              {isRunningInference ? (
                <>
                  <Activity className="w-3.5 h-3.5 animate-spin" />
                  <span>Computing Forward Pass...</span>
                </>
              ) : inferenceSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Inference Complete (200 OK)</span>
                </>
              ) : (
                <>
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>Run Forward Pass</span>
                </>
              )}
            </button>
          </div>

          {/* Results Telemetry Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            <div className={`p-2.5 rounded-xl border ${
              isDark ? 'bg-white/[0.03] border-white/[0.06]' : 'bg-slate-50 border-slate-200'
            }`}>
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Inference Latency</span>
              <span className="text-base font-display font-bold text-amber-400">
                {selectedScenario.latencyMs} ms
              </span>
            </div>

            <div className={`p-2.5 rounded-xl border ${
              isDark ? 'bg-white/[0.03] border-white/[0.06]' : 'bg-slate-50 border-slate-200'
            }`}>
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Confidence</span>
              <span className="text-base font-display font-bold text-emerald-400">
                {selectedScenario.confidence}%
              </span>
            </div>

            <div className={`p-2.5 rounded-xl border col-span-2 sm:col-span-1 ${
              isDark ? 'bg-white/[0.03] border-white/[0.06]' : 'bg-slate-50 border-slate-200'
            }`}>
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Tensor Dimensions</span>
              <span className="text-xs font-mono font-bold text-slate-300 block truncate">
                {selectedScenario.tensorShape}
              </span>
            </div>
          </div>

          {/* Primary Class Output Bar */}
          <div className={`p-3 rounded-xl border ${
            isDark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex justify-between items-center text-xs font-mono mb-1.5">
              <span className="font-semibold text-slate-200">{selectedScenario.primaryClass}</span>
              <span className="text-emerald-400 font-bold">{selectedScenario.confidence}%</span>
            </div>
            <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${selectedScenario.confidence}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: End-to-End Pipeline Inspector */}
      {activeTab === 'pipeline' && (
        <div className="p-4 sm:p-5 flex flex-col gap-3">
          <div className="text-[11px] font-mono text-slate-400 mb-1">
            End-to-End Applied ML Architecture Flow:
          </div>

          {[
            {
              stage: '01. Ingestion & Preprocessing',
              tools: 'Pandas • NumPy • Polars',
              desc: 'Structured cleaning, missing value imputation, statistical profiling',
              color: 'text-amber-400',
              bg: 'border-amber-400/30',
            },
            {
              stage: '02. Feature Engineering & Vectorization',
              tools: 'Scikit-Learn • Embeddings',
              desc: 'Dimensionality reduction, PCA, categorical encoding, train/test split',
              color: 'text-sky-400',
              bg: 'border-sky-400/30',
            },
            {
              stage: '03. Model Training & Optimization',
              tools: 'PyTorch • XGBoost • Hyperopt',
              desc: 'Cross-validated hyperparameter sweeps, loss minimization, checkpointing',
              color: 'text-emerald-400',
              bg: 'border-emerald-400/30',
            },
            {
              stage: '04. Deployment & API Serving',
              tools: 'FastAPI • Docker • Telemetry',
              desc: 'Low-latency REST endpoints with health probes and drift detection',
              color: 'text-purple-400',
              bg: 'border-purple-400/30',
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl border transition-all ${step.bg} ${
                isDark ? 'bg-white/[0.02] hover:bg-white/[0.04]' : 'bg-slate-50 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-mono font-bold ${step.color}`}>{step.stage}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/30 text-slate-300 border border-white/[0.08]">
                  {step.tools}
                </span>
              </div>
              <p className={`text-[11px] font-sans leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
