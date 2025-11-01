import React, { useState } from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { CardSpotlight } from "../components/ui/card-spotlight.jsx";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card.jsx";
import { motion } from "framer-motion";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  SendIcon,
  UserIcon,
  MessageSquareIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
  MessageCircleIcon,
  ZapIcon,
  UsersIcon,
  ShieldIcon,
  ArrowRightIcon,
  SparklesIcon,
  DownloadIcon
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Animation presets
  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
  const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

  // Contact methods
  const contactMethods = [
    {
      icon: <MailIcon className="w-6 h-6" />,
      title: "Email Us",
      description: "We'll respond within 24 hours",
      value: "jagjeetsingh0424@gmail.com",
      link: "mailto:jagjeetsingh0424@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <MessageCircleIcon className="w-6 h-6" />,
      title: "Live Chat",
      description: "Available during business hours",
      value: "Start Chat",
      link: "#chat",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Schedule Call",
      description: "Book a 30-min consultation",
      value: "Book Now",
      link: "#schedule",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Remote Support",
      description: "Global team, always available",
      value: "Worldwide",
      link: "#location",
      color: "from-orange-500 to-red-500"
    }
  ];

  // Social links
  const socialLinks = [
    {
      icon: <GithubIcon className="w-5 h-5" />,
      name: "GitHub",
      handle: "@octane-ai",
      url: "https://github.com/jagjeet-singh04",
      color: "hover:bg-gray-500/20"
    },
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      name: "LinkedIn",
      handle: "@octane-ai",
      url: "linkedin.com/in/jagjeet-singh-a71aa2251/",
      color: "hover:bg-blue-500/20"
    },
    {
      icon: <TwitterIcon className="w-5 h-5" />,
      name: "Twitter",
      handle: "@octane_ai",
      url: "https://twitter.com/octane_ai",
      color: "hover:bg-sky-500/20"
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond within 2-4 hours during business hours, and always within 24 hours."
    },
    {
      question: "Do you offer technical support?",
      answer: "Yes! We provide comprehensive technical support for all our products and services."
    },
    {
      question: "Can I schedule a demo?",
      answer: "Absolutely! We'd love to show you how Octane AI can transform your interview preparation."
    },
    {
      question: "Do you offer enterprise solutions?",
      answer: "Yes, we provide customized enterprise solutions for companies and educational institutions."
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
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
              <MessageCircleIcon className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">Get In Touch</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-400">Let's Start a</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-500">Conversation</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Have questions about Octane AI? Need technical support? We're here to help you succeed in your interview journey.
            </motion.p>
          </motion.div>

          {/* Contact Methods & Form Section */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Left: Contact Methods & Info */}
              <div className="space-y-8">
                {/* Contact Methods */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {contactMethods.map((method, index) => (
                      <motion.a
                        key={method.title}
                        href={method.link}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="block"
                      >
                        <CardSpotlight>
                          <div className="p-6 text-center group">
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} mb-3 group-hover:scale-110 transition`}>
                              {method.icon}
                            </div>
                            <h3 className="font-bold mb-1">{method.title}</h3>
                            <p className="text-sm text-gray-300 mb-2">{method.description}</p>
                            <div className="text-blue-300 font-semibold text-sm">{method.value}</div>
                          </div>
                        </CardSpotlight>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Support Hours */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <CardContainer>
                    <CardBody className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
                          <ClockIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold">Support Hours</div>
                          <div className="text-sm text-gray-300">We're here when you need us</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Monday - Friday</span>
                          <span className="text-white font-semibold">9:00 AM - 6:00 PM PST</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Saturday</span>
                          <span className="text-white font-semibold">10:00 AM - 2:00 PM PST</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Emergency Support</span>
                          <span className="text-green-300 font-semibold">24/7 Available</span>
                        </div>
                      </div>

                      <div className="mt-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                        <div className="flex items-center gap-2 text-sm">
                          <ZapIcon className="w-4 h-4 text-blue-300" />
                          <span className="text-blue-200">Average response time: 2-4 hours</span>
                        </div>
                      </div>
                    </CardBody>
                  </CardContainer>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="font-bold mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className={`flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 ${social.color} transition group`}
                      >
                        {social.icon}
                        <div className="text-sm">
                          <div className="font-semibold">{social.name}</div>
                          <div className="text-gray-400 text-xs">{social.handle}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <CardSpotlight>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                        <SendIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">Send us a Message</h2>
                        <p className="text-sm text-gray-300">We'll get back to you ASAP</p>
                      </div>
                    </div>

                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                          <CheckCircleIcon className="w-8 h-8 text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-gray-300 mb-4">
                          Thank you for reaching out. We'll get back to you within 24 hours.
                        </p>
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="text-blue-300 hover:text-blue-200 text-sm font-semibold"
                        >
                          Send another message
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-200 mb-2">
                              Your Name *
                            </label>
                            <div className="relative">
                              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                                placeholder="Enter your name"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-200 mb-2">
                              Email Address *
                            </label>
                            <div className="relative">
                              <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                                placeholder="your@email.com"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-200 mb-2">
                            Subject *
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                            placeholder="What's this about?"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-200 mb-2">
                            Message *
                          </label>
                          <div className="relative">
                            <MessageSquareIcon className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                              rows="6"
                              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition resize-none"
                              placeholder="Tell us how we can help you..."
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full py-4 rounded-2xl font-semibold transition transform hover:-translate-y-0.5 ${
                            isSubmitting
                              ? "bg-gray-600 cursor-not-allowed"
                              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-2xl"
                          }`}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending Message...
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <SendIcon className="w-4 h-4" />
                              Send Message
                              <ArrowRightIcon className="w-4 h-4" />
                            </div>
                          )}
                        </button>

                        <p className="text-center text-xs text-gray-400">
                          By submitting this form, you agree to our privacy policy and terms of service.
                        </p>
                      </form>
                    )}
                  </div>
                </CardSpotlight>
              </motion.div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Quick answers to common questions about Octane AI and our services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CardContainer>
                    <CardBody className="rounded-2xl border border-white/10 bg-white/5 p-6 h-full">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30 flex-shrink-0">
                          <MessageCircleIcon className="w-4 h-4 text-blue-300" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2">{faq.question}</h3>
                          <p className="text-sm text-gray-300">{faq.answer}</p>
                        </div>
                      </div>
                    </CardBody>
                  </CardContainer>
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
                  <span className="text-sm font-semibold text-yellow-200">Ready to Get Started?</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">Let's Transform Interview Preparation Together</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Whether you're a student, professional, or enterprise, we're here to help you succeed.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="mailto:jagjeetsingh0424@gmail.com"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-2xl font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
                  >
                    <MailIcon className="w-5 h-5" />
                    <span>Contact Us Now</span>
                  </a>
                  
                  <a 
                    href="https://www.mediafire.com/file/bn0vo1xmakrpl6v/Octane-AI-Interview-Kit.zip/file"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/6 border border-white/10 font-semibold hover:bg-white/8 transition"
                  >
                    <DownloadIcon className="w-5 h-5" />
                    <span>Download Free Resources</span>
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