import React from 'react'
import { Bug, Code, Zap, TestTube } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const Services = () => {
  const services = [
    {
      icon: Bug,
      title: "Surgical Bug Fixing",
      description: "Quickly diagnose, resolve, and test complex bugs to get your application back on track."
    },
    {
      icon: Code,
      title: "Rapid Feature Development",
      description: "Build and integrate high-quality features, from API endpoints to UI components, with maximum efficiency."
    },
    {
      icon: Zap,
      title: "Automation & Scripting",
      description: "Automate manual tasks and data processing with robust Python and Bash scripts to save you time and money."
    },
    {
      icon: TestTube,
      title: "Test-Driven Quality",
      description: "Ensure your code is reliable and maintainable with comprehensive unit and integration tests."
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-16 text-white">
            <span className="border-b-2 border-accent pb-2">Core Services</span>
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-accent transition-all duration-300 group hover:transform hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-mono font-semibold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services