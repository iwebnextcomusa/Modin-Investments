import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef = useRef<THREE.Points | null>(null);
  const particlesRef = useRef<THREE.BufferGeometry | null>(null);
  
  // Track mouse and scroll for interaction
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scroll = useRef({ current: 0, target: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight || 500;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.015);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 25;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 3. Create 3D Holographic Particle Sphere (Elegant Gold & Navy Node Net)
    const particleCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Subtle premium navy-gold spectrum colors
    const goldColor = new THREE.Color("#C5A059");
    const blueColor = new THREE.Color("#1e3a8a");

    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution on sphere surface + minor random offset
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const radius = 10 + (Math.random() - 0.5) * 1.5;

      const pX = radius * Math.cos(theta) * Math.sin(phi);
      const pY = radius * Math.sin(theta) * Math.sin(phi);
      const pZ = radius * Math.cos(phi);

      positions[i * 3] = pX;
      positions[i * 3 + 1] = pY;
      positions[i * 3 + 2] = pZ;

      // Color interpolation representing portfolio diversification
      const mixRatio = Math.sin(phi) * 0.5 + 0.5;
      const mixedColor = new THREE.Color().copy(goldColor).lerp(blueColor, mixRatio);

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    particlesRef.current = geometry;

    // Create custom particle material
    // Soft circular points
    const canvasMaterial = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const sphere = new THREE.Points(geometry, canvasMaterial);
    scene.add(sphere);
    sphereRef.current = sphere;

    // Add optional ring orbit effect
    const orbitCount = 800;
    const orbitGeometry = new THREE.BufferGeometry();
    const orbitPositions = new Float32Array(orbitCount * 3);
    const orbitColors = new Float32Array(orbitCount * 3);

    for (let i = 0; i < orbitCount; i++) {
      const angle = (i / orbitCount) * Math.PI * 2;
      const r = 14 + (Math.random() - 0.5) * 2; // wider orbit ring
      orbitPositions[i * 3] = Math.cos(angle) * r;
      orbitPositions[i * 3 + 1] = (Math.random() - 0.5) * 2.5; // slight tilt height
      orbitPositions[i * 3 + 2] = Math.sin(angle) * r;

      // Pure glowing gold color for orbital investments
      orbitColors[i * 3] = goldColor.r;
      orbitColors[i * 3 + 1] = goldColor.g;
      orbitColors[i * 3 + 2] = goldColor.b;
    }

    orbitGeometry.setAttribute("position", new THREE.BufferAttribute(orbitPositions, 3));
    orbitGeometry.setAttribute("color", new THREE.BufferAttribute(orbitColors, 3));

    const ringMaterial = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const orbitRing = new THREE.Points(orbitGeometry, ringMaterial);
    scene.add(orbitRing);

    // 4. Handle Mouse Move Tilt
    const handleMouseMove = (event: MouseEvent) => {
      // Convert to normalized coordinates (-1 to +1)
      const rect = renderer.domElement.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      mouse.current.targetX = x * 3;
      mouse.current.targetY = y * 3;
    };

    // 5. Handle Scroll Depth changes
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);
      scroll.current.target = scrollPercent;
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousemove", handleMouseMove);

    // 6. Resize Observer (Anti-HMR and Desktop-responsive constraint)
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: currentWidth, height: currentHeight } = entry.contentRect;
        const h = currentHeight || 500;
        renderer.setSize(currentWidth, h);
        camera.aspect = currentWidth / h;
        camera.updateProjectionMatrix();
      }
    });
    
    resizeObserver.observe(containerRef.current);

    // 7. Render Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow elegant standard rotation
      if (sphere) {
        sphere.rotation.y = elapsedTime * 0.08;
        sphere.rotation.x = elapsedTime * 0.03;
      }
      
      if (orbitRing) {
        orbitRing.rotation.y = -elapsedTime * 0.12;
      }

      // Smooth lag dampening for mouse tilt (Interactivity)
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;
      
      scene.rotation.y = mouse.current.x * 0.15;
      scene.rotation.x = mouse.current.y * 0.15;

      // Smooth lag dampening for scroll transitions
      scroll.current.current += (scroll.current.target - scroll.current.current) * 0.08;
      
      // Camera zooms in slightly and moves down as user scrolls down the page
      camera.position.z = 25 - scroll.current.current * 7;
      scene.position.y = -scroll.current.current * 4;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Clean up resources
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();

      // Dispose resources
      geometry.dispose();
      orbitGeometry.dispose();
      canvasMaterial.dispose();
      ringMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div id="three-container" className="relative w-full h-[550px] overflow-hidden flex items-center justify-center">
      {/* Background radial gold/blue gradients */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-955/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute z-0 w-full h-full cursor-grab active:cursor-grabbing" ref={containerRef} />
      
      {/* Visual Overlay Indicators */}
      <div className="absolute top-6 left-6 pointer-events-none bg-black/40 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-none text-[10px] font-mono tracking-widest text-[#C5A059] flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-none animate-ping" />
        LIVE 3D PORTFOLIO SIMULATION
      </div>
      <div className="absolute bottom-6 right-6 pointer-events-none text-right hidden md:block">
        <p className="text-[10px] font-mono tracking-wider text-white/40">INTERACTION MECHANISM</p>
        <p className="text-xs font-sans text-[#C5A059] mt-0.5 font-mono uppercase">Move Cursor to Angle • Scroll to Traverse Depth</p>
      </div>
    </div>
  );
};
