import React, { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "Your Vision, Amplified."

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, fullText])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary to-gray-900">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              {displayText}
            </span>
            <span className="ml-2 border-r-2 border-accent animate-blink">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We specialize in growing your brand online through targeted marketing strategies.
          </p>
        </div>
        
        <button
          onClick={() => scrollToSection('projects')}
          className="bg-accent hover:bg-blue-400 text-primary font-mono font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/20"
        >
          See Our Work
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('services')}
          className="text-gray-400 hover:text-accent transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}

export default Hero