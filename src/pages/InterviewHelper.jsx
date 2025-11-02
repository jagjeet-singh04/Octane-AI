

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation"; // keep this
import { CardSpotlight } from "../components/ui/card-spotlight.jsx";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card.jsx";
import { motion } from "framer-motion";
// Lint guard: keep a reference so the strict unused-var rule (allowing ONLY UPPERCASE) doesn't flag the import
const MOTION = motion;
import {
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  EyeOffIcon,
  ShieldIcon,
  FileArchiveIcon,
  LockIcon,
  ClockIcon,
  ZapIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  UsersIcon,
  TargetIcon,
  BrainIcon,
  MenuIcon,
  XIcon,
  KeyIcon
} from "lucide-react";

export default function InterviewHelper() {
  // --- state and refs ---
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  // --- static data (kept from your original file) ---
  const password = "Contact admin for password";
  const fileInfo = {
    name: "Interview_Resources_2025.zip",
    size: "96.82 MB",
    lastUpdated: "Oct 22, 2025",
    contents: [
      { name: "Online Assessment Helper", icon: "⚡", description: "AI-powered assistance for coding challenges" },
      { name: "Advanced Interview Helper", icon: "🎯", description: "Real-time guidance during interviews" },
      { name: "Tab Switch Detection", icon: "🔍", description: "Monitor browser activity seamlessly" },
      { name: "Stealth Mode", icon: "🕶️", description: "Discreet operation when needed" }
    ]
  };

  const features = [
    { icon: <ShieldIcon className="w-6 h-6" />, text: "Enterprise Security", description: "Military-grade encryption" },
    { icon: <ZapIcon className="w-6 h-6" />, text: "Lightning Fast", description: "Instant response times" },
    { icon: <ClockIcon className="w-6 h-6" />, text: "Always Updated", description: "Weekly enhancements" },
    { icon: <UsersIcon className="w-6 h-6" />, text: "24/7 Support", description: "Expert assistance" }
  ];

  const benefits = [
    { icon: <TargetIcon className="w-5 h-5" />, text: "Increase success rate by 3x" },
    { icon: <BrainIcon className="w-5 h-5" />, text: "AI-powered real-time assistance" },
    { icon: <CheckCircle2Icon className="w-5 h-5" />, text: "Trusted by Users " }
  ];

  // --- interactions ---
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);

      if (buttonRef.current) {
        buttonRef.current.style.transform = "scale(0.95)";
        setTimeout(() => {
          if (buttonRef.current) buttonRef.current.style.transform = "scale(1)";
        }, 150);
      }

      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
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
    if (inputRef.current) inputRef.current.select();
  };

  // --- animation presets ---
  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
  const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

  return (
    <div className="min-h-screen relative overflow-hidden text-white selection:bg-blue-500/40 selection:text-white">
      {/* KEEP the user's gradient background component as requested */}
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

      {/* Floating Navbar */}
     
      {/* HERO */}
      <main className="relative pt-28 pb-20 lg:pt-36 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left: Hero content */}
            <div className="lg:col-span-7">
              <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 w-max">
                  <SparklesIcon className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-semibold text-blue-200">Trusted by Users</span>
                </motion.div>

                <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                  <span className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-400">Ace Your</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-500">Technical Interviews with Octane AI</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="text-lg text-gray-200 max-w-3xl">
                  A modern toolkit crafted for engineers preparing for interviews. Real-time assistance, curated resources, and enterprise-grade security — all in one place.
                </motion.p>

                <motion.div variants={fadeUp} className="flex items-center gap-4 flex-wrap">
                  <a href="https://www.mediafire.com/file/nodgra5kd7is6bs/Octane-AI-Interview-Kit.zip/file" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-2xl font-semibold shadow-lg transform hover:-translate-y-0.5 transition">
                    <DownloadIcon className="w-5 h-5" />
                    <span>Download Resources</span>
                  </a>

                  <Link to="/how-to-use" className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/6 border border-white/10 font-semibold hover:bg-white/8 transition">How to Use ?</Link>

                  <Link to="/license" className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 font-semibold shadow-lg transform hover:-translate-y-0.5 transition">
                    <KeyIcon className="w-5 h-5" />
                    <span>Get License Key</span>
                  </Link>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-6">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/6 border border-white/8">
                      <div className="text-green-300">{b.icon}</div>
                      <span className="text-sm font-semibold">{b.text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Right: Resource Card (glass) */}
            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-10 group-hover:opacity-25 transition duration-700"></div>
                <div className="relative rounded-3xl bg-white/6 border border-white/8 p-6 shadow-2xl backdrop-blur">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow">
                      <FileArchiveIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{fileInfo.name}</h3>
                      <p className="text-sm text-gray-300">Everything you need in one download</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/30 border border-white/6 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-semibold text-white truncate">{fileInfo.name}</div>
                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium">Latest</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span className="flex items-center gap-1"><FileArchiveIcon className="w-4 h-4" />{fileInfo.size}</span>
                      <span className="flex items-center gap-1"><ClockIcon className="w-4 h-4" />{fileInfo.lastUpdated}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    {fileInfo.contents.map((c, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/4 border border-white/6 hover:border-blue-400/30 transition">
                        <div className="text-2xl mt-1">{c.icon}</div>
                        <div className="flex-1">
                          <div className="font-semibold">{c.name}</div>
                          <div className="text-sm text-gray-300">{c.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a href="https://www.mediafire.com/file/nodgra5kd7is6bs/Octane-AI-Interview-Kit.zip/file" target="_blank" rel="noopener noreferrer" className="block mt-2">
                    <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-center font-semibold shadow hover:shadow-2xl transition transform hover:-translate-y-0.5">
                      <div className="flex items-center justify-center gap-3">
                        <DownloadIcon className="w-4 h-4" />
                        <span>Download Resource Package</span>
                      </div>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Password & contact card moved to a dedicated two-column section below */}
            </div>
          </div>

          {/* Resources + Secure Access Section with image on the left (equal, larger) */}
          <section id="resources" className="mt-16">
            <div className="grid lg:grid-cols-2 gap-10 items-stretch">
              {/* Left: illustrative image (equal height, fully visible, 3D tilt) */}
              <div className="h-[440px]">
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="h-full">
                  <CardContainer className="h-full">
                    <CardBody className="h-full relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                      <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-blue-600/10 rounded-[1.75rem] blur-xl" aria-hidden="true" />
                      <div className="relative z-10 h-full w-full flex items-center justify-center p-4">
                        <CardItem translateZ={50} className="h-full w-full flex items-center justify-center">
                          <img
                            src="/invisible-preview-img.png"
                            onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='/invisible-img.png';}}
                            alt="Invisible to others preview"
                            className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl"
                            loading="lazy"
                          />
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              </div>

              {/* Right: Secure Access card (equal height, larger) */}
              <div className="h-[440px]">
                <CardSpotlight className="h-full">
                  <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="h-full rounded-2xl p-6 backdrop-blur shadow-lg flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600">
                      <LockIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold">Secure Access</div>
                      <div className="text-sm text-gray-300">Protected with enterprise encryption</div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-200 mb-4">The resource package is secured with military-grade encryption. <span className="font-semibold text-white">Contact the administrator</span> to receive the password and access the tools.</p>

                  <label className="block text-xs font-semibold text-gray-200 mb-2 uppercase tracking-wider">Encryption Password</label>
                  <div className="w-full rounded-2xl bg-black/40 border-2 border-white/8 px-2 py-1.5 flex items-center gap-2">
                    <input ref={inputRef} readOnly type="text" value={password} onClick={handleSelectAll} className="flex-1 bg-transparent outline-none border-0 px-2 py-2 font-mono text-sm text-white/90 select-all" />
                    <button disabled className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/10 border border-white/15 text-white/80" title="Reveal disabled"><EyeOffIcon className="w-4 h-4" /></button>
                    <button ref={buttonRef} onClick={handleCopy} disabled title="Contact admin to receive password" className={`inline-flex items-center gap-2 h-9 px-3 rounded-lg border-2 font-semibold transition ${copied ? "bg-green-500/20 border-green-400 text-green-300" : "bg-white/10 border-white/15 text-white/85 cursor-not-allowed"}`}>
                      <CopyIcon className="w-4 h-4" />
                      <span>Copy</span>
                    </button>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-blue-500/8 border border-blue-400/10">
                      <div className="flex items-center gap-2">
                        <ShieldIcon className="w-4 h-4 text-blue-300" />
                        <div>
                          <div className="text-xs font-semibold text-blue-200">AES-256</div>
                          <div className="text-xs text-blue-300">Encryption</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-green-500/8 border border-green-400/10">
                      <div className="flex items-center gap-2">
                        <CheckCircle2Icon className="w-4 h-4 text-green-300" />
                        <div>
                          <div className="text-xs font-semibold text-green-200">Verified</div>
                          <div className="text-xs text-green-300">File Integrity</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-2xl bg-gradient-to-r from-white/5 to-blue-500/6 border border-white/8">
                    <div className="flex items-center gap-2 mb-1"><UsersIcon className="w-4 h-4 text-blue-300" /><div className="text-sm font-semibold">Need Access?</div></div>
                    <div className="text-xs text-gray-300">Contact the administrator to get the password and full access to all features.</div>
                    <div className="mt-3 text-sm"><span className="font-medium">Email:</span> <span className="text-blue-300">jagjeetsingh0424@gmail.com</span></div>
                  </div>
                  </motion.div>
                </CardSpotlight>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="mt-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((f, i) => (
                <motion.div key={i} variants={fadeUp} className="text-center group p-6 rounded-2xl bg-white/6 border border-white/8 hover:scale-[1.02] transform transition">
                  <div className="mx-auto inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4 shadow">{f.icon}</div>
                  <h4 className="font-bold mb-2">{f.text}</h4>
                  <p className="text-sm text-gray-300">{f.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* CTA Section */}
          <section className="mt-20 bg-gradient-to-br from-white/2 to-transparent p-8 rounded-3xl border border-white/8">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold">Ready to supercharge your interview prep?</h3>
                <p className="text-sm text-gray-300">Join early access and get curated resources, mock prompts, and live assistant features.</p>
              </div>
            </div>
          </section>

          
        </div>
      </main>

      {/* Floating copied toast */}
      {copied && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl border border-green-400/30 backdrop-blur-xl">
            <div className="p-2 rounded-full bg-white/20"><CheckIcon className="w-4 h-4" /></div>
            <div>
              <p className="font-semibold">Password Copied!</p>
              <p className="text-sm text-white/80">Contact admin to receive actual password</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
