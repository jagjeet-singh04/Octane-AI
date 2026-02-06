import React, { useMemo, useState } from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { CardSpotlight } from "../components/ui/card-spotlight.jsx";
import { motion } from "framer-motion";
// Lint guard: keep a reference so strict unused-var rule (allowing ONLY UPPERCASE) doesn't flag the import
const MOTION = motion;
import { KeyIcon, ShieldIcon, CopyIcon, CheckCircleIcon, AlertCircleIcon, MailIcon } from "lucide-react";

export default function LicenseGenerator() {
  const [tempKey, setTempKey] = useState("");
  const [copied, setCopied] = useState(false);

  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
  const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

  const handleCopyTemp = async () => {
    if (!tempKey) return;
    try {
      await navigator.clipboard.writeText(tempKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  // Prefill email to admin with the pasted TEMP KEY
  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("License Request - Octane AI");
    const body = encodeURIComponent(
      `Hello Admin,\n\nPlease generate a FINAL LICENSE KEY for this device.\n\nTEMP KEY: ${tempKey || "<paste your TEMP KEY here>"}\n\nThanks!`
    );
    return `mailto:jagjeetsingh0424@gmail.com?subject=${subject}&body=${body}`;
  }, [tempKey]);

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
              License Activation
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-200 mt-2">
              License keys are issued by the administrator. Paste your TEMP KEY and contact admin to receive your FINAL KEY.
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
                  onClick={handleCopyTemp}
                  className="px-5 py-3 rounded-xl bg-white/10 border border-white/15 font-semibold"
                  disabled={!tempKey}
                  title={!tempKey ? "Paste TEMP KEY first" : "Copy TEMP KEY"}
                >
                  {copied ? (
                    <span className="inline-flex items-center gap-2 text-green-300"><CheckCircleIcon className="w-4 h-4" /> Copied</span>
                  ) : (
                    <span className="inline-flex items-center gap-2"><CopyIcon className="w-4 h-4" /> Copy TEMP KEY</span>
                  )}
                </button>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-start gap-3">
                  <AlertCircleIcon className="w-5 h-5 text-yellow-300 mt-0.5" />
                  <div>
                    <div className="font-semibold">Contact Admin to Get Your License</div>
                    <p className="text-sm text-gray-300 mt-1">License generation is handled by the administrator. Send your TEMP KEY to the admin email, and you will receive your FINAL LICENSE KEY for this device.</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a href={mailtoHref} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
                        <MailIcon className="w-4 h-4" /> Email Admin
                      </a>
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-gray-200">
                        <KeyIcon className="w-4 h-4" /> Include your TEMP KEY in the email
                      </span>
                    </div>
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