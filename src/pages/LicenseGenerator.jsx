import React, { useMemo, useState } from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { CardSpotlight } from "../components/ui/card-spotlight.jsx";
import { motion } from "framer-motion";
// Lint guard: keep a reference so strict unused-var rule (allowing ONLY UPPERCASE) doesn't flag the import
const MOTION = motion;
import CryptoJS from "crypto-js";
import { KeyIcon, ShieldIcon, CopyIcon, CheckCircleIcon, AlertCircleIcon } from "lucide-react";

export default function LicenseGenerator() {
  const [tempKey, setTempKey] = useState("");
  const [finalKey, setFinalKey] = useState("");
  const [copied, setCopied] = useState(false);

  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
  const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

  // Mildly obfuscated secret (remember: do NOT rely on frontend secrecy)
  const secret = useMemo(() => {
    try {
      const p1 = "T0NUQU5F"; // "OCTANE"
      const p2 = "X0FJX1NFQ1JFVF9TQUxU"; // "_AI_SECRET_SALT"
      // atob is available in browsers
      return atob(p1) + atob(p2);
    } catch {
      // Fallback (non-obfuscated)
      return "OCTANE_AI_SECRET_SALT";
    }
  }, []);

  const cleanTempKey = (value) => value.toUpperCase().replace(/[^A-Z0-9]/g, "");

  const formatGroups = (value) =>
    value
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .match(/.{1,4}/g)
      ?.join("-") ?? value;

  const generateLicense = () => {
    const raw = cleanTempKey(tempKey);
    if (!raw) {
      setFinalKey("");
      return;
    }
    const hash = CryptoJS.SHA256(raw + secret).toString();
    const license = hash.substring(0, 16).toUpperCase();
    setFinalKey(formatGroups(license));
  };

  const handleCopy = async () => {
    if (!finalKey) return;
    try {
      await navigator.clipboard.writeText(finalKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden text-white selection:bg-blue-500/40 selection:text-white">
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

      <main className="relative pt-28 pb-20 lg:pt-36 lg:pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center mb-10">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 w-max mx-auto mb-4">
              <ShieldIcon className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">Device-Bound Licensing</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl font-extrabold tracking-tight leading-tight">
              Octane AI License Generator
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-200 mt-2">
              Paste the TEMP KEY from your app to generate a device-specific FINAL LICENSE KEY.
            </motion.p>
          </motion.div>

          {/* Generator Card */}
          <CardSpotlight>
            <div className="p-6">
              <label className="block text-sm font-semibold mb-2">Temporary Key</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={tempKey}
                  onChange={(e) => setTempKey(e.target.value)}
                  placeholder="Enter TEMP KEY from app (e.g., A3F8-9D1C-7E5B)"
                  className="flex-1 rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-blue-400/40"
                />
                <button
                  onClick={generateLicense}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold"
                >
                  Generate
                </button>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold">Final License Key</label>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-sm"
                    disabled={!finalKey}
                  >
                    {copied ? <CheckCircleIcon className="w-4 h-4 text-green-400" /> : <CopyIcon className="w-4 h-4" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
                <div className="rounded-xl bg-black/40 border border-white/10 p-4 font-mono tracking-widest text-lg select-all min-h-[56px] flex items-center">
                  {finalKey || <span className="text-gray-400">—</span>}
                </div>

                <div className="mt-4 text-xs text-gray-300 leading-relaxed">
                  <p className="mb-1">How it works:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Your app generates a TEMP KEY from device info (MAC/CPU).</li>
                    <li>This page computes SHA256(TEMP + SECRET) and shows the first 16 chars.</li>
                    <li>Paste the FINAL KEY back into the app to activate on this device.</li>
                  </ul>
                  <div className="flex items-start gap-2 mt-3 text-amber-300/90">
                    <AlertCircleIcon className="w-4 h-4 mt-0.5" />
                    <span>This page only formats the key. Real verification must happen in your application.</span>
                  </div>
                </div>
              </div>
            </div>
          </CardSpotlight>
        </div>
      </main>
    </div>
  );
}
