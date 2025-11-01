import React, { useState } from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { CardSpotlight } from "../components/ui/card-spotlight.jsx";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card.jsx";
import { motion } from "framer-motion";
import {
  CheckIcon,
  StarIcon,
  ZapIcon,
  CrownIcon,
  UsersIcon,
  ShieldIcon,
  ClockIcon,
  MessageSquareIcon,
  DownloadIcon,
  CreditCardIcon,
  ArrowRightIcon,
  HelpCircleIcon,
  SparklesIcon,
  TargetIcon,
  BrainIcon,
  LockIcon,
  GlobeIcon,
  MailIcon
} from "lucide-react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  // Animation presets
  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
  const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

  // Pricing plans
  const pricingPlans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      price: "Free",
      period: "for first 50 users",
      popular: false,
      featured: true,
      cta: "Get Started Free",
  href: "https://www.mediafire.com/file/kmqnqwixacug6le/Octane-AI-Interview-Kit.zip/file",
      features: [
        "Full access to Interview Helper",
        "Screen capture & AI explanations",
        "Audio listen mode",
        "Basic hotkey support",
        "Community support",
        "Limited to first 50 users only",
        "Windows compatibility",
        "Regular updates"
      ],
      icon: <StarIcon className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      badge: "Limited Offer"
    },
    {
      name: "Pro",
      description: "Unlock full potential",
      price: "₹199",
      period: isAnnual ? "/year (₹16.6/month)" : "/month",
      originalPrice: isAnnual ? "₹2,388" : null,
      popular: true,
      featured: true,
      cta: "Upgrade to Pro",
      href: "#pro",
      features: [
        "Everything in Free, plus:",
        "Priority AI processing",
        "Advanced hotkey customization",
        "Premium support (24-48h response)",
        "Early access to new features",
        "Custom model training",
        "Multi-language support",
        "Advanced stealth modes",
        "Cloud sync & backup",
        "Team collaboration features"
      ],
      icon: <CrownIcon className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      badge: "Most Popular"
    }
  ];

  // Features comparison
  const featureComparison = [
    {
      feature: "AI-Powered Screen Capture",
      free: true,
      pro: true
    },
    {
      feature: "Audio Listen Mode",
      free: true,
      pro: true
    },
    {
      feature: "Basic Hotkeys",
      free: true,
      pro: true
    },
    {
      feature: "Community Support",
      free: true,
      pro: true
    },
    {
      feature: "Priority AI Processing",
      free: false,
      pro: true
    },
    {
      feature: "Advanced Hotkey Customization",
      free: false,
      pro: true
    },
    {
      feature: "Premium Support",
      free: false,
      pro: true
    },
    {
      feature: "Early Feature Access",
      free: false,
      pro: true
    },
    {
      feature: "Custom Model Training",
      free: false,
      pro: true
    },
    {
      feature: "Multi-language Support",
      free: false,
      pro: true
    },
    {
      feature: "Cloud Sync & Backup",
      free: false,
      pro: true
    },
    {
      feature: "Team Collaboration",
      free: false,
      pro: true
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "Is it really free for the first 50 users?",
      answer: "Yes! The first 50 users to sign up get lifetime free access to all current features. This is our way of giving back to the community."
    },
    {
      question: "What happens after the first 50 users?",
      answer: "After the first 50 users, new users will need to subscribe to the Pro plan at ₹199/month to access the Interview Helper."
    },
    {
      question: "Can I upgrade from Free to Pro later?",
      answer: "Absolutely! Free users can upgrade to Pro at any time to unlock additional features and priority support."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, credit/debit cards, net banking, and all major payment methods available in India."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a 14-day money-back guarantee for all Pro subscriptions. If you're not satisfied, we'll refund your payment."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes! Students can get 50% off on Pro subscriptions. Contact us with your student ID for a discount code."
    }
  ];

  // Statistics
  const stats = [
    { number: "50", label: "Free Spots Available" },
    { number: "1,000+", label: "Engineers Helped" },
    { number: "3x", label: "Success Rate Improvement" },
    { number: "24/7", label: "Support" }
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
              <SparklesIcon className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">Limited Time Offer</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-400">Simple, Transparent</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-500">Pricing</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Start free forever. The first 50 users get lifetime access. After that, enjoy premium features at an affordable price.
            </motion.p>

            {/* Billing Toggle - Only for demonstration since we have monthly pricing */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 p-2 rounded-2xl bg-white/5 border border-white/10 mb-8">
              <span className={`px-4 py-2 rounded-xl transition ${!isAnnual ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'text-gray-300'}`}>
                Monthly
              </span>
              <span className={`px-4 py-2 rounded-xl transition ${isAnnual ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'text-gray-300'}`}>
                Annual (Save 30%)
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-2xl font-bold text-blue-300">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Pricing Cards */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {plan.badge}
                      </div>
                    </div>
                  )}
                  
                  {plan.featured && !plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  <CardContainer className="h-full">
                    <CardBody className={`h-full relative rounded-2xl border ${
                      plan.popular ? 'border-purple-500/50' : 'border-white/10'
                    } bg-white/5 p-8`}>
                      <div className="text-center mb-6">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} mb-4`}>
                          {plan.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-gray-300">{plan.description}</p>
                      </div>

                      <div className="text-center mb-6">
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          {plan.originalPrice && (
                            <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                          )}
                        </div>
                        <p className="text-gray-300">{plan.period}</p>
                      </div>

                      <a 
                        href={plan.href}
                        className={`w-full block py-4 rounded-2xl font-semibold text-center transition transform hover:-translate-y-0.5 mb-6 ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-2xl' 
                            : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-2xl'
                        }`}
                      >
                        {plan.cta}
                      </a>

                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <CheckIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-200">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Feature Comparison */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Compare Plans</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how our plans stack up against each other
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <CardSpotlight>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="font-semibold">Feature</div>
                    <div className="text-center font-semibold text-blue-300">Free</div>
                    <div className="text-center font-semibold text-purple-300">Pro</div>
                  </div>

                  <div className="space-y-4">
                    {featureComparison.map((item, index) => (
                      <motion.div
                        key={item.feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-2xl hover:bg-white/5 transition"
                      >
                        <div className="font-medium text-sm">{item.feature}</div>
                        <div className="text-center">
                          {item.free ? (
                            <CheckIcon className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <div className="w-5 h-5 mx-auto border-2 border-gray-600 rounded"></div>
                          )}
                        </div>
                        <div className="text-center">
                          {item.pro ? (
                            <CheckIcon className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <div className="w-5 h-5 mx-auto border-2 border-gray-600 rounded"></div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardSpotlight>
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
              <h2 className="text-3xl font-bold mb-4">Loved by Engineers</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See what our users say about Octane AI Interview Helper
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Priya S.",
                  role: "Software Engineer",
                  content: "The free tier helped me land my dream job at Google. The screen capture feature is magical!",
                  rating: 5
                },
                {
                  name: "Rahul M.",
                  role: "Full Stack Developer",
                  content: "Worth every rupee for the Pro version. The priority AI processing saves me hours of preparation.",
                  rating: 5
                },
                {
                  name: "Ananya K.",
                  role: "Student",
                  content: "Got in as one of the first 50 users. Lifetime free access is the best deal ever!",
                  rating: 5
                }
              ].map((testimonial, index) => (
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
                      <p className="text-gray-200 mb-4 text-sm">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardSpotlight>
                </motion.div>
              ))}
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
                Get answers to common questions about our pricing and plans
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
                          <HelpCircleIcon className="w-4 h-4 text-blue-300" />
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
                  <ZapIcon className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-semibold text-yellow-200">Limited Free Spots Available</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">Ready to Ace Your Interviews?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Join the first 50 users and get lifetime free access, or upgrade to Pro for premium features.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="https://www.mediafire.com/file/kmqnqwixacug6le/Octane-AI-Interview-Kit.zip/file"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-2xl font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
                  >
                    <DownloadIcon className="w-5 h-5" />
                    <span>Get Free Access</span>
                  </a>
                  
                  <a 
                    href="mailto:jagjeetsingh0424@gmail.com?subject=Pro Plan Inquiry"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/6 border border-white/10 font-semibold hover:bg-white/8 transition"
                  >
                    <MailIcon className="w-5 h-5" />
                    <span>Contact Sales</span>
                  </a>
                </div>

                <div className="mt-6 text-sm text-gray-400">
                  <p>Free spots filling fast! • 14-day money-back guarantee • Student discounts available</p>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}