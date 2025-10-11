import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Award, Code, Shield } from 'lucide-react'

const ProjectsSection = () => {
  // Clean, professional projects based on CV
  const projects = [
    {
      id: 1,
      title: "CargoTrace – Trade Finance Platform",
      description: "Built a DeFi platform that mirrored real-world trade documents (CargoX) into blockchain NFTs to trigger financing. Designed React frontend with blockchain integration, enabling traders to submit docs, track funding, and manage repayments.",
      techStack: ["ICP", "React", "Rust", "Blockchain"],
      githubUrl: "https://github.com/Mohamedali1111/cargotrace-finance",
      liveUrl: null,
      badges: ["Hackathon Project", "Blockchain", "Featured"],
      year: "2025"
    },
    {
      id: 2,
      title: "Cybersecurity Awareness Training Platform",
      description: "Developed a cybersecurity training platform simulating phishing and malware scenarios to test user responses. Implemented authentication, role-based dashboards, performance tracking, and simulation scoring logic.",
      techStack: ["Node.js", "MongoDB", "JavaScript", "EJS", "Bootstrap"],
      githubUrl: "https://github.com/Mohamedali1111/cybersecurity-training",
      liveUrl: null,
      badges: ["Graduation Project", "Web Application"],
      year: "2024"
    },
    {
      id: 3,
      title: "Volunteens – Nonprofit Volunteer Platform",
      description: "Built full-stack web and mobile portals for event coordination and real-time volunteer engagement. Integrated role-based access, live notifications, and cloud-synced scheduling features.",
      techStack: ["Spring Boot", "Flutter", "Firebase"],
      githubUrl: "https://github.com/Mohamedali1111/volunteens",
      liveUrl: null,
      badges: ["Full Stack", "Mobile App"],
      year: "2024"
    },
    {
      id: 4,
      title: "Aussie Food – Restaurant Web App",
      description: "Created an end-to-end food ordering and table reservation system with responsive UI and secure payment API integration. Includes admin dashboard for managing menu and reservations.",
      techStack: ["Node.js", "Express.js", "MongoDB", "React", "Bootstrap"],
      githubUrl: "https://github.com/Mohamedali1111/aussie-food",
      liveUrl: null,
      badges: ["Web Application"],
      year: "2023"
    }
  ]

  const projectStats = {
    total: projects.length,
    hackathon: projects.filter(p => p.badges.includes("Hackathon Project")).length,
    graduation: projects.filter(p => p.badges.includes("Graduation Project")).length,
    featured: projects.filter(p => p.badges.includes("Featured")).length,
  }

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Featured": return "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700";
      case "Hackathon Project": return "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700";
      case "Graduation Project": return "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700";
      case "Blockchain": return "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700";
      case "Web Application": return "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700";
      case "Full Stack": return "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700";
      case "Mobile App": return "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700";
      default: return "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700";
    }
  }

  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Portfolio Projects
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            A curated collection of my most impactful projects, showcasing my expertise in full-stack development,
            mobile applications, and innovative solutions.
          </p>
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 text-center">
            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
              {projectStats.total}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-500 font-medium tracking-wide uppercase">Total Projects</div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 text-center">
            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
              {projectStats.featured}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-500 font-medium tracking-wide uppercase">Featured</div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 text-center">
            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
              {projectStats.hackathon}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-500 font-medium tracking-wide uppercase">Hackathon</div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 text-center">
            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
              {projectStats.graduation}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-500 font-medium tracking-wide uppercase">Graduation</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-10 flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">{project.title}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-500 font-medium tracking-wide">{project.year}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="px-4 py-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm font-medium tracking-wide border border-slate-200 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.badges.map((badge, badgeIndex) => (
                    <span key={badgeIndex} className={`px-4 py-2 text-sm font-medium tracking-wide border ${getBadgeColor(badge)}`}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-8 flex justify-end gap-6 border-t border-slate-200 dark:border-slate-700">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-medium tracking-wide"
                  >
                    <Github className="w-5 h-5" /> GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-medium tracking-wide"
                  >
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection