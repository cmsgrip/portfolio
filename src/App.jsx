import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-primary font-sans">
      <Hero />
      <Services />
      <Projects />
      <TechStack />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App