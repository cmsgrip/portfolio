import React from 'react'
import { Quote } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "CMSGrip doubled our organic traffic in just three months. Their SEO strategy is second to none.",
      author: "John Doe",
      title: "CEO at ClientX"
    },
    {
      quote: "The new website CMSGrip built for us has been a game-changer. Our conversion rate has increased by 50%.",
      author: "Jane Smith",
      title: "Marketing Director at BrandY"
    }
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-16 text-white">
            <span className="border-b-2 border-accent pb-2">What Our Clients Say</span>
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