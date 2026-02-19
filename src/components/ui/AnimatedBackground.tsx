"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  pulsePhase: number;
  pulseSpeed: number;
}

const DARK_COLORS = [
  "#22d3ee", // cyan
  "#06b6d4", // teal
  "#0ea5e9", // sky
  "#fbbf24", // amber
  "#a78bfa", // violet
];

const LIGHT_COLORS = [
  "#0891b2", // cyan
  "#0d9488", // teal
  "#0284c7", // sky
  "#d97706", // amber
  "#7c3aed", // violet
];

function getParticleCount(): number {
  if (typeof window === "undefined") return 15;
  const width = window.innerWidth;
  if (width < 640) return 12;
  if (width < 1024) return 18;
  return 24;
}

function getMaxDpr(): number {
  if (typeof window === "undefined") return 1;
  // Cap DPR at 2 to save GPU on high-res displays
  return Math.min(window.devicePixelRatio || 1, 2);
}

function isMobile(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const isVisibleRef = useRef(true);
  const lastTimeRef = useRef(0);
  const { theme } = useTheme();

  const initParticles = useCallback(
    (width: number, height: number) => {
      const count = getParticleCount();
      const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;
      const particles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -(Math.random() * 0.4 + 0.15), // rise upward
          radius: Math.random() * 40 + 20, // 20-60px
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.2 + 0.05, // 0.05-0.25
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.01 + 0.005,
        });
      }

      particlesRef.current = particles;
    },
    [theme]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dpr = getMaxDpr();
    const targetFps = isMobile() ? 30 : 60;
    const frameInterval = 1000 / targetFps;

    function resize() {
      if (!canvas) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx!.scale(dpr, dpr);
      initParticles(width, height);
    }

    resize();

    // If reduced motion, draw once and return
    if (prefersReducedMotion) {
      drawStaticFrame(ctx, canvas.width / dpr, canvas.height / dpr);
      return;
    }

    // Visibility API: pause when tab is hidden
    function handleVisibilityChange() {
      isVisibleRef.current = !document.hidden;
      if (!document.hidden) {
        lastTimeRef.current = 0; // Reset timing to avoid huge delta
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // ResizeObserver for responsive canvas
    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(document.documentElement);

    function animate(timestamp: number) {
      if (!isVisibleRef.current || !ctx || !canvas) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      // FPS throttling
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = timestamp;
      }
      const delta = timestamp - lastTimeRef.current;
      if (delta < frameInterval) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = timestamp - (delta % frameInterval);

      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      // Motion blur via partial clearing
      const isDark = theme === "dark";
      if (isDark) {
        ctx.fillStyle = "rgba(10, 12, 16, 0.08)";
      } else {
        ctx.fillStyle = "rgba(248, 249, 250, 0.1)";
      }
      ctx.fillRect(0, 0, width, height);

      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;
        p.pulsePhase += p.pulseSpeed;

        // Wrap around edges
        if (p.y + p.radius < 0) {
          p.y = height + p.radius;
          p.x = Math.random() * width;
        }
        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;

        // Pulsing opacity via sin wave
        const currentAlpha =
          p.alpha * (0.6 + 0.4 * Math.sin(p.pulsePhase));

        // Draw glow orb with radial gradient
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius
        );

        // Parse hex to get rgb values for alpha blending
        const r = parseInt(p.color.slice(1, 3), 16);
        const g = parseInt(p.color.slice(3, 5), 16);
        const b = parseInt(p.color.slice(5, 7), 16);

        gradient.addColorStop(
          0,
          `rgba(${r}, ${g}, ${b}, ${currentAlpha * 0.8})`
        );
        gradient.addColorStop(
          0.4,
          `rgba(${r}, ${g}, ${b}, ${currentAlpha * 0.3})`
        );
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    }

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      resizeObserver.disconnect();
    };
  }, [theme, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

/**
 * For reduced-motion users: draw a single static gradient frame
 * so they still get atmospheric depth without animation.
 */
function drawStaticFrame(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) {
  // Draw a subtle radial gradient in the center
  const gradient = ctx.createRadialGradient(
    width * 0.3,
    height * 0.3,
    0,
    width * 0.5,
    height * 0.5,
    width * 0.6
  );
  gradient.addColorStop(0, "rgba(34, 211, 238, 0.04)");
  gradient.addColorStop(0.5, "rgba(251, 191, 36, 0.02)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}
