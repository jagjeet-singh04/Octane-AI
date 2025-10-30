import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { CardSpotlight } from "../components/ui/card-spotlight.jsx";
import { motion } from "framer-motion";
import {
  FileTextIcon,
  ShieldIcon,
  UsersIcon,
  ClockIcon,
  AlertCircleIcon,
  BookIcon,
  MailIcon,
  ArrowRightIcon
} from "lucide-react";

export default function TermsPage() {
  // Animation presets
  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
  const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using Octane AI's products and services, you accept and agree to be bound by the terms and provision of this agreement."
    },
    {
      title: "Use License",
      content: "Permission is granted to temporarily use Octane AI products for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title."
    },
    {
      title: "Account Responsibility",
      content: "You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account."
    },
    {
      title: "User Conduct",
      content: "You agree not to use the service for any illegal purpose or in any way that might harm, damage, or disparage any other party."
    },
    {
      title: "Intellectual Property",
      content: "The products and all contents, features, and functionality are owned by Octane AI and are protected by international copyright, trademark, and other intellectual property laws."
    },
    {
      title: "Termination",
      content: "We may terminate or suspend access to our service immediately, without prior notice, for any reason whatsoever, including without limitation if you breach the Terms."
    },
    {
      title: "Limitation of Liability",
      content: "In no event shall Octane AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages."
    },
    {
      title: "Governing Law",
      content: "These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions."
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
              <FileTextIcon className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">Legal Documents</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-400">Terms of</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-500">Service</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Last updated: December 1, 2024
            </motion.p>

            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
              <AlertCircleIcon className="w-4 h-4" />
              <span className="text-sm font-semibold">Please read these terms carefully</span>
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
                    <BookIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">Introduction</div>
                    <div className="text-sm text-gray-300">Welcome to Octane AI</div>
                  </div>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  These Terms of Service govern your use of Octane AI's website and all related products, 
                  including Interview Helper, ThinkCode, and AI Resume Builder. By accessing or using our services, 
                  you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.
                </p>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Main Terms Content */}
          <div className="space-y-6 mb-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CardSpotlight>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-300 font-bold text-sm mt-1 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-white">{section.title}</h3>
                        <p className="text-gray-200 leading-relaxed">{section.content}</p>
                      </div>
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <CardSpotlight>
              <div className="p-6 border-l-4 border-yellow-500">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircleIcon className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-lg font-bold text-white">Important Information</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-200">
                  <p>• We reserve the right to modify these terms at any time. We will notify users of any changes.</p>
                  <p>• Continued use of our services after changes constitutes acceptance of the new terms.</p>
                  <p>• If you have any questions about these Terms, please contact us.</p>
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
              <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're here to help clarify any aspect of our Terms of Service.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:jagjeetsingh0424@gmail.com?subject=Terms of Service Inquiry"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-2xl font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
                >
                  <MailIcon className="w-5 h-5" />
                  <span>Contact Legal Team</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  Last updated: October 1, 2025 • Effective immediately
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}