import React from 'react'
import { motion } from 'framer-motion'
import { Github, Award, Code, Shield } from 'lucide-react'

const ProjectsSection = () => {
  // Clean, professional projects based on CV
  const projects = [
    {
      id: 1,
      title: "CargoTrace – Trade Finance Platform",
      description: "Built a DeFi platform that mirrored real-world trade documents (CargoX) into blockchain NFTs to trigger financing. Designed React frontend with blockchain integration, enabling traders to submit docs, track funding, and manage repayments.",
      techStack: ["ICP", "React", "Rust", "Blockchain"],
      category: "Blockchain",
      githubUrl: "https://github.com/Mohamedali1111/cargotrace-finance",
      featured: true,
      hackathon: true,
      icon: Award,
      color: "purple"
    },
    {
      id: 2,
      title: "Cybersecurity Awareness Training Platform",
      description: "Developed a cybersecurity training platform simulating phishing and malware scenarios to test user responses. Implemented authentication, role-based dashboards, performance tracking, and simulation scoring logic.",
      techStack: ["Node.js", "MongoDB", "JavaScript", "EJS", "Bootstrap"],
      category: "Web Application",
      githubUrl: "https://github.com/Mohamedali1111/cybersecurity-training",
      featured: true,
      graduation: true,
      icon: Shield,
      color: "blue"
    },
    {
      id: 3,
      title: "Volunteens – Nonprofit Volunteer Platform",
      description: "Built full-stack web and mobile portals for event coordination and real-time volunteer engagement. Integrated role-based access, live notifications, and cloud-synced scheduling features.",
      techStack: ["Spring Boot", "Flutter", "Firebase"],
      category: "Full Stack",
      githubUrl: "https://github.com/Mohamedali1111/volunteens",
      featured: true,
      icon: Code,
      color: "green"
    },
    {
      id: 4,
      title: "Aussie Food – Restaurant Web App",
      description: "Created an end-to-end food ordering and table reservation system with responsive UI and secure payment API integration.",
      techStack: ["Node.js", "Express.js", "MongoDB"],
      category: "Web Application",
      githubUrl: "https://github.com/Mohamedali1111/aussie-food",
      featured: false,
      icon: Code,
      color: "orange"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/10',
        icon: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-800',
        badge: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/10',
        icon: 'text-green-600 dark:text-green-400',
        border: 'border-green-200 dark:border-green-800',
        badge: 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/10',
        icon: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-800',
        badge: 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
      },
      orange: {
        bg: 'bg-orange-50 dark:bg-orange-900/10',
        icon: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-200 dark:border-orange-800',
        badge: 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300'
      }
    }
    return colors[color] || colors.blue
  }

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my most impactful work across blockchain, cybersecurity, and full-stack development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon
            const colorClasses = getColorClasses(project.color)
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${colorClasses.bg} ${colorClasses.border} rounded-2xl p-8 border-2 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Icon & Badges */}
                  <div className="flex-shrink-0">
                    <div className={`p-4 ${colorClasses.bg} rounded-xl w-16 h-16 flex items-center justify-center mb-4`}>
                      <Icon className={`w-8 h-8 ${colorClasses.icon}`} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.featured && (
                        <span className={`px-3 py-1 ${colorClasses.badge} rounded-full text-xs font-medium`}>
                          Featured
                        </span>
                      )}
                      {project.hackathon && (
                        <span className={`px-3 py-1 ${colorClasses.badge} rounded-full text-xs font-medium`}>
                          Hackathon
                        </span>
                      )}
                      {project.graduation && (
                        <span className={`px-3 py-1 ${colorClasses.badge} rounded-full text-xs font-medium`}>
                          Graduation Project
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      {project.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Project Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {projects.length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {projects.filter(p => p.featured).length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Featured
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {projects.filter(p => p.hackathon).length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Hackathons
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {projects.filter(p => p.graduation).length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Academic
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
