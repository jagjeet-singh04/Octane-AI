import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Octane AI</h3>
            <p className="text-gray-400 max-w-md">
              Empowering developers with AI-powered tools to accelerate career growth and coding excellence.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/thinkcode" className="hover:text-white transition-colors">ThinkCode</a></li>
              <li><a href="/ai-resume" className="hover:text-white transition-colors">AI Resume Builder</a></li>
              <li><a href="/ai-interview" className="hover:text-white transition-colors">AI Interview Helper</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/how-to-use" className="hover:text-white transition-colors">How to Use</a></li>
              <li><a href="/license" className="hover:text-white transition-colors">License Generator</a></li>
            </ul>
          </div>
          
          
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Octane AI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}