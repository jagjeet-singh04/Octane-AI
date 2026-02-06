import React from "react";
import { Link } from "react-router-dom";
import { StickyScroll } from "../ui/sticky-scroll-reveal.jsx";

export function Products() {
  const products = [
    {
      title: "ThinkCode",
      link: "/thinkcode",
      thumbnail: "/thinkcode-demo.png",
      description:
        "ThinkCode is an intelligent coding environment that boosts developer productivity with real-time AI completions, refactoring suggestions, and instant bug detection. It helps you write, test, and debug code faster—integrating seamlessly with your workflow for cleaner and more maintainable projects."
    },
    {
      title: "AI Interview Helper",
      link: "/thinkcode",
      thumbnail: "/ai-interview-demo.png",
      description:
        "Ace your next interview with confidence! The AI Interview Helper simulates real-world technical and HR interviews, providing instant feedback on your answers, tone, and coding logic. Practice personalized interview rounds, analyze your weak areas, and get performance insights to improve effectively."
    }
  ];

  const content = products.map((p) => ({
    title: p.title,
    description: p.description,
    link: p.link,
    content: (
      <Link to={p.link} className="block h-full w-full cursor-pointer" aria-label={p.title}>
        <div className="relative h-full w-full">
          <img
            src={p.thumbnail}
            alt={p.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>
      </Link>
    )
  }));

  return (
    <section id="products" className="relative py-12 md:py-24">
      {/* Matching Features background with top+bottom fade (starts transparent at top) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-gray-900 to-transparent" />
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
          backgroundSize: "100px 100px",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)"
        }}
      />
      <div className="relative z-10">
        {/* Centered title block with increased bottom margin on mobile */}
        <div className="min-h-[40vh] md:min-h-screen flex items-center justify-center px-4 mb-12 md:mb-0">
          <h2 className="text-center text-3xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Explore Our Products
          </h2>
        </div>
        <StickyScroll
          className="w-full"
          content={content}
          contentClassName="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}