import React, { useRef } from "react";
import {
  IconCode,
  IconMessageCircle,
  IconChartLine,
  IconRocket,
  IconShieldCheck,
  IconBolt,
  IconUsers
} from "@tabler/icons-react";
import { BackgroundGradient } from "../ui/background-gradient";
import { HeroParallax } from "../ui/hero-parallax.jsx";

const features = [
  {
    title: "ThinkCode AI",
    description: "Write, refactor, and debug with AI-assisted coding. Real-time suggestions and automated code reviews.",
    Icon: IconCode,
    stats: "2.5x faster coding",
    gradient: "from-blue-500/20 to-cyan-500/20",
    delay: 0.1
  },
  {
    title: "Interview AI Coach",
    description: "Practice with realistic AI interviews. Get instant feedback on technical and behavioral questions.",
    Icon: IconMessageCircle,
    stats: "85% success rate",
    gradient: "from-green-500/20 to-emerald-500/20",
    delay: 0.3
  },
  {
    title: "Career Growth Engine",
    description: "Personalized learning paths, progress tracking, and skill recommendations for continuous growth.",
    Icon: IconChartLine,
    stats: "3x career growth",
    gradient: "from-orange-500/20 to-red-500/20",
    delay: 0.4
  },
  {
    title: "Live Code Collaboration",
    description: "Real-time coding sessions with team members and AI pair programming for enhanced productivity.",
    Icon: IconUsers,
    stats: "40% more efficient",
    gradient: "from-indigo-500/20 to-blue-500/20",
    delay: 0.5
  },
  {
    title: "Smart Code Review",
    description: "Automated code analysis with AI-powered suggestions for best practices and performance optimization.",
    Icon: IconShieldCheck,
    stats: "90% bug reduction",
    gradient: "from-teal-500/20 to-cyan-500/20",
    delay: 0.6
  },
  {
    title: "Instant Deployment",
    description: "One-click deployment with integrated CI/CD pipelines and automated testing frameworks.",
    Icon: IconRocket,
    stats: "5min deployment",
    gradient: "from-rose-500/20 to-pink-500/20",
    delay: 0.7
  },
  {
    title: "Performance Analytics",
    description: "Comprehensive analytics dashboard tracking your coding performance and interview readiness.",
    Icon: IconBolt,
    stats: "Real-time insights",
    gradient: "from-amber-500/20 to-yellow-500/20",
    delay: 0.8
  }
];

// FeatureCard grid implementation removed in favor of parallax rendering

export function Features() {
  const ref = useRef(null);

  // Convert features into items for parallax; include a thumbnail-like visual built from the feature card styling
  const items = features.map((f) => ({ ...f, id: f.title }));

  const header = (
    <div className="max-w-7xl relative mx-auto py-20 md:py-32 px-4 w-full left-0 top-0">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-blue-400">AI-Powered Platform</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
          Built for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Developers</span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
          Experience the future of developer tools — now flowing in a smooth parallax.
        </p>
      </div>
    </div>
  );

  return (
    <section ref={ref} id="features" className="relative">
      {/* Background fades to transparent at the bottom to blend into footer */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-gray-900 to-transparent" />
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
            backgroundSize: "100px 100px",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))",
          }}
        />
      </div>
      <div className="relative z-10">
        <HeroParallax
          items={items}
          header={header}
          renderItem={(item) => (
            <a href="#features" className="block h-full w-full">
              <div className="absolute inset-0">
                <BackgroundGradient
                  containerClassName="h-full w-full rounded-xl"
                  className={`h-full w-full rounded-xl p-6 bg-gray-900/80 backdrop-blur-sm border border-white/10 flex flex-col justify-end`}
                >
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.gradient} opacity-20`} />
                  <div className="relative z-10">
                    <div className="mb-4">
                      <item.Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-neutral-300 text-sm mt-2 line-clamp-2">{item.description}</p>
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-xs font-medium text-green-400">{item.stats}</span>
                    </div>
                  </div>
                </BackgroundGradient>
              </div>
            </a>
          )}
        />
      </div>
    </section>
  );
}