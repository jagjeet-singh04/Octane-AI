import React, { useState } from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { CardSpotlight } from "../components/ui/card-spotlight.jsx";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card.jsx";
import { motion } from "framer-motion";
import {
  FileTextIcon,
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
  DownloadIcon,
  StarIcon,
  RocketIcon,
  SearchIcon,
  TrendingUpIcon,
  AwardIcon,
  LayoutTemplateIcon
} from "lucide-react";

export default function AIResumeBuilderPage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState("");

  // Animation presets
  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
  const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

  // Features
  const features = [
    {
      icon: <ZapIcon className="w-6 h-6" />,
      title: "AI-Powered Content",
      description: "Generate professional, impactful resume content tailored to your industry and experience level",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <ShieldIcon className="w-6 h-6" />,
      title: "ATS Optimized",
      description: "Beat applicant tracking systems with optimized formatting and keyword placement",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <LayoutTemplateIcon className="w-6 h-6" />,
      title: "Professional Templates",
      description: "Choose from dozens of ATS-friendly templates designed by HR professionals",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <SearchIcon className="w-6 h-6" />,
      title: "Keyword Analysis",
      description: "Get insights on missing keywords and skills for your target job positions",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <TrendingUpIcon className="w-6 h-6" />,
      title: "Real-time Optimization",
      description: "See your resume score improve instantly as you make AI-suggested changes",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <AwardIcon className="w-6 h-6" />,
      title: "Industry Specific",
      description: "Tailored content for tech, business, healthcare, and all major industries",
      color: "from-pink-500 to-rose-500"
    }
  ];

  // Benefits
  const benefits = [
    {
      icon: <ClockIcon className="w-5 h-5" />,
      title: "Save 5+ Hours",
      description: "Create a professional resume in minutes instead of hours"
    },
    {
      icon: <TargetIcon className="w-5 h-5" />,
      title: "3x More Interviews",
      description: "ATS-optimized resumes get significantly more callbacks"
    },
    {
      icon: <StarIcon className="w-5 h-5" />,
      title: "Professional Quality",
      description: "Resumes that stand out to recruiters and hiring managers"
    },
    {
      icon: <CheckCircleIcon className="w-5 h-5" />,
      title: "Error-Free",
      description: "AI catches grammar mistakes and formatting issues"
    }
  ];

  // How it works
  const howItWorks = [
    {
      step: 1,
      title: "Input Your Details",
      description: "Enter your experience, skills, and career objectives",
      icon: <FileTextIcon className="w-6 h-6" />
    },
    {
      step: 2,
      title: "AI Analysis & Generation",
      description: "Our AI creates optimized content and suggests improvements",
      icon: <CpuIcon className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Customize & Perfect",
      description: "Choose templates and fine-tune with real-time feedback",
      icon: <LayoutTemplateIcon className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Download & Apply",
      description: "Export ATS-friendly PDF and start getting interviews",
      icon: <DownloadIcon className="w-6 h-6" />
    }
  ];

  // ATS Optimization Features
  const atsFeatures = [
    {
      feature: "Keyword Optimization",
      description: "Automatically include relevant keywords from job descriptions",
      icon: <SearchIcon className="w-5 h-5" />
    },
    {
      feature: "Formatting Compliance",
      description: "Perfect structure that all ATS systems can parse correctly",
      icon: <CheckCircleIcon className="w-5 h-5" />
    },
    {
      feature: "Section Recognition",
      description: "Ensure ATS correctly identifies experience, education, and skills",
      icon: <EyeIcon className="w-5 h-5" />
    },
    {
      feature: "Score Tracking",
      description: "Real-time ATS compatibility score as you build",
      icon: <BarChart3Icon className="w-5 h-5" />
    }
  ];

  // Testimonials (from beta testers)
  const testimonials = [
    {
      name: "Software Engineer",
      company: "Tech Company",
      content: "Landed 3 interviews in one week after using the AI Resume Builder. The ATS optimization is a game-changer!",
      rating: 5,
      before: "0 callbacks",
      after: "5 interviews"
    },
    {
      name: "Marketing Manager",
      company: "Fortune 500",
      content: "The AI suggestions helped me articulate my achievements much more effectively. My resume looks professional and gets noticed.",
      rating: 5,
      before: "1 week to create",
      after: "20 minutes"
    },
    {
      name: "Career Coach",
      company: "Professional Services",
      content: "I recommend this to all my clients. The ATS optimization alone is worth it - resumes actually get seen by humans now.",
      rating: 5,
      before: "Manual editing",
      after: "AI-powered"
    }
  ];

  // Resume templates preview
  const templates = [
    {
      name: "Professional",
      style: "Clean and corporate",
      bestFor: "Business, Management",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Modern",
      style: "Contemporary design",
      bestFor: "Tech, Creative Roles",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Executive",
      style: "Premium layout",
      bestFor: "Senior Positions",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Minimal",
      style: "Simple and elegant",
      bestFor: "Academic, Research",
      color: "from-gray-500 to-slate-500"
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
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-400">AI Resume</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-purple-500">Builder</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Create ATS-friendly, professional resumes in seconds with AI. Beat applicant tracking systems and land more interviews with our intelligent resume builder.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                <TargetIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">ATS Optimized</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <ZapIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">AI Powered</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <UsersIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">Join 800+ Waitlist</span>
              </div>
            </motion.div>

            {/* Benefits Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-blue-300 mb-2">{benefit.icon}</div>
                  <div className="text-lg font-bold text-white">{benefit.title}</div>
                  <div className="text-xs text-gray-300 mt-1">{benefit.description}</div>
                </div>
              ))}
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
                      <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                        <MailIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold">Get Early Access</div>
                        <div className="text-sm text-gray-300">Be the first to create AI-powered resumes</div>
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
                          className="flex-1 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition"
                        />
                        <button
                          type="submit"
                          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
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
              <h2 className="text-3xl font-bold mb-4">AI-Powered Resume Excellence</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Create resumes that both humans and ATS systems love
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
              <h2 className="text-3xl font-bold mb-4">Create Your Perfect Resume in 4 Steps</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                From blank page to interview-ready resume in minutes
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
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-lg mb-4">
                        {step.step}
                      </div>
                      <div className="text-indigo-300 mb-3">{step.icon}</div>
                      <h3 className="font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-300">{step.description}</p>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ATS Optimization Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Beat Applicant Tracking Systems</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                75% of resumes never get seen by humans. Ensure yours does.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {atsFeatures.map((feature, index) => (
                <motion.div
                  key={feature.feature}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CardSpotlight>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-green-300">{feature.icon}</div>
                        <h3 className="text-xl font-bold">{feature.feature}</h3>
                      </div>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Template Preview */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Professional Templates</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                ATS-friendly designs that impress recruiters
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map((template, index) => (
                <motion.div
                  key={template.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CardContainer>
                    <CardBody className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${template.color} mb-4 mx-auto`}>
                        <FileTextIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold mb-2">{template.name}</h3>
                      <p className="text-sm text-gray-300 mb-2">{template.style}</p>
                      <div className="text-xs text-indigo-300 font-semibold">{template.bestFor}</div>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Resume Score Preview */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Real-Time Resume Scoring</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Watch your resume score improve as you make AI-suggested changes
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <CardContainer>
                <CardBody className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Score Overview */}
                    <div>
                      <h3 className="text-xl font-bold mb-6">Resume Score</h3>
                      <div className="text-center mb-6">
                        <div className="inline-flex items-baseline gap-2 mb-2">
                          <span className="text-5xl font-bold text-green-400">94</span>
                          <span className="text-2xl text-gray-400">/100</span>
                        </div>
                        <div className="text-green-300 font-semibold">Excellent - ATS Ready</div>
                      </div>
                      
                      <div className="space-y-3">
                        {[
                          { name: "ATS Compatibility", score: 96, color: "bg-green-500" },
                          { name: "Content Quality", score: 92, color: "bg-blue-500" },
                          { name: "Formatting", score: 98, color: "bg-purple-500" },
                          { name: "Keyword Match", score: 90, color: "bg-indigo-500" }
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

                    {/* Optimization Suggestions */}
                    <div>
                      <h3 className="text-xl font-bold mb-6">AI Suggestions</h3>
                      <div className="space-y-4">
                        {[
                          { type: "strength", text: "Excellent keyword optimization for target role" },
                          { type: "improvement", text: "Add 2-3 more measurable achievements" },
                          { type: "completed", text: "ATS formatting perfect - no issues detected" },
                          { type: "suggestion", text: "Consider adding a professional summary" }
                        ].map((suggestion, index) => (
                          <div key={index} className={`flex items-start gap-3 p-3 rounded-xl ${
                            suggestion.type === 'strength' ? 'bg-green-500/10 border border-green-500/20' :
                            suggestion.type === 'completed' ? 'bg-blue-500/10 border border-blue-500/20' :
                            'bg-yellow-500/10 border border-yellow-500/20'
                          }`}>
                            {suggestion.type === 'strength' && <CheckCircleIcon className="w-4 h-4 text-green-400 mt-0.5" />}
                            {suggestion.type === 'completed' && <StarIcon className="w-4 h-4 text-blue-400 mt-0.5" />}
                            {suggestion.type === 'improvement' && <ZapIcon className="w-4 h-4 text-yellow-400 mt-0.5" />}
                            {suggestion.type === 'suggestion' && <EyeIcon className="w-4 h-4 text-yellow-400 mt-0.5" />}
                            <span className="text-sm text-gray-200">{suggestion.text}</span>
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
              <h2 className="text-3xl font-bold mb-4">Success Stories from Early Users</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how AI Resume Builder is helping people land their dream jobs
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
                      
                      <div className="flex items-center justify-between mb-3 p-2 rounded-lg bg-white/5">
                        <span className="text-xs text-gray-400">Before:</span>
                        <span className="text-xs text-red-300 font-semibold">{testimonial.before}</span>
                        <span className="text-xs text-gray-400">After:</span>
                        <span className="text-xs text-green-300 font-semibold">{testimonial.after}</span>
                      </div>
                      
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
                  <SparklesIcon className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-semibold text-indigo-200">Limited Early Access</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Job Search?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Join the waitlist today and be among the first to create ATS-optimized resumes that actually get you interviews.
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
                        className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition min-w-64"
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-2xl font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
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
                    href="mailto:jagjeetsingh0424@gmail.com?subject=AI Resume Builder Enterprise Inquiry"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/6 border border-white/10 font-semibold hover:bg-white/8 transition"
                  >
                    <UsersIcon className="w-5 h-5" />
                    <span>Enterprise Inquiry</span>
                  </a>
                </div>

                <div className="mt-6 text-sm text-gray-400">
                  <p>Join 800+ professionals on the waitlist • Early access starting soon • Free for early users</p>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}