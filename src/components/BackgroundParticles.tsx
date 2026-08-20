import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

export const BackgroundParticles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set up Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Swarm (Multi-color Neural Constellation)
    const particleCount = 260;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    // Color palette for particles
    const darkPalette = [
      new THREE.Color(0x00f0ff), // Cyan
      new THREE.Color(0x818cf8), // Indigo
      new THREE.Color(0xc084fc), // Purple
      new THREE.Color(0x34d399), // Emerald
      new THREE.Color(0x38bdf8), // Sky
    ];

    const lightPalette = [
      new THREE.Color(0x0284c7), // Sky 600
      new THREE.Color(0x4f46e5), // Indigo 600
      new THREE.Color(0x9333ea), // Purple 600
      new THREE.Color(0x059669), // Emerald 600
    ];

    const palette = isDark ? darkPalette : lightPalette;

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1300;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 900;

      velocities[i * 3] = (Math.random() - 0.5) * 0.35;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.35;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.35;

      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle material
    const particleMaterial = new THREE.PointsMaterial({
      size: isDark ? 3.6 : 3.0,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.65 : 0.45,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Floating 3D Geometric Polyhedra for spatial depth
    const shapesGroup = new THREE.Group();

    // 1. Icosahedron wireframe (Cyan glow)
    const icosaGeo = new THREE.IcosahedronGeometry(80, 1);
    const wireMat1 = new THREE.MeshBasicMaterial({
      color: isDark ? 0x38bdf8 : 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.12 : 0.08,
    });
    const icosahedron = new THREE.Mesh(icosaGeo, wireMat1);
    icosahedron.position.set(-320, 140, -120);
    shapesGroup.add(icosahedron);

    // 2. Torus wireframe (Purple glow)
    const torusGeo = new THREE.TorusGeometry(95, 26, 14, 40);
    const wireMat2 = new THREE.MeshBasicMaterial({
      color: isDark ? 0xa855f7 : 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.10 : 0.07,
    });
    const torus = new THREE.Mesh(torusGeo, wireMat2);
    torus.position.set(340, -160, -160);
    shapesGroup.add(torus);

    // 3. Octahedron wireframe (Emerald glow)
    const octaGeo = new THREE.OctahedronGeometry(60, 0);
    const wireMat3 = new THREE.MeshBasicMaterial({
      color: isDark ? 0x34d399 : 0x059669,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.11 : 0.07,
    });
    const octa = new THREE.Mesh(octaGeo, wireMat3);
    octa.position.set(20, 240, -220);
    shapesGroup.add(octa);

    scene.add(shapesGroup);

    // Mouse tracking for 3D parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.18;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.18;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate scene slightly with mouse
      scene.rotation.y = targetX * 0.0008;
      scene.rotation.x = targetY * 0.0008;

      // Animate 3D Polyhedra
      icosahedron.rotation.x += 0.002;
      icosahedron.rotation.y += 0.003;

      torus.rotation.x += 0.0025;
      torus.rotation.z += 0.0018;

      octa.rotation.y += 0.003;
      octa.rotation.z += 0.002;

      // Update particle positions
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3] += velocities[i * 3];
        posArray[i * 3 + 1] += velocities[i * 3 + 1];
        posArray[i * 3 + 2] += velocities[i * 3 + 2];

        // Boundary wrap
        if (Math.abs(posArray[i * 3]) > 700) velocities[i * 3] *= -1;
        if (Math.abs(posArray[i * 3 + 1]) > 600) velocities[i * 3 + 1] *= -1;
        if (Math.abs(posArray[i * 3 + 2]) > 500) velocities[i * 3 + 2] *= -1;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      particleMaterial.dispose();
      icosaGeo.dispose();
      torusGeo.dispose();
      octaGeo.dispose();
      wireMat1.dispose();
      wireMat2.dispose();
      wireMat3.dispose();
    };
  }, [isDark]);

  return (
    <div
      id="portfolio-3d-bg-canvas"
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
