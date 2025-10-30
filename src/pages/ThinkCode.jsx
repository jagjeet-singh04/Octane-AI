import React, { useState } from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { CardSpotlight } from "../components/ui/card-spotlight.jsx";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card.jsx";
import { motion } from "framer-motion";
import {
  CodeIcon,
  BrainIcon,
  StarIcon,
  ZapIcon,
  ShieldIcon,
  UsersIcon,
  ClockIcon,
  CheckCircleIcon,
  MailIcon,
  EyeIcon,
  BarChart3Icon,
  TargetIcon,
  SparklesIcon,
  ArrowRightIcon,
  LockIcon,
  CpuIcon,
  GitBranchIcon,
  MessageSquareIcon,
  RocketIcon
} from "lucide-react";

export default function ThinkCodePage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState("");

  // Animation presets
  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
  const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

  // Features
  const features = [
    {
      icon: <BrainIcon className="w-6 h-6" />,
      title: "AI-Powered Code Analysis",
      description: "Advanced machine learning algorithms analyze your code for quality, efficiency, and best practices",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <StarIcon className="w-6 h-6" />,
      title: "Intelligent Scoring System",
      description: "Get comprehensive scores across multiple dimensions: readability, performance, security, and more",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart3Icon className="w-6 h-6" />,
      title: "Detailed Insights",
      description: "Understand exactly where your code excels and where it needs improvement with actionable feedback",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <ZapIcon className="w-6 h-6" />,
      title: "Real-time Feedback",
      description: "Instant analysis as you code with suggestions for immediate improvement",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <ShieldIcon className="w-6 h-6" />,
      title: "Security Analysis",
      description: "Identify potential security vulnerabilities and learn how to fix them",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <GitBranchIcon className="w-6 h-6" />,
      title: "Multi-language Support",
      description: "Supports Python, JavaScript, Java, C++, and all major programming languages",
      color: "from-pink-500 to-rose-500"
    }
  ];

  // Scoring dimensions
  const scoringDimensions = [
    {
      dimension: "Code Quality",
      description: "Readability, structure, and maintainability",
      icon: <EyeIcon className="w-5 h-5" />,
      metrics: ["Readability Score", "Modularity", "Documentation", "Code Smells"]
    },
    {
      dimension: "Performance",
      description: "Efficiency and optimization potential",
      icon: <ZapIcon className="w-5 h-5" />,
      metrics: ["Time Complexity", "Space Complexity", "Optimization Tips", "Bottlenecks"]
    },
    {
      dimension: "Security",
      description: "Vulnerability detection and best practices",
      icon: <ShieldIcon className="w-5 h-5" />,
      metrics: ["Vulnerability Scan", "Security Best Practices", "Data Protection", "Input Validation"]
    },
    {
      dimension: "Best Practices",
      description: "Industry standards and conventions",
      icon: <CheckCircleIcon className="w-5 h-5" />,
      metrics: ["Coding Standards", "Design Patterns", "Error Handling", "Testing Coverage"]
    }
  ];

  // How it works
  const howItWorks = [
    {
      step: 1,
      title: "Write Your Code",
      description: "Code in your preferred language and environment",
      icon: <CodeIcon className="w-6 h-6" />
    },
    {
      step: 2,
      title: "AI Analysis",
      description: "Our AI deeply analyzes every aspect of your code",
      icon: <BrainIcon className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Get Detailed Score",
      description: "Receive comprehensive scores and insights",
      icon: <StarIcon className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Improve & Learn",
      description: "Implement suggestions and track your progress",
      icon: <RocketIcon className="w-6 h-6" />
    }
  ];

  // Testimonials (from beta testers)
  const testimonials = [
    {
      name: "Tech Lead",
      company: "FAANG Company",
      content: "The most comprehensive code analysis tool I've ever seen. It caught performance issues our senior engineers missed.",
      rating: 5
    },
    {
      name: "Senior Developer",
      company: "Startup",
      content: "Revolutionary approach to code review. The AI suggestions are incredibly accurate and helpful.",
      rating: 5
    },
    {
      name: "Computer Science Professor",
      company: "University",
      content: "Perfect for teaching students about code quality. The scoring system makes learning objective and measurable.",
      rating: 5
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      setTimeout(() => {
        setIsSubscribed(true);
        setSubscribedEmail(email);
        setEmail("");
      }, 1000);
    }
  };

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
            className="text-center mb-20"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 w-max mx-auto mb-6">
              <RocketIcon className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">Launching Soon</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-400">Think</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-cyan-500">Code</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              AI-powered code analysis platform that transforms how you write, review, and improve code. 
              Get instant scores and actionable insights to elevate your coding skills.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                <TargetIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">Early Access Available</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <UsersIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">Join 500+ Waitlist</span>
              </div>
            </motion.div>

            {/* Email Subscription */}
            <motion.div variants={fadeUp} className="max-w-md mx-auto">
              {isSubscribed ? (
                <div className="text-center p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
                  <CheckCircleIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">You're on the List!</h3>
                  <p className="text-gray-300 mb-4">
                    We've sent early access details to <span className="text-green-300 font-semibold">{subscribedEmail}</span>
                  </p>
                  <button
                    onClick={() => setIsSubscribed(false)}
                    className="text-green-300 hover:text-green-200 text-sm font-semibold"
                  >
                    Add another email
                  </button>
                </div>
              ) : (
                <CardSpotlight>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-cyan-600">
                        <MailIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold">Get Early Access</div>
                        <div className="text-sm text-gray-300">Be the first to try ThinkCode</div>
                      </div>
                    </div>
                    
                    <form onSubmit={handleSubscribe} className="space-y-3">
                      <div className="flex gap-2">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="flex-1 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition"
                        />
                        <button
                          type="submit"
                          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-green-600 to-cyan-600 font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
                        >
                          Join Waitlist
                        </button>
                      </div>
                      <p className="text-xs text-gray-400 text-center">
                        No spam. Unsubscribe at any time.
                      </p>
                    </form>
                  </div>
                </CardSpotlight>
              )}
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Revolutionary Code Analysis</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Powered by cutting-edge AI that understands code like a senior developer
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CardSpotlight>
                    <div className="p-6 h-full">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">How ThinkCode Works</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Simple process, powerful results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <CardContainer>
                    <CardBody className="rounded-2xl border border-white/10 bg-white/5 p-6 h-full">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-cyan-600 text-white font-bold text-lg mb-4">
                        {step.step}
                      </div>
                      <div className="text-green-300 mb-3">{step.icon}</div>
                      <h3 className="font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-300">{step.description}</p>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Scoring Dimensions */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Comprehensive Scoring System</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get detailed scores across multiple dimensions of code quality
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {scoringDimensions.map((dimension, index) => (
                <motion.div
                  key={dimension.dimension}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CardSpotlight>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-green-300">{dimension.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold">{dimension.dimension}</h3>
                          <p className="text-sm text-gray-300">{dimension.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {dimension.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-gray-200">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Sample Score Card Preview */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">See Your Code in a New Light</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get actionable insights that help you write better code
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <CardContainer>
                <CardBody className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Score Overview */}
                    <div>
                      <h3 className="text-xl font-bold mb-6">Overall Score</h3>
                      <div className="text-center mb-6">
                        <div className="inline-flex items-baseline gap-2 mb-2">
                          <span className="text-5xl font-bold text-green-400">87</span>
                          <span className="text-2xl text-gray-400">/100</span>
                        </div>
                        <div className="text-green-300 font-semibold">Excellent</div>
                      </div>
                      
                      <div className="space-y-3">
                        {[
                          { name: "Code Quality", score: 92, color: "bg-green-500" },
                          { name: "Performance", score: 85, color: "bg-blue-500" },
                          { name: "Security", score: 78, color: "bg-yellow-500" },
                          { name: "Best Practices", score: 93, color: "bg-purple-500" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">{item.name}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-20 bg-gray-700 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full ${item.color}`}
                                  style={{ width: `${item.score}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-semibold w-8">{item.score}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Insights */}
                    <div>
                      <h3 className="text-xl font-bold mb-6">Key Insights</h3>
                      <div className="space-y-4">
                        {[
                          { type: "strength", text: "Excellent code structure and modularity" },
                          { type: "improvement", text: "Consider optimizing database queries" },
                          { type: "warning", text: "Potential security issue in input validation" },
                          { type: "strength", text: "Great documentation and comments" }
                        ].map((insight, index) => (
                          <div key={index} className={`flex items-start gap-3 p-3 rounded-xl ${
                            insight.type === 'strength' ? 'bg-green-500/10 border border-green-500/20' :
                            insight.type === 'warning' ? 'bg-yellow-500/10 border border-yellow-500/20' :
                            'bg-blue-500/10 border border-blue-500/20'
                          }`}>
                            {insight.type === 'strength' && <CheckCircleIcon className="w-4 h-4 text-green-400 mt-0.5" />}
                            {insight.type === 'warning' && <EyeIcon className="w-4 h-4 text-yellow-400 mt-0.5" />}
                            {insight.type === 'improvement' && <ZapIcon className="w-4 h-4 text-blue-400 mt-0.5" />}
                            <span className="text-sm text-gray-200">{insight.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">What Early Testers Say</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Feedback from developers in our private beta program
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CardSpotlight>
                    <div className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-200 mb-4 text-sm italic">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardSpotlight>
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 w-max mx-auto mb-4">
                  <SparklesIcon className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-semibold text-green-200">Limited Early Access</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Code Quality?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Join the waitlist today and be among the first to experience AI-powered code analysis that actually helps you improve.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  {!isSubscribed ? (
                    <form onSubmit={handleSubscribe} className="flex gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition min-w-64"
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-cyan-600 px-6 py-3 rounded-2xl font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
                      >
                        <MailIcon className="w-5 h-5" />
                        <span>Join Waitlist</span>
                        <ArrowRightIcon className="w-5 h-5" />
                      </button>
                    </form>
                  ) : (
                    <div className="text-center">
                      <CheckCircleIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <p className="text-gray-300 mb-4">
                        Welcome aboard! We've sent details to <span className="text-green-300 font-semibold">{subscribedEmail}</span>
                      </p>
                    </div>
                  )}
                  
                  <a 
                    href="mailto:jagjeetsingh0424@gmail.com?subject=ThinkCode Enterprise Inquiry"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/6 border border-white/10 font-semibold hover:bg-white/8 transition"
                  >
                    <UsersIcon className="w-5 h-5" />
                    <span>Enterprise Inquiry</span>
                  </a>
                </div>

                <div className="mt-6 text-sm text-gray-400">
                  <p>Join 500+ developers on the waitlist • Early access starts soon • Free trial for all early users</p>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}