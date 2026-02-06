"use client";
import React from "react";

export function CardSpotlight({ className = "", children, radius = 240 }) {
  const ref = React.useRef(null);
  const [coords, setCoords] = React.useState({ x: -9999, y: -9999 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleLeave = () => setCoords({ x: -9999, y: -9999 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        "--x": `${coords.x}px`,
        "--y": `${coords.y}px`,
        "--r": `${radius}px`,
      }}
      className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            `radial-gradient(var(--r) var(--r) at var(--x) var(--y), rgba(255,255,255,0.12), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}