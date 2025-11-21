import React from 'react'
import AnimatedSection from './AnimatedSection'

const TechStack = () => {
  const technologies = [
    "Python", "JavaScript", "TypeScript", "React", 
    "Node.js", "PostgreSQL", "Docker", "Git", "AWS"
  ]

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-16 text-white">
            <span className="border-b-2 border-accent pb-2">Tech Stack</span>
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-gray-700 group-hover:border-accent transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1">
                  <span className="font-mono font-semibold text-white group-hover:text-accent transition-colors duration-300">
                    {tech}
                  </span>
                </div>
                <div className="absolute inset-0 bg-accent/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default TechStack