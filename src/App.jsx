import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout'
import { Hero } from './components/sections/Hero.jsx'
import { Products } from './components/sections/Products.jsx'
import { Features } from './components/sections/Features.jsx'
import { Footer } from './components/sections/Footer.jsx'
import InterviewHelper from './pages/InterviewHelper.jsx'

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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
