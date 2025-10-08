import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <BackgroundGradientAnimation
        containerClassName="fixed inset-0 -z-10"
        className="text-white"
        interactive={true}
      />
      
      <div className="text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
          Octane AI
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Supercharge your career with AI-powered tools for developers
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full font-semibold transition-colors">
            Start Free Trial
          </button>
          <button className="px-8 py-3 border border-white hover:bg-white hover:text-black rounded-full font-semibold transition-colors">
            View Demo
          </button>
        </div>
      </div>
    </div>
  );
}