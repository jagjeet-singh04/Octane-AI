"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "../../lib/utils.js";

export const StickyScroll = ({
  content,
  contentClassName,
  className,
  scrollLength,
}) => {
  const MDiv = motion.div;
  const MH2 = motion.h2;
  const MP = motion.p;
  const [activeCard, setActiveCard] = React.useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (cardLength <= 1) {
      setActiveCard(0);
      return;
    }
    
    // Improved calculation with better handling for last card
    const cardsHeight = 1 / cardLength;
    const idx = Math.floor(latest / cardsHeight);
    const clamped = Math.max(0, Math.min(idx, cardLength - 1));
    
    // Additional check for the last card to ensure it stays active longer
    if (latest >= 0.95 && clamped === cardLength - 2) {
      setActiveCard(cardLength - 1);
    } else {
      setActiveCard(clamped);
    }
  });

  const linearGradients = useMemo(() => [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ], []);

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);
  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  // Improved container height calculation for mobile
  const totalSteps = Math.max(cardLength, 1);
  const computedHeight = isMobile 
    ? `${totalSteps * 120}vh` // More space per card on mobile
    : `${totalSteps * 80}vh`;
  
  const containerHeight = scrollLength ?? computedHeight;

  return (
    <MDiv
      ref={ref}
      className={cn("relative", className)}
      style={{ height: containerHeight }}
    >
      <div className={`sticky ${isMobile ? 'top-24' : 'top-1/2 -translate-y-1/2'} transform`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center justify-items-center">
            {/* Left: active text - centered */}
            <div className="max-w-2xl text-center md:text-left">
              <div className={`${isMobile ? 'my-6 min-h-[200px]' : 'my-10 min-h-[300px]'} flex flex-col justify-center`}>
                <MH2
                  key={`title-${activeCard}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-2xl md:text-4xl font-extrabold text-slate-100 tracking-tight"
                >
                  {content[activeCard]?.title}
                </MH2>
                <MP
                  key={`desc-${activeCard}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                  className="text-lg md:text-xl mt-4 max-w-md md:max-w-lg leading-relaxed text-slate-300"
                >
                  {content[activeCard]?.description}
                </MP>
                
                {/* Mobile preview below text */}
                <div className="md:hidden mt-6 w-full flex justify-center">
                  <div className="relative w-full max-w-sm overflow-hidden rounded-xl shadow-lg">
                    {/* Gradient background layer */}
                    <div
                      className="absolute inset-0"
                      style={{ background: backgroundGradient }}
                    />
                    {/* Image layer */}
                    <div className="relative z-10 h-48 w-full flex items-center justify-center">
                      {content[activeCard]?.content ?? null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: sticky preview - hidden on mobile, shown on desktop */}
            <div
              style={{ background: backgroundGradient }}
              className={cn(
                "hidden md:flex overflow-hidden rounded-md bg-white items-center justify-center",
                contentClassName
              )}
            >
              <div className="md:h-48 md:w-72 lg:h-60 lg:w-80 xl:h-72 xl:w-96 flex items-center justify-center">
                {content[activeCard]?.content ?? null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MDiv>
  );
};