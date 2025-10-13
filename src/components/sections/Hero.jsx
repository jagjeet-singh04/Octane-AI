import React, { useState, useEffect } from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const navigate = useNavigate();

  const features = [
    "AI-Powered Coding Platform",
    "Smart Resume Builder", 
    "Interview AI Assistant",
    "Career Growth Engine"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <BackgroundGradientAnimation
        containerClassName="fixed inset-0 -z-10"
        className="text-white"
        interactive={true}
        gradientBackgroundStart="rgb(0, 5, 20)"
        gradientBackgroundEnd="rgb(15, 0, 40)"
        firstColor="18, 113, 255"
        secondColor="221, 74, 255"
        thirdColor="100, 220, 255"
        fourthColor="255, 100, 150"
        fifthColor="180, 180, 255"
        pointerColor="140, 100, 255"
        blendingValue="hard-light"
        size="90%"
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="text-center text-white px-4 max-w-6xl mx-auto relative z-10">
        {/* Main title with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-gradient-x">
              OCTANE
            </span>
          </h1>
        </motion.div>

        {/* Subtitle with rotating features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-gray-200 font-light">
            Supercharge your career with
          </p>
          
          <div className="h-12 md:h-16 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
              >
                {features[currentFeature]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Enhanced CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              background: "rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl font-semibold text-lg transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10"> Start Free Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "white",
              color: "black"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-white rounded-2xl font-semibold text-lg transition-all duration-300 group relative overflow-hidden"
            type="button"
            onClick={() => navigate("/ai-interview")}
          >
            <span className="relative z-10"> Interview Helper Free for first 50 User </span>
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-gray-300"
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-black bg-gradient-to-r from-blue-400 to-purple-500"
                />
              ))}
            </div>
            <span>Join 500+ Developers</span>
          </div>
          
          <div className="hidden sm:block w-px h-6 bg-gray-600" />
          
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {"★".repeat(5)}
            </div>
            <span>Rated 4.5/5 by developers</span>
          </div>
        </motion.div>

        
      </div>

      {/* Floating product cards */}
      
    
      {/* Scroll indicator moved to the bottom of the hero container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="pointer-events-none absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-0"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400 select-none"
        >
          <span className="text-sm">Explore Features</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}