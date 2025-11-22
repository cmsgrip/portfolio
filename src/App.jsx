import React, { useEffect } from 'react' // Import useEffect
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id="hero" className="min-h-screen bg-primary font-sans">
      <Navbar />
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