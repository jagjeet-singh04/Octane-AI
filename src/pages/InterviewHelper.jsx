import React, { useState, useRef, useEffect } from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { 
  CheckIcon, 
  CopyIcon, 
  DownloadIcon, 
  EyeIcon, 
  EyeOffIcon, 
  ShieldIcon,
  FileArchiveIcon,
  LockIcon,
  ClockIcon,
  ZapIcon,
  SparklesIcon
} from "lucide-react";

export default function InterviewHelper() {
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRef = useRef(null);
  
  const password = "chii yaar chii";
  const fileInfo = {
    name: "Interview_Resources_2025.zip",
    size: "96.82 MB",
    lastUpdated: "March 15, 2025",
    contents: [
      { name: "Online Assessment Helper", icon: "⚡" },
      { name: "Advanced Interview Helper", icon: "🎯" },
      { name: "Tab Switch Detection", icon: "🔍" },
      { name: "Stealth Mode", icon: "🕶️" }
    ]
  };

  const features = [
    { icon: <ShieldIcon className="w-5 h-5" />, text: "Enterprise-grade Security" },
    { icon: <ZapIcon className="w-5 h-5" />, text: "Lightning Fast" },
    { icon: <ClockIcon className="w-5 h-5" />, text: "Regular Updates" }
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      
      // Enhanced button animation
      if (buttonRef.current) {
        buttonRef.current.style.transform = "scale(0.95)";
        buttonRef.current.style.background = "linear-gradient(135deg, #10b981, #059669)";
        setTimeout(() => {
          if (buttonRef.current) {
            buttonRef.current.style.transform = "scale(1)";
          }
        }, 150);
      }
      
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = password;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSelectAll = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  // Real download handled via external link below

  // Auto-hide password after 10 seconds
  useEffect(() => {
    if (showPassword) {
      const timer = setTimeout(() => {
        setShowPassword(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showPassword]);

  // Card hover effect
  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      };
      
      card.addEventListener('mousemove', handleMouseMove);
      return () => card.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      {/* Enhanced gradient background */}
      <BackgroundGradientAnimation
        containerClassName="fixed inset-0 -z-10"
        className="text-white"
        interactive={true}
        gradientBackgroundStart="rgb(0, 2, 15)"
        gradientBackgroundEnd="rgb(15, 0, 35)"
        firstColor="18, 113, 255"
        secondColor="221, 74, 255"
        thirdColor="100, 220, 255"
        fourthColor="255, 100, 150"
        fifthColor="180, 180, 255"
        pointerColor="140, 100, 255"
        blendingValue="hard-light"
        size="95%"
      />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Enhanced background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40 -z-10" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-2">
              <SparklesIcon className="w-5 h-5 text-blue-400 animate-pulse" />
              <span className="text-sm font-semibold text-blue-300">Enterprise Ready</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/40" />
            <span className="text-sm font-medium text-neutral-300">Secure • Professional • Efficient</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200 leading-tight">
            Interview
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Toolkit
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light">
            Advanced suite of professional tools designed to elevate your interview performance 
            with enterprise-grade security and seamless integration.
          </p>
        </div>

        {/* Features Banner */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-blue-400">
                {feature.icon}
              </div>
              <span className="text-sm font-medium text-neutral-200">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* File Information Card */}
          <div 
            ref={cardRef}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-2xl shadow-2xl overflow-hidden group"
            style={{
              '--mouse-x': '50%',
              '--mouse-y': '50%',
            }}
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                 style={{
                   background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(120, 119, 198, 0.15), transparent 40%)`,
                 }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                  <FileArchiveIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Resource Package</h2>
                  <p className="text-neutral-400 text-sm">Complete interview preparation suite</p>
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="font-semibold text-lg text-white mb-2 truncate">{fileInfo.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-neutral-400">
                    <span className="flex items-center gap-1">
                      <FileArchiveIcon className="w-4 h-4" />
                      {fileInfo.size}
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      {fileInfo.lastUpdated}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <ZapIcon className="w-5 h-5 text-blue-400" />
                    Included Tools:
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {fileInfo.contents.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 group/item">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-neutral-200 font-medium flex-1">{item.name}</span>
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Enhanced Download Button */}
              <a
                href="https://www.mediafire.com/file/ifddbxmnvmu8mwf/dist.zip/file"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full group relative rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl"
              >
                <div className="relative z-10 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 transition-all duration-300 group-hover:from-blue-700 group-hover:to-purple-700">
                  <div className="flex items-center justify-center gap-3">
                    <DownloadIcon className="w-5 h-5" />
                    <span className="font-bold text-white">Download Resources Package</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Password Section */}
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-2xl shadow-2xl overflow-hidden group">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                 style={{
                   background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(120, 119, 198, 0.15), transparent 40%)`,
                 }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
                  <LockIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Secure Access</h2>
                  <p className="text-neutral-400 text-sm">Encrypted file protection</p>
                </div>
              </div>
              
              <p className="text-neutral-300 mb-8 leading-relaxed text-lg font-light">
                Use the secure password below to extract the encrypted archive. 
                All contents are protected with military-grade encryption for your security.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-300 mb-4 uppercase tracking-wider">
                    Encryption Password
                  </label>
                  <div 
                    className="relative group/input"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <input
                      ref={inputRef}
                      readOnly
                      type={showPassword ? "text" : "password"}
                      value={password}
                      className="w-full rounded-2xl bg-black/40 border-2 border-white/10 px-6 pr-32 py-5 text-lg font-mono text-white select-all transition-all duration-300 group-hover/input:border-white/20 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 backdrop-blur-xl"
                      onClick={handleSelectAll}
                      aria-label="Access password"
                    />
                    
                    {/* Enhanced action buttons */}
                    <div className="absolute inset-y-2 right-2 flex items-center gap-2">
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                      </button>
                      <button
                        ref={buttonRef}
                        onClick={handleCopy}
                        className={`flex items-center gap-3 px-5 py-3 rounded-xl border-2 transition-all duration-300 font-semibold ${
                          copied 
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 border-green-400 text-white scale-105" 
                            : "bg-gradient-to-r from-purple-500 to-pink-500 border-purple-400 text-white hover:scale-105 hover:shadow-lg"
                        }`}
                        aria-label="Copy password"
                      >
                        {copied ? (
                          <>
                            <CheckIcon className="w-4 h-4" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <CopyIcon className="w-4 h-4" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Enhanced security indicator */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div 
                          key={i}
                          className="w-2 h-6 rounded-full bg-green-400"
                          style={{ opacity: 1 - (i * 0.2) }}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-green-400">Strong Encryption</span>
                  </div>
                  <div className="text-xs text-neutral-400">
                    Auto-hides in 10s
                  </div>
                </div>
              </div>

              {/* Enhanced Tips */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20">
                <h4 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5" />
                  Pro Tips:
                </h4>
                <ul className="text-sm text-blue-200/90 space-y-2">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    Click anywhere on the password field to automatically select all text
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    Use the eye icon to temporarily reveal the password
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    The copy button provides visual confirmation when successful
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 mb-4">
            <span className="text-neutral-400 text-sm flex items-center gap-2">
              <ShieldIcon className="w-4 h-4 text-green-400" />
              File Integrity Verified
            </span>
            <span className="text-neutral-400 text-sm flex items-center gap-2">
              <ZapIcon className="w-4 h-4 text-blue-400" />
              Updated Weekly
            </span>
            <span className="text-neutral-400 text-sm flex items-center gap-2">
              <ClockIcon className="w-4 h-4 text-purple-400" />
              24/7 Support
            </span>
          </div>
          <p className="text-neutral-500 text-sm">
            Need assistance? Contact our professional support team at support@octane.com
          </p>
        </div>
      </div>

      {/* Enhanced notification */}
      {copied && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-bottom-8 duration-500">
          <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl border border-green-400/30 backdrop-blur-xl">
            <div className="p-2 rounded-full bg-white/20">
              <CheckIcon className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold">Password Copied!</p>
              <p className="text-sm text-white/80">Securely saved to your clipboard</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}