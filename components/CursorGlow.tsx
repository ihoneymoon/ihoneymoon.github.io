"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -500, y: -500 });
  const current = useRef({ x: -500, y: -500 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      current.current.x = lerp(current.current.x, pos.current.x, 0.08);
      current.current.y = lerp(current.current.y, pos.current.y, 0.08);
      if (glowRef.current) {
        glowRef.current.style.left = `${current.current.x}px`;
        glowRef.current.style.top = `${current.current.y}px`;
      }
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      aria-hidden="true"
      style={{
        position: "fixed",
        width: 400,
        height: 400,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255, 133, 178, 0.12) 0%, rgba(192, 154, 255, 0.08) 40%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 1,
        transform: "translate(-50%, -50%)",
        transition: "none",
      }}
    />
  );
}
