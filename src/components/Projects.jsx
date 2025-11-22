import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import CaseStudyModal from './CaseStudyModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "E-commerce Growth for ClientX",
      description: "We optimized ClientX's e-commerce platform, leading to a 60% decrease in cart abandonment and a significant boost in sales.",
      tech: ["SEO", "Conversion Rate Optimization", "Web Development"],
      caseStudy: {
        challenge: "ClientX, a growing e-commerce brand, was struggling with a high cart abandonment rate and slow page load times, which negatively impacted their sales and customer satisfaction.",
        solution: "Our team conducted a comprehensive audit of their website and checkout process. We implemented a series of technical SEO improvements, optimized images and scripts to improve page speed, and redesigned the checkout flow for a more intuitive user experience.",
        highlights: [
          "Improved page load speed by 70%.",
          "Simplified the checkout process from 5 steps to 2.",
          "Implemented a targeted email campaign to recover abandoned carts.",
        ],
        results: "The project resulted in a 60% reduction in cart abandonment, a 40% increase in conversion rates, and a 25% increase in average order value. The client saw a significant return on investment within the first quarter."
      }
    },
    {
      title: "Lead Generation for B2B SaaS",
      description: "Our targeted PPC and content strategy campaign for a B2B SaaS client generated a 200% increase in qualified leads in three months.",
      tech: ["PPC", "Content Marketing", "HubSpot"],
      caseStudy: {
        challenge: "A promising B2B SaaS company had a great product but was struggling to generate qualified leads. Their inbound marketing efforts were not yielding the desired results, and their sales team was spending too much time on cold outreach.",
        solution: "We developed a multi-channel lead generation strategy that combined targeted Google Ads campaigns with a high-value content marketing plan. We created a series of e-books and webinars, promoted them through paid channels, and used HubSpot to nurture leads through the sales funnel.",
        highlights: [
          "Launched and managed Google Ads campaigns with a 15% click-through rate.",
          "Produced and promoted three e-books and two webinars.",
          "Built a lead nurturing workflow in HubSpot to automate follow-ups.",
        ],
        results: "The campaign generated a 200% increase in marketing qualified leads (MQLs) within three months, and the cost per acquisition was reduced by 30%. The client's sales team was able to focus on closing deals instead of prospecting."
      }
    },
    {
      title: "Social Media Engagement for BrandY",
      description: "We grew BrandY's social media following by 50% and increased engagement by 80% through a creative and consistent content strategy.",
      tech: ["Social Media", "Content Creation", "Community Management"],
      caseStudy: {
        challenge: "BrandY had an inconsistent social media presence and was struggling to engage with their target audience. Their content was not resonating with their followers, and their follower growth had stagnated.",
        solution: "We developed a new social media strategy focused on creating high-quality, engaging content tailored to each platform. We established a consistent posting schedule, ran interactive contests and polls, and actively engaged with their community to build a loyal following.",
        highlights: [
          "Created a detailed content calendar with a mix of educational, entertaining, and promotional content.",
          "Ran a successful user-generated content campaign that went viral.",
          "Provided daily community management to respond to comments and messages.",
        ],
        results: "In six months, we grew BrandY's social media following by 50% across all platforms and increased their average engagement rate by 80%. This led to a significant increase in brand awareness and website traffic from social channels."
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
            <span className="border-b-2 border-accent pb-2">Our Work</span>
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