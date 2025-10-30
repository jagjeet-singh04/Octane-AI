import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { CardSpotlight } from "../components/ui/card-spotlight.jsx";
import { motion } from "framer-motion";
import {
  CookieIcon,
  ShieldIcon,
  SettingsIcon,
  EyeIcon,
  CheckCircleIcon,
  XCircleIcon,
  InfoIcon,
  MailIcon,
  ArrowRightIcon
} from "lucide-react";

export default function CookiesPage() {
  // Animation presets
  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
  const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

  const cookieTypes = [
    {
      type: "Essential Cookies",
      description: "Required for basic website functionality",
      necessary: true,
      purpose: "Authentication, security, and core features",
      examples: ["Session management", "Security tokens", "Load balancing"]
    },
    {
      type: "Analytics Cookies",
      description: "Help us understand how visitors interact",
      necessary: false,
      purpose: "Website improvement and user experience",
      examples: ["Page visits", "Feature usage", "Performance metrics"]
    },
    {
      type: "Preference Cookies",
      description: "Remember your settings and choices",
      necessary: false,
      purpose: "Personalized experience",
      examples: ["Language preferences", "Theme settings", "UI configurations"]
    },
    {
      type: "Marketing Cookies",
      description: "Used for advertising and targeting",
      necessary: false,
      purpose: "Relevant content and offers",
      examples: ["Ad performance", "Campaign tracking", "Interest-based ads"]
    }
  ];

  const cookieDetails = [
    {
      name: "session_id",
      duration: "Session",
      purpose: "Maintain user session state"
    },
    {
      name: "csrf_token",
      duration: "Session",
      purpose: "Cross-site request forgery protection"
    },
    {
      name: "user_preferences",
      duration: "1 year",
      purpose: "Store user interface preferences"
    },
    {
      name: "analytics_consent",
      duration: "1 year",
      purpose: "Remember analytics cookie preference"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden text-white selection:bg-blue-500/40 selection:text-white">
      {/* Background Gradient */}
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

      {/* Main Content */}
      <main className="relative pt-28 pb-20 lg:pt-36 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 w-max mx-auto mb-6">
              <CookieIcon className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">Cookie Policy</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-400">Cookie</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-500">Policy</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Last updated: December 1, 2024
            </motion.p>

            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
              <SettingsIcon className="w-4 h-4" />
              <span className="text-sm font-semibold">You're in control of your cookie preferences</span>
            </motion.div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <CardSpotlight>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                    <InfoIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">About Cookies</div>
                    <div className="text-sm text-gray-300">How we use cookies and similar technologies</div>
                  </div>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences, 
                  understanding how you use our services, and showing you relevant content. This policy 
                  explains what cookies are, how we use them, and how you can control them.
                </p>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Cookie Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Types of Cookies We Use</h2>
            <div className="space-y-6">
              {cookieTypes.map((cookie, index) => (
                <motion.div
                  key={cookie.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CardSpotlight>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {cookie.necessary ? (
                            <CheckCircleIcon className="w-5 h-5 text-green-400" />
                          ) : (
                            <SettingsIcon className="w-5 h-5 text-blue-400" />
                          )}
                          <div>
                            <h3 className="text-lg font-bold text-white">{cookie.type}</h3>
                            <p className="text-sm text-gray-300">{cookie.description}</p>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          cookie.necessary 
                            ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                            : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        }`}>
                          {cookie.necessary ? 'Always Active' : 'Optional'}
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-200 mb-2">Purpose</h4>
                          <p className="text-sm text-gray-300">{cookie.purpose}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-gray-200 mb-2">Examples</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            {cookie.examples.map((example, idx) => (
                              <li key={idx}>• {example}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cookie Details Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <CardSpotlight>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <EyeIcon className="w-5 h-5 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Detailed Cookie Information</h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-gray-200 font-semibold">Cookie Name</th>
                        <th className="text-left py-3 px-4 text-gray-200 font-semibold">Duration</th>
                        <th className="text-left py-3 px-4 text-gray-200 font-semibold">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cookieDetails.map((cookie, index) => (
                        <tr key={cookie.name} className="border-b border-white/5">
                          <td className="py-3 px-4 text-gray-300 font-mono">{cookie.name}</td>
                          <td className="py-3 px-4 text-gray-300">{cookie.duration}</td>
                          <td className="py-3 px-4 text-gray-300">{cookie.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Cookie Control */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <CardSpotlight>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <SettingsIcon className="w-5 h-5 text-green-400" />
                    <h3 className="text-lg font-bold text-white">Managing Cookies</h3>
                  </div>
                  <div className="space-y-3 text-sm text-gray-200">
                    <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.</p>
                    <p>However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>
                  </div>
                </div>
              </CardSpotlight>

              <CardSpotlight>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldIcon className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-bold text-white">Browser Settings</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-200">
                    <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit:</p>
                    <ul className="space-y-1">
                      <li>• <span className="text-blue-300">www.aboutcookies.org</span></li>
                      <li>• <span className="text-blue-300">www.allaboutcookies.org</span></li>
                    </ul>
                  </div>
                </div>
              </CardSpotlight>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-white/2 to-transparent p-8 rounded-3xl border border-white/8">
              <h3 className="text-2xl font-bold mb-4">Cookie Preferences</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Have questions about our cookie usage or want to manage your preferences?
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:jagjeetsingh0424@gmail.com?subject=Cookie Policy Inquiry"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-2xl font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
                >
                  <MailIcon className="w-5 h-5" />
                  <span>Contact Us</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  Last updated: December 1, 2024 • We respect your privacy choices
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}