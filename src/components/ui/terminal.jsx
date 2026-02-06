import React, { useEffect, useRef, useState } from "react";

function useInView(ref, rootMargin = "0px") {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { root: null, rootMargin, threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
  return inView;
}

export function Terminal({ children, className = "", sequence = true, startOnView = true }) {
  const containerRef = useRef(null);
  const inView = useInView(containerRef);
  const [activeIndex, setActiveIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!startOnView) {
      setStarted(true);
    } else if (inView) {
      setStarted(true);
    }
  }, [inView, startOnView]);

  const handleDone = () => {
    if (!sequence) return;
    setActiveIndex((idx) => idx + 1);
  };

  const items = React.Children.toArray(children);

  return (
    <div
      ref={containerRef}
      className={`rounded-xl border border-[#30363d] bg-[#0d1117] text-[#e6edf3] font-mono text-sm overflow-hidden ${className}`}
    >
      <div className="px-4 py-2 bg-[#161b22] border-b border-[#30363d] flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#f85149]" />
        <div className="w-3 h-3 rounded-full bg-[#f0883e]" />
        <div className="w-3 h-3 rounded-full bg-[#3fb950]" />
      </div>
      <div className="p-4 space-y-2">
        {items.map((child, idx) => {
          const isActive = sequence ? idx === activeIndex : true;
          return React.cloneElement(child, {
            key: idx,
            __sequence: sequence,
            __active: started && isActive,
            __startOnView: startOnView,
            onDone: handleDone,
          });
        })}
      </div>
    </div>
  );
}

export function TypingAnimation({
  children,
  className = "",
  duration = 60,
  delay = 0,
  as = "span",
  startOnView = true,
  onDone,
  __sequence,
  __active,
  __startOnView,
}) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [text, setText] = useState("");
  const [started, setStarted] = useState(false);

  const shouldStart = (__sequence ? __active : true) && (!(__startOnView ?? startOnView) || inView);

  useEffect(() => {
    if (started || !shouldStart) return;
    setStarted(true);
    const startTimer = setTimeout(() => {
      const full = String(children);
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setText(full.slice(0, i));
        if (i >= full.length) {
          clearInterval(interval);
          onDone && onDone();
        }
      }, Math.max(10, duration));
    }, Math.max(0, delay));
    return () => clearTimeout(startTimer);
  }, [shouldStart, started, children, duration, delay, onDone]);

  const AsComponent = as;
  return (
    <div ref={ref} className={className}>
      <AsComponent>
        {text}
        <span className="inline-block w-2 h-4 align-baseline bg-[#e6edf3] ml-1 animate-pulse" />
      </AsComponent>
    </div>
  );
}

export function AnimatedSpan({
  children,
  className = "",
  delay = 0,
  startOnView = false,
  onDone,
  __sequence,
  __active,
  __startOnView,
}) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [visible, setVisible] = useState(false);

  const shouldStart = (__sequence ? __active : true) && (!(__startOnView ?? startOnView) || inView);

  useEffect(() => {
    if (visible || !shouldStart) return;
    const t = setTimeout(() => {
      setVisible(true);
      onDone && onDone();
    }, Math.max(0, delay));
    return () => clearTimeout(t);
  }, [shouldStart, visible, delay, onDone]);

  return (
    <div ref={ref} className={className}>
      <span style={{ opacity: visible ? 1 : 0, transition: "opacity 300ms ease" }}>
        {children}
      </span>
    </div>
  );
}
