import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { CardSpotlight } from "../components/ui/card-spotlight.jsx";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card.jsx";
import { motion } from "framer-motion";
import {
  DownloadIcon,
  ZapIcon,
  ShieldIcon,
  ClockIcon,
  UsersIcon,
  KeyboardIcon,
  SettingsIcon,
  PlayIcon,
  MicIcon,
  MonitorIcon,
  CopyIcon,
  HistoryIcon,
  EyeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  WifiIcon,
  KeyIcon
} from "lucide-react";

export default function HowToUse() {
  // Animation presets
  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
  const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

  // Hotkeys data
  const hotkeys = [
    { keys: "Alt + Shift + Z + X", action: "Toggle overlay" },
    { keys: "Alt + Shift + Z + C", action: "Capture/Search screen" },
    { keys: "Alt + Shift + Z + L", action: "Listen on/off" },
    { keys: "Alt + Shift + Z + A", action: "Copy response" },
    { keys: "Alt + Shift + Z + R", action: "Select speaker" },
    { keys: "Alt + Shift + Z + M", action: "Select mic" },
    { keys: "Alt + Shift + Z + G", action: "Clear response" },
    { keys: "Alt + Shift + Z + T", action: "Close app" },
    { keys: "Alt + Shift + Z + Arrow keys", action: "Move overlay" },
    { keys: "Alt + Shift + Z + 0-9", action: "Load history item 1-10" },
    { keys: "Alt + Shift + Z + F", action: "Expand/Restore" },
    { keys: "Alt + Shift + Z + W/S", action: "Scroll line up/down" }
  ];

  // Setup steps
  const setupSteps = [
    {
      step: 1,
      title: "Get Gemini API Key",
      description: "Create your API key ",
      icon: <KeyIcon className="w-6 h-6" />,
      details: "Visit ai.google.dev to create your free API key for Gemini"
    },
    {
      step: 2,
      title: "Download & Install",
      description: "Get the resource package and extract",
      icon: <DownloadIcon className="w-6 h-6" />,
      details: "Download the zip file and extract to your preferred location"
    },
    {
      step: 3,
      title: "Configure API Key",
      description: "Add your key to environment file",
      icon: <SettingsIcon className="w-6 h-6" />,
      details: "Create a .env file with: GEMINI_API_KEY=your_key_here"
    },
    {
      step: 4,
      title: "Launch Application",
      description: "Run the main Python script",
      icon: <PlayIcon className="w-6 h-6" />,
      details: "Open PowerShell in project folder and run: python main.py"
    }
  ];

  // Workflows
  const workflows = [
    {
      title: "Screen Capture Mode",
      icon: <MonitorIcon className="w-6 h-6" />,
      steps: [
        "Press Alt + Shift + Z + C to capture screen",
        "AI analyzes and explains content instantly",
        "Get 'FINAL ANSWER' first, then detailed explanation",
        "Auto-continues for longer responses"
      ],
      useCase: "Perfect for code challenges, diagrams, and multiple-choice questions"
    },
    {
      title: "Audio Listen Mode",
      icon: <MicIcon className="w-6 h-6" />,
      steps: [
        "Press Alt + Shift + Z + L to start listening",
        "Speak clearly or capture speaker audio",
        "Get real-time transcription and AI responses",
        "Press again to stop and get final answer"
      ],
      useCase: "Ideal for live interview questions and verbal responses"
    }
  ];

  // Troubleshooting tips
  const troubleshooting = [
    {
      issue: "No response generated",
      solution: "Check internet connection and API key",
      icon: <WifiIcon className="w-5 h-5" />
    },
    {
      issue: "Mic not detected",
      solution: "Press Alt + Shift + Z + M to select mic",
      icon: <MicIcon className="w-5 h-5" />
    },
    {
      issue: "Slow transcription",
      solution: "Reduce AUDIO_TRANSCRIPT_MAX_CHARS in settings",
      icon: <ClockIcon className="w-5 h-5" />
    },
    {
      issue: "Partial answers",
      solution: "App auto-continues; wait a few seconds",
      icon: <AlertCircleIcon className="w-5 h-5" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 w-max mx-auto mb-6">
              <ZapIcon className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">Complete Guide</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-400">How to Use</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-500">Interview Helper</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-gray-200 max-w-3xl mx-auto">
              Master your technical interviews with this comprehensive guide to using Octane AI Interview Helper effectively.
            </motion.p>
          </motion.div>

          {/* Quick Start Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Quick Start Guide</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Get up and running in 4 simple steps</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {setupSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CardSpotlight>
                    <div className="p-6 h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg">
                          {step.step}
                        </div>
                        <div className="text-blue-300">{step.icon}</div>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{step.description}</p>
                      <p className="text-gray-400 text-xs">{step.details}</p>
                    </div>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Hotkeys Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Keyboard Shortcuts</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Complete control without breaking your flow</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hotkeys.map((hotkey, index) => (
                <motion.div
                  key={hotkey.keys}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="p-4 rounded-2xl bg-white/6 border border-white/8 hover:border-blue-400/30 transition group">
                    <div className="flex items-center justify-between">
                      <kbd className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 font-mono text-sm text-blue-300 group-hover:text-blue-200 transition">
                        {hotkey.keys}
                      </kbd>
                      <KeyboardIcon className="w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-200 mt-2 font-medium">{hotkey.action}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Workflows Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Workflow Guides</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Master the two main modes of operation</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {workflows.map((workflow, index) => (
                <motion.div
                  key={workflow.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <CardContainer className="h-full">
                    <CardBody className="h-full relative rounded-2xl border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                          {workflow.icon}
                        </div>
                        <h3 className="text-xl font-bold">{workflow.title}</h3>
                      </div>

                      <div className="space-y-3 mb-6">
                        {workflow.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-200 text-sm">{step}</p>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 rounded-xl bg-white/4 border border-white/8">
                        <p className="text-sm text-gray-300">
                          <span className="font-semibold text-blue-300">Best for:</span> {workflow.useCase}
                        </p>
                      </div>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Features & Tips Section */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <CardSpotlight>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                    <div className="space-y-4">
                      {[
                        { icon: <EyeIcon className="w-5 h-5" />, text: "Click-through Overlay", desc: "Never steals focus from your work" },
                        { icon: <HistoryIcon className="w-5 h-5" />, text: "Session History", desc: "Quickly recall previous responses" },
                        { icon: <CopyIcon className="w-5 h-5" />, text: "One-Click Copy", desc: "Instant copy of AI responses" },
                        { icon: <ShieldIcon className="w-5 h-5" />, text: "Hide from Screen Share", desc: "Windows-compatible stealth mode" }
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-white/4 border border-white/6">
                          <div className="text-blue-300">{feature.icon}</div>
                          <div>
                            <div className="font-semibold">{feature.text}</div>
                            <div className="text-sm text-gray-300">{feature.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>

              {/* Pro Tips */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <CardSpotlight>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-6">Pro Tips</h3>
                    <div className="space-y-4">
                      {[
                        "Use Screen Capture for diagrams and code explanations",
                        "Keep audio clips under 30 seconds for best results",
                        "Enable auto-continue for longer AI responses",
                        "Use history shortcuts to quickly access recent answers",
                        "Toggle stealth mode during screen sharing sessions"
                      ].map((tip, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20">
                          <ZapIcon className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                          <p className="text-sm text-gray-200">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            </div>
          </section>

          {/* Troubleshooting Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Troubleshooting</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Quick solutions for common issues</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {troubleshooting.map((item, index) => (
                <motion.div
                  key={item.issue}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-2xl bg-white/6 border border-white/8 hover:border-red-400/30 transition">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-red-300">{item.icon}</div>
                      <h4 className="font-bold text-lg text-white">{item.issue}</h4>
                    </div>
                    <p className="text-gray-300">{item.solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-white/2 to-transparent p-8 rounded-3xl border border-white/8">
                <h3 className="text-2xl font-bold mb-4">Ready to Ace Your Interviews?</h3>
                <p className="text-gray-300 mb-6">Download the complete resource package and start practicing today.</p>
                <a 
                  href="https://www.mediafire.com/file/ifddbxmnvmu8mwf/Octane-AI-Interview-Kit.zip/file" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-2xl font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
                >
                  <DownloadIcon className="w-5 h-5" />
                  <span>Download Interview Helper</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}