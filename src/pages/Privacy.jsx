import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { CardSpotlight } from "../components/ui/card-spotlight.jsx";
import { motion } from "framer-motion";
import {
  ShieldIcon,
  LockIcon,
  EyeIcon,
  UsersIcon,
  MailIcon,
  DatabaseIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ArrowRightIcon
} from "lucide-react";

export default function PrivacyPage() {
  // Animation presets
  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
  const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

  const privacySections = [
    {
      icon: <DatabaseIcon className="w-5 h-5" />,
      title: "Information We Collect",
      items: [
        "Account information (email, name when provided)",
        "Usage data and product interactions",
        "Technical information (browser type, IP address)",
        "Content you create within our products"
      ]
    },
    {
      icon: <EyeIcon className="w-5 h-5" />,
      title: "How We Use Your Information",
      items: [
        "To provide and maintain our services",
        "To improve and personalize your experience",
        "To communicate with you about updates",
        "To ensure security and prevent fraud"
      ]
    },
    {
      icon: <UsersIcon className="w-5 h-5" />,
      title: "Information Sharing",
      items: [
        "We do not sell your personal information",
        "Limited sharing with trusted service providers",
        "When required by law or legal process",
        "During business transfers or mergers"
      ]
    },
    {
      icon: <LockIcon className="w-5 h-5" />,
      title: "Data Security",
      items: [
        "Encryption of data in transit and at rest",
        "Regular security assessments",
        "Access controls and authentication",
        "Secure data storage practices"
      ]
    },
    {
      icon: <CheckCircleIcon className="w-5 h-5" />,
      title: "Your Rights",
      items: [
        "Access to your personal information",
        "Correction of inaccurate data",
        "Deletion of your personal data",
        "Objection to processing of your data"
      ]
    },
    {
      icon: <ShieldIcon className="w-5 h-5" />,
      title: "Data Retention",
      items: [
        "We retain data only as long as necessary",
        "Account data until deletion request",
        "Usage data for service improvement",
        "Legal requirements compliance"
      ]
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
              <ShieldIcon className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">Your Privacy Matters</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-400">Privacy</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-500">Policy</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Last updated: December 1, 2024
            </motion.p>

            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
              <LockIcon className="w-4 h-4" />
              <span className="text-sm font-semibold">We protect your data with enterprise-grade security</span>
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
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-blue-600">
                    <ShieldIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">Our Commitment</div>
                    <div className="text-sm text-gray-300">Transparent data practices</div>
                  </div>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  At Octane AI, we are committed to protecting your privacy and being transparent about our data practices. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
                  our products and services. We believe in putting you in control of your data.
                </p>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Privacy Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Our Privacy Principles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {privacySections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CardSpotlight>
                    <div className="p-6 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-blue-300">{section.icon}</div>
                        <h3 className="font-bold text-white">{section.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-200">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Data Protection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <CardSpotlight>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <LockIcon className="w-5 h-5 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Data Protection Measures</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-200">Technical Safeguards</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• AES-256 encryption for data at rest</li>
                      <li>• TLS 1.3 for data in transit</li>
                      <li>• Regular security audits and penetration testing</li>
                      <li>• Multi-factor authentication for administrative access</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-200">Organizational Measures</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Employee privacy training</li>
                      <li>• Data protection impact assessments</li>
                      <li>• Incident response planning</li>
                      <li>• Regular policy reviews and updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <CardSpotlight>
              <div className="p-6 border-l-4 border-green-500">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircleIcon className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-bold text-white">Exercising Your Rights</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-200">
                  <p>You have the right to access, correct, or delete your personal data. You can also object to or restrict certain processing activities.</p>
                  <p>To exercise these rights, please contact us at <span className="text-blue-300">jagjeetsingh0424@gmail.com</span>. We will respond to all legitimate requests within 30 days.</p>
                </div>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-white/2 to-transparent p-8 rounded-3xl border border-white/8">
              <h3 className="text-2xl font-bold mb-4">Privacy Questions?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're committed to protecting your privacy and being transparent about our data practices.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:jagjeetsingh0424@gmail.com?subject=Privacy Policy Inquiry"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-2xl font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
                >
                  <MailIcon className="w-5 h-5" />
                  <span>Contact Privacy Team</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  Last updated: December 1, 2024 • We never sell your personal data
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}