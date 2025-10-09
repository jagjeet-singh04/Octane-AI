import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  IconCode,
  IconFileText,
  IconMessageCircle,
  IconChartLine,
  IconRocket,
  IconShieldCheck,
  IconBolt,
  IconUsers
} from "@tabler/icons-react";
import { BackgroundGradient } from "../ui/background-gradient";

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
    title: "AI Resume Builder",
    description: "Create ATS-optimized, role-specific resumes with intelligent content generation and design templates.",
    Icon: IconFileText,
    stats: "98% interview rate",
    gradient: "from-purple-500/20 to-pink-500/20",
    delay: 0.2
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

function FeatureCard({ title, description, Icon, stats, gradient, delay, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <BackgroundGradient
        containerClassName="h-full rounded-2xl"
        className="h-full rounded-2xl p-6 bg-gray-900/90 backdrop-blur-sm border border-white/10"
        animate={true}
      >
        {/* Subtle hover tint over the card content */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon with gradient background */}
          <motion.div whileHover={{ scale: 1.05 }} className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 blur-lg rounded-2xl" />
            <div className="relative w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Icon className="h-7 w-7 text-white" />
            </div>
          </motion.div>

          {/* Feature index (subtle badge) */}
          <div className="absolute top-6 right-6">
            <div className="px-2 py-1 rounded-full text-[10px] font-semibold text-neutral-300 bg-white/5 border border-white/10">
              0{index + 1}
            </div>
          </div>

          {/* Title and description */}
          <h3 className="text-xl font-semibold text-white mb-3 transition-colors group-hover:text-neutral-100">
            {title}
          </h3>
          
          <p className="text-neutral-300 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Stats badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: delay + 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-green-400">{stats}</span>
          </motion.div>

          {/* Hover arrow */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-xl" />
      </BackgroundGradient>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 0%), 
                             radial-gradient(circle at 75px 75px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-400">AI-Powered Platform</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
            Built for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Developers</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the future of developer tools with our comprehensive suite of AI-powered solutions designed to accelerate your career growth and coding excellence.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[ 
              { number: "10K+", label: "Active Developers" },
              { number: "98%", label: "Success Rate" },
              { number: "4.9★", label: "Rating" },
              { number: "2.5x", label: "Faster Growth" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-neutral-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Features grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              index={index}
            />
          ))}
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <BackgroundGradient
            containerClassName="rounded-2xl max-w-2xl mx-auto"
            className="rounded-2xl p-8 bg-gray-900/80 backdrop-blur-sm border border-white/10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Supercharge Your Career?
            </h3>
            <p className="text-neutral-300 mb-6 max-w-md mx-auto">
              Join thousands of developers already accelerating their growth with Octane AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-colors"
              >
                View All Features
              </motion.button>
            </div>
          </BackgroundGradient>
        </motion.div>
      </div>
    </section>
  );
}