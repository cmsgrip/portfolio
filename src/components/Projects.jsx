import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import CaseStudyModal from './CaseStudyModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "E-commerce Performance Overhaul",
      description: "Identified and resolved a critical performance bottleneck in a high-traffic e-commerce checkout API, reducing response time by 80% and eliminating cart abandonment errors.",
      tech: ["Python", "Django", "PostgreSQL", "Redis"],
      caseStudy: {
        challenge: "A high-traffic e-commerce platform was experiencing significant performance issues in its checkout API, leading to slow response times, frequent timeouts, and a high cart abandonment rate. The existing code was complex and difficult to debug, making it challenging to pinpoint the root cause of the problem.",
        solution: "I conducted a thorough performance analysis of the API, using a combination of profiling tools and code inspection to identify the bottlenecks. The primary issue was an inefficient database query that was being executed multiple times for each request. I optimized the query, introduced caching with Redis, and refactored the code to reduce its complexity.",
        highlights: [
          "Reduced database queries by 95% through query optimization and caching.",
          "Implemented a Redis caching layer to store frequently accessed data.",
          "Refactored the codebase to improve readability and maintainability.",
        ],
        results: "The performance overhaul resulted in an 80% reduction in API response time, from an average of 2.5 seconds to under 500 milliseconds. This led to a 60% decrease in cart abandonment and a significant improvement in the overall user experience."
      }
    },
    {
      title: "CI/CD Automation Pipeline",
      description: "Developed a fully automated CI/CD pipeline script that reduced developer deployment time from 30 minutes to under 2 minutes, increasing team productivity and reducing deployment errors.",
      tech: ["Git", "Docker", "Bash", "Jenkins"],
      caseStudy: {
        challenge: "The development team was spending a significant amount of time on manual deployments, which were prone to human error and inconsistent. The existing process involved multiple manual steps, making it slow and inefficient.",
        solution: "I designed and implemented a fully automated CI/CD pipeline using Jenkins, Docker, and Bash scripting. The pipeline automatically builds, tests, and deploys the application whenever new code is pushed to the repository. I also integrated automated notifications to keep the team informed of the deployment status.",
        highlights: [
          "Automated the entire build, test, and deployment process.",
          "Used Docker to create consistent and reproducible build environments.",
          "Integrated with Slack for real-time deployment notifications.",
        ],
        results: "The new CI/CD pipeline reduced deployment time from 30 minutes to under 2 minutes, a 93% reduction. This increased developer productivity, reduced deployment errors, and allowed the team to ship features faster."
      }
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Built a responsive, real-time analytics dashboard from scratch, allowing stakeholders to monitor live user activity and key business metrics.",
      tech: ["React", "Node.js", "WebSockets", "Tailwind CSS"],
      caseStudy: {
        challenge: "Stakeholders needed a way to monitor live user activity and key business metrics in real-time, but the existing analytics tools were slow and did not provide the required level of detail. The company needed a custom solution that could handle a high volume of real-time data.",
        solution: "I built a real-time analytics dashboard from the ground up using React, Node.js, and WebSockets. The backend uses a Node.js server to process a high volume of real-time data and pushes updates to the frontend using WebSockets. The frontend is a responsive React application that displays the data in a series of interactive charts and graphs.",
        highlights: [
          "Used WebSockets for real-time data streaming.",
          "Built a highly responsive and interactive user interface with React.",
          "Designed a scalable backend that can handle a high volume of concurrent users.",
        ],
        results: "The real-time analytics dashboard provides stakeholders with instant access to live user activity and key business metrics, enabling them to make data-driven decisions. The dashboard has become an essential tool for the marketing and product teams."
      }
    }
  ]

  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

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
                
                <button 
                  onClick={() => openModal(project)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-accent hover:bg-blue-400 text-primary font-mono font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Case Study
                  <ExternalLink size={16} />
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <CaseStudyModal project={selectedProject} onClose={closeModal} />
    </section>
  )
}

export default Projects