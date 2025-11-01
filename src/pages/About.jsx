import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { CardSpotlight } from "../components/ui/card-spotlight.jsx";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card.jsx";
import { motion } from "framer-motion";
import {
  TargetIcon,
  UsersIcon,
  ShieldIcon,
  ZapIcon,
  BrainIcon,
  CodeIcon,
  MessageSquareIcon,
  EyeIcon,
  ClockIcon,
  CheckCircleIcon,
  SparklesIcon,
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  MailIcon,
  LinkedinIcon,
  HeartIcon
} from "lucide-react";

export default function AboutPage() {
  // Animation presets
  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
  const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

  // Mission and values
  const values = [
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "Our Mission",
      description: "Democratize technical interview preparation by providing AI-powered tools that level the playing field for all candidates.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BrainIcon className="w-6 h-6" />,
      title: "Our Vision",
      description: "Create a world where every engineer can showcase their true potential without artificial barriers in technical interviews.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <UsersIcon className="w-6 h-6" />,
      title: "Community First",
      description: "Built by engineers, for engineers. We listen to our community and continuously improve based on real user feedback.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Team members (you can replace with actual team info)
  const team = [
    {
      name: "Jagjeet Singh",
      role: "Founder & Developer",
      description: "Full-stack developer passionate about AI and education technology",
      email: "jagjeetsingh0424@gmail.com",
      avatar: "/api/placeholder/100/100",
      contributions: ["Project Lead", "AI Integration", "System Architecture"]
    },
    {
      name: "Open Source Community",
      role: "Contributors",
      description: "Amazing developers who help improve the platform through code contributions, bug reports, and feature suggestions.",
      avatar: "/api/placeholder/100/100",
      contributions: ["Testing", "Feature Suggestions", "Bug Reports"]
    }
  ];

  // Technology stack
  const techStack = [
    {
      category: "Frontend & UI",
      items: ["React", "Tailwind CSS", "Framer Motion", "Custom UI Components"],
      icon: <CodeIcon className="w-5 h-5" />
    },
    {
      category: "AI & Backend",
      items: ["Python", "Google Gemini AI", "WebSockets", "Audio Processing"],
      icon: <BrainIcon className="w-5 h-5" />
    },
    {
      category: "Security & Privacy",
      items: ["AES-256 Encryption", "Local Processing", "No Data Storage", "Windows Security"],
      icon: <ShieldIcon className="w-5 h-5" />
    }
  ];

  // Features highlight
  const features = [
    {
      icon: <ZapIcon className="w-5 h-5" />,
      title: "Real-time AI Assistance",
      description: "Get instant explanations and answers during live interviews"
    },
    {
      icon: <EyeIcon className="w-5 h-5" />,
      title: "Non-intrusive Overlay",
      description: "Click-through interface that never steals focus"
    },
    {
      icon: <MessageSquareIcon className="w-5 h-5" />,
      title: "Dual Input Modes",
      description: "Screen capture and audio listening for all scenarios"
    },
    {
      icon: <ClockIcon className="w-5 h-5" />,
      title: "Always Available",
      description: "24/7 assistance with offline capabilities"
    }
  ];

  // Statistics
  const stats = [
    { number: "3x", label: "Success Rate Improvement" },
    { number: "1000+", label: "Engineers Helped" },
    { number: "99.9%", label: "Uptime Reliability" },
    { number: "24/7", label: "Support Available" }
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
            className="text-center mb-20"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 w-max mx-auto mb-6">
              <SparklesIcon className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">About Octane AI</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-400">Revolutionizing</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-500">Technical Interviews</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              We're on a mission to transform how engineers prepare for and excel in technical interviews through cutting-edge AI technology.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-2xl font-bold text-blue-300">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mission & Values */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We believe in empowering every engineer to perform at their best when it matters most.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <CardSpotlight>
                    <div className="p-6 h-full">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} mb-4`}>
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{value.description}</p>
                    </div>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Built with Modern Technology</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Leveraging cutting-edge tools and frameworks to deliver the best experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CardContainer className="h-full">
                    <CardBody className="h-full relative rounded-2xl border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-blue-300">{tech.icon}</div>
                        <h3 className="text-lg font-bold">{tech.category}</h3>
                      </div>
                      <ul className="space-y-2">
                        {tech.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Features Highlight */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose Octane AI?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Designed specifically for the unique challenges of technical interviews
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-2xl bg-white/6 border border-white/8 hover:border-blue-400/30 transition group text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4 group-hover:scale-110 transition">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Passionate developers building tools we wish we had during our own interview journeys
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <CardSpotlight>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-16 h-16 rounded-full border-2 border-blue-500/30"
                          onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0ea5e9&color=fff&size=64`;
                          }}
                        />
                        <div>
                          <h3 className="text-xl font-bold">{member.name}</h3>
                          <p className="text-blue-300">{member.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{member.description}</p>
                      
                      {member.email && (
                        <div className="flex items-center gap-2 mb-3">
                          <MailIcon className="w-4 h-4 text-gray-400" />
                          <a href={`mailto:${member.email}`} className="text-sm text-blue-300 hover:text-blue-200 transition">
                            {member.email}
                          </a>
                        </div>
                      )}

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-gray-200">Key Contributions:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.contributions.map((contribution, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30"
                            >
                              {contribution}
                            </span>
                          ))}
                        </div>
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
                  <HeartIcon className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-semibold text-red-200">Join Our Mission</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">Ready to Transform Interview Preparation?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Join thousands of engineers who are acing their technical interviews with confidence
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="https://www.mediafire.com/file/bn0vo1xmakrpl6v/Octane-AI-Interview-Kit.zip/file" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-2xl font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
                  >
                    <DownloadIcon className="w-5 h-5" />
                    <span>Get Started Now</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </a>
                  
                  <a 
                    href="mailto:jagjeetsingh0424@gmail.com" 
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/6 border border-white/10 font-semibold hover:bg-white/8 transition"
                  >
                    <MailIcon className="w-5 h-5" />
                    <span>Contact Us</span>
                  </a>
                </div>

                <div className="flex justify-center gap-4 mt-6">
                  <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                    <MailIcon className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}