'use client';

import React, { useEffect, useRef } from 'react';

export function FallbackCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let angle = 0;
    const particles = Array.from({ length: 60 }).map(() => ({
      x: (Math.random() - 0.5) * 800,
      y: (Math.random() - 0.5) * 800,
      z: Math.random() * 800 + 100,
      size: Math.random() * 2 + 1,
      color: ['#d4af37', '#00f0ff', '#8b5cf6'][Math.floor(Math.random() * 3)],
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      angle += 0.005;

      ctx.save();
      ctx.translate(cx, cy);

      // Rotating Octahedron wireframe
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
      ctx.lineWidth = 1;
      const s = 140;
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const a = angle + (i * Math.PI) / 2;
        const px = Math.cos(a) * s;
        const py = Math.sin(a) * (s * 0.4);
        if (i === 0) ctx.moveTo(px, py - 60);
        else ctx.lineTo(px, py - 60);
      }
      ctx.closePath();
      ctx.stroke();

      // Neural rings
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
      ctx.beginPath();
      ctx.ellipse(0, 0, 240, 80, angle * 0.8, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(139, 92, 246, 0.25)';
      ctx.beginPath();
      ctx.ellipse(0, 0, 320, 110, -angle * 0.6, 0, Math.PI * 2);
      ctx.stroke();

      // Particles
      for (const p of particles) {
        p.z -= 1.0;
        if (p.z <= 10) p.z = 900;
        const fov = 350 / p.z;
        const sx = p.x * fov;
        const sy = p.y * fov;
        const rad = p.size * fov;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(0.5, rad), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full opacity-70 pointer-events-none" />;
}
