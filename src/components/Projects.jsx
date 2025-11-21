import React from 'react'
import { ExternalLink } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Performance Overhaul",
      description: "Identified and resolved a critical performance bottleneck in a high-traffic e-commerce checkout API, reducing response time by 80% and eliminating cart abandonment errors.",
      tech: ["Python", "Django", "PostgreSQL", "Redis"]
    },
    {
      title: "CI/CD Automation Pipeline",
      description: "Developed a fully automated CI/CD pipeline script that reduced developer deployment time from 30 minutes to under 2 minutes, increasing team productivity and reducing deployment errors.",
      tech: ["Git", "Docker", "Bash", "Jenkins"]
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Built a responsive, real-time analytics dashboard from scratch, allowing stakeholders to monitor live user activity and key business metrics.",
      tech: ["React", "Node.js", "WebSockets", "Tailwind CSS"]
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-16 text-white">
            <span className="border-b-2 border-accent pb-2">Featured Projects</span>
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 150}>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-accent transition-all duration-300 group hover:transform hover:-translate-y-2 h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-mono font-semibold mb-4 text-white group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 text-accent font-mono text-sm rounded-full border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="flex items-center justify-center gap-2 w-full py-3 bg-accent hover:bg-blue-400 text-primary font-mono font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  View Case Study
                  <ExternalLink size={16} />
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects