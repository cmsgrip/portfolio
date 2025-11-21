import React from 'react'
import { Quote } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The speed and precision are unmatched. What would have taken our team a week to debug was fixed in a single day. Absolutely essential for any critical project.",
      author: "Sarah Chen",
      title: "CTO at StartupX"
    },
    {
      quote: "Incredibly professional and efficient. The automation script delivered has saved us countless hours of manual work. A true expert and a pleasure to work with.",
      author: "David Lee",
      title: "Lead Engineer at DataCorp"
    }
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-16 text-white">
            <span className="border-b-2 border-accent pb-2">Testimonials</span>
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.author} delay={index * 150}>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-accent transition-all duration-300 group">
                <Quote className="w-8 h-8 text-accent mb-4 opacity-70" />
                <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-mono font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-accent text-sm">
                    {testimonial.title}
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

export default Testimonials