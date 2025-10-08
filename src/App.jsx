import React from 'react'
import { Navbar } from './components/layout'
import { Hero } from './components/sections/Hero.jsx'
import { Products } from './components/sections/Products.jsx'
import { Features } from './components/sections/Features.jsx'
import { Footer } from './components/sections/Footer.jsx'

function App() {

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Footer />
    </div>
  )
}

export default App
