import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { CardSpotlight } from "../components/ui/card-spotlight.jsx";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card.jsx";
import { motion } from "framer-motion";
import {
  UsersIcon,
  ZapIcon,
  GlobeIcon,
  GraduationCapIcon,
  HeartIcon,
  DollarSignIcon,
  ClockIcon,
  CodeIcon,
  BrainIcon,
  ShieldIcon,
  MessageSquareIcon,
  RocketIcon,
  ArrowRightIcon,
  MailIcon,
  LinkedinIcon,
  GithubIcon,
  MapPinIcon,
  CalendarIcon,
  CheckCircleIcon,
  SparklesIcon
} from "lucide-react";

export default function CareersPage() {
  // Animation presets
  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
  const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

  // Benefits data
  const benefits = [
    {
      icon: <DollarSignIcon className="w-6 h-6" />,
      title: "Competitive Salary",
      description: "Competitive compensation with equal opportunities",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <GlobeIcon className="w-6 h-6" />,
      title: "Remote First",
      description: "Work from anywhere in the world with flexible hours",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <GraduationCapIcon className="w-6 h-6" />,
      title: "Learning Budget",
      description: "$annual budget for courses, books, and conferences",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <UsersIcon className="w-6 h-6" />,
      title: "Team Retreats",
      description: "Quarterly meetups in amazing locations worldwide",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "Unlimited PTO",
      description: "Take the time you need to recharge and refresh",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <HeartIcon className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance",
      color: "from-pink-500 to-rose-500"
    }
  ];

  // Open positions
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "5+ years",
      description: "Lead development of our AI-powered interview platform using React, Python, and modern web technologies.",
      requirements: [
        "Expertise in React and Node.js",
        "Experience with Python and AI integration",
        "Knowledge of real-time web technologies",
        "Strong problem-solving skills"
      ]
    },
    {
      title: "AI/ML Engineer",
      department: "Artificial Intelligence",
      type: "Full-time",
      location: "Remote",
      experience: "3+ years",
      description: "Build and optimize our AI models for code analysis and interview assistance.",
      requirements: [
        "Experience with LLMs and NLP",
        "Python, TensorFlow/PyTorch",
        "API design and integration",
        "Strong mathematical background"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      type: "Full-time",
      location: "Remote",
      experience: "4+ years",
      description: "Manage our cloud infrastructure and ensure system reliability and scalability.",
      requirements: [
        "AWS/Azure/GCP expertise",
        "Docker and Kubernetes",
        "CI/CD pipelines",
        "Monitoring and logging"
      ]
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "2+ years",
      description: "Create beautiful, responsive user interfaces for our interview platform.",
      requirements: [
        "React and TypeScript",
        "CSS-in-JS and animations",
        "UI/UX design sense",
        "Performance optimization"
      ]
    }
  ];

  // Interview process
  const interviewProcess = [
    {
      step: 1,
      title: "Initial Chat",
      description: "30-minute call with our founder to discuss your background and interests",
      duration: "30 mins",
      icon: <MessageSquareIcon className="w-5 h-5" />
    },
    {
      step: 2,
      title: "Technical Screen",
      description: "Practical coding exercise relevant to the role you're applying for",
      duration: "1 hour",
      icon: <CodeIcon className="w-5 h-5" />
    },
    {
      step: 3,
      title: "Technical Deep Dive",
      description: "Programming session with our engineering team to solve real-world problems",
      duration: "1 hours",
      icon: <BrainIcon className="w-5 h-5" />
    },
    {
      step: 4,
      title: "Team Collaboration",
      description: "Meet the team and discuss how you'd approach real-world challenges",
      duration: "1 hours",
      icon: <UsersIcon className="w-5 h-5" />
    },
    {
      step: 5,
      title: "Offer",
      description: "Congratulations! We make you an offer and welcome you to the team!",
      duration: "Within 48 hours",
      icon: <RocketIcon className="w-5 h-5" />
    }
  ];

  // Company values for careers
  const companyValues = [
    {
      icon: <ZapIcon className="w-5 h-5" />,
      title: "Move Fast & Innovate",
      description: "We ship quickly and iterate based on user feedback"
    },
    {
      icon: <UsersIcon className="w-5 h-5" />,
      title: "Users First",
      description: "Every decision starts with what's best for our users"
    },
    {
      icon: <ShieldIcon className="w-5 h-5" />,
      title: "Build Trust",
      description: "We're transparent and honest in everything we do"
    },
    {
      icon: <HeartIcon className="w-5 h-5" />,
      title: "Passion for Learning",
      description: "We're constantly growing and improving"
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
            className="text-center mb-20"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 w-max mx-auto mb-6">
              <RocketIcon className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">We're Hiring</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-400">Build the Future of</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-500">Technical Interviews</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Join our mission to help millions of engineers showcase their true potential and land their dream jobs.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <a 
                href="#positions"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-2xl font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
              >
                <CodeIcon className="w-5 h-5" />
                <span>View Open Positions</span>
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href="#culture"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/6 border border-white/10 font-semibold hover:bg-white/8 transition"
              >
                <UsersIcon className="w-5 h-5" />
                <span>Our Culture</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Benefits Section */}
          <section id="culture" className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Why Join Octane AI?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We take care of our team with comprehensive benefits and a supportive work environment.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CardSpotlight>
                    <div className="p-6 h-full">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} mb-4`}>
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Company Values */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Culture & Values</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                The principles that guide how we work and build together
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/6 border border-white/8 hover:border-blue-400/30 transition">
                    <div className="text-blue-300 mt-1">{value.icon}</div>
                    <div>
                      <h3 className="font-bold mb-2">{value.title}</h3>
                      <p className="text-sm text-gray-300">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Open Positions */}
          <section id="positions" className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Join our growing team and help shape the future of technical interviews
              </p>
            </motion.div>

            <div className="space-y-6">
              {openPositions.length === 0 ? (
                <div className="p-10 rounded-2xl bg-white/6 border border-white/8 text-center">
                  <h3 className="text-3xl font-extrabold mb-2">Coming Soon</h3>
                  <p className="text-gray-300">We don't have any open positions right now. Please check back later.</p>
                </div>
              ) : (
                openPositions.map((position, index) => (
                  <motion.div
                    key={position.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CardContainer className="w-full">
                      <CardBody className="w-full relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-400/30 transition">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm border border-blue-500/30">
                                    <MapPinIcon className="w-3 h-3" />
                                    {position.location}
                                  </span>
                                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm border border-purple-500/30">
                                    <CalendarIcon className="w-3 h-3" />
                                    {position.type}
                                  </span>
                                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm border border-green-500/30">
                                    <UsersIcon className="w-3 h-3" />
                                    {position.department}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-gray-300">Experience</div>
                                <div className="font-semibold text-blue-300">{position.experience}</div>
                              </div>
                            </div>
                            
                            <p className="text-gray-300 mb-4">{position.description}</p>
                            
                            <div className="space-y-2">
                              <h4 className="font-semibold text-sm text-gray-200">Key Requirements:</h4>
                              <div className="flex flex-wrap gap-2">
                                {position.requirements.map((req, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-gray-300 text-sm border border-white/10"
                                  >
                                    <CheckCircleIcon className="w-3 h-3 text-green-400" />
                                    {req}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="lg:w-48 flex-shrink-0">
                            <a 
                              href={`mailto:jagjeetsingh0424@gmail.com?subject=Application: ${position.title}`}
                              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-2xl font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
                            >
                              <MailIcon className="w-4 h-4" />
                              Apply Now
                            </a>
                          </div>
                        </div>
                      </CardBody>
                    </CardContainer>
                  </motion.div>
                ))
              )}
            </div>
          </section>

          {/* Interview Process */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Interview Process</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent and respectful - we value your time and want you to succeed
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {interviewProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <CardSpotlight>
                    <div className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg mb-4">
                        {step.step}
                      </div>
                      <div className="text-blue-300 mb-2">{step.icon}</div>
                      <h3 className="font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-300 mb-3">{step.description}</p>
                      <div className="text-xs text-gray-400 bg-white/5 rounded-full px-3 py-1 inline-block">
                        {step.duration}
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
                  <SparklesIcon className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-semibold text-yellow-200">Don't See Your Role?</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">Still Interested in Joining Us?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  We're always looking for talented people who share our passion for helping engineers succeed. 
                  Even if you don't see the perfect role, we'd love to hear from you.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="mailto:jagjeetsingh0424@gmail.com?subject=General Application - Octane AI"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-2xl font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
                  >
                    <MailIcon className="w-5 h-5" />
                    <span>Send General Application</span>
                  </a>
                  
                  <a 
                    href="linkedin.com/in/jagjeet-singh-a71aa2251/"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/6 border border-white/10 font-semibold hover:bg-white/8 transition"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                    <span>Follow on LinkedIn</span>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-gray-400 text-sm">
                    Have questions? Reach out to{" "}
                    <a href="mailto:jagjeetsingh0424@gmail.com" className="text-blue-300 hover:text-blue-200">
                      jagjeetsingh0424@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}