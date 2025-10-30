import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout'
import { Hero } from './components/sections/Hero.jsx'
import { Products } from './components/sections/Products.jsx'
import { Features } from './components/sections/Features.jsx'
import { Footer } from './components/sections/Footer.jsx'
import InterviewHelper from './pages/InterviewHelper.jsx'
import HowToUse from './pages/HowToUse.jsx'
import ThinkCode from './pages/ThinkCode.jsx'
import AIResumeBuilder from './pages/AIResumeBuilder.jsx'
import IndividualPricing from './pages/IndividualPricing.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Careers from './pages/Careers.jsx'
import Terms from './pages/Terms.jsx'
import Privacy from './pages/Privacy.jsx'
import Cookies from './pages/Cookies.jsx'

function App() {

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products />
              <Features />
            </>
          }
        />
        <Route path="/ai-interview" element={<InterviewHelper />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/thinkcode" element={<ThinkCode />} />
        <Route path="/ai-resume" element={<AIResumeBuilder />} />
        <Route path="/pricing" element={<IndividualPricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
