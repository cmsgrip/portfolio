import React from 'react'
import { Search, DollarSign, Code, Users } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "SEO & Content Strategy",
      description: "Boost your visibility and rank higher on search engines with our expert SEO and content strategies."
    },
    {
      icon: DollarSign,
      title: "Paid Advertising (PPC)",
      description: "Drive targeted traffic and generate leads with high-ROI paid advertising campaigns on Google and social media."
    },
    {
      icon: Code,
      title: "Web Development & Design",
      description: "We build beautiful, high-performance websites that convert visitors into customers."
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Engage your audience and build a loyal community with our comprehensive social media management."
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-16 text-white">
            <span className="border-b-2 border-accent pb-2">Our Services</span>
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