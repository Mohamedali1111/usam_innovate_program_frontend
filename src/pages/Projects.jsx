import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Filter, Search, X, Code, Database, Globe, Smartphone, Shield, Building, Award } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTech, setSelectedTech] = useState('all')

  // Real projects data from Mohamed Ali's profile
  const projects = [
    {
      id: 1,
      title: "Cybersecurity Awareness Training Platform",
      description: "Simulates phishing, malware, and social engineering attacks. Users receive scores based on behavior with admin panel, user dashboards, and personalized feedback. Implements layered architecture and progress tracking.",
      techStack: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
      category: "Web Application",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/Mohamedali1111/cybersecurity-training",
      liveUrl: null,
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "Volunteens – Nonprofit Volunteer Management Platform",
      description: "Web and mobile platform for managing events and volunteers. Features role-based access control, live notifications, and cloud-synced scheduling. Used by real organizations to coordinate community events.",
      techStack: ["Spring Boot", "Flutter", "Firebase", "Java", "Dart"],
      category: "Full Stack",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/Mohamedali1111/volunteens",
      liveUrl: null,
      featured: true,
      year: "2024"
    },
    {
      id: 3,
      title: "Aussie Food – Restaurant Web App",
      description: "Users can order food and reserve tables with responsive UI and secure payment integration. Includes admin dashboard for managing menu and reservations.",
      techStack: ["Node.js", "Express.js", "MongoDB", "React", "Bootstrap"],
      category: "Web Application",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/Mohamedali1111/aussie-food",
      liveUrl: null,
      featured: false,
      year: "2023"
    },
    {
      id: 4,
      title: "Linkopharm – Inventory & Sales Dashboard",
      description: "Pharmacy system for managing stock and sales with admin login, role-based views, and stock reports. Features real-time tracking with printable invoices.",
      techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML/CSS"],
      category: "Web Application",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/Mohamedali1111/linkopharm",
      liveUrl: null,
      featured: false,
      year: "2023"
    },
    {
      id: 5,
      title: "Seductive Pharaohs Agency Landing Page",
      description: "Premium landing page design for modeling agency built under tight client deadline. Features responsive layout, branded UI, and image showcases. Delivered pixel-perfect layout.",
      techStack: ["Framer", "No-Code Tools", "Responsive Design"],
      category: "Design",
      image: "/api/placeholder/400/250",
      githubUrl: null,
      liveUrl: null,
      featured: false,
      year: "2024",
      freelance: true
    },
    {
      id: 6,
      title: "CargoTrace Finance – ICP Hackathon Project",
      description: "Decentralized trade finance system using mirrored NFTs and blockchain. Syncs Ethereum-based document flows with ICP smart contracts and enables document-triggered lending via Chain Fusion. Finalist in ICP Hackathon 2025 (2nd place in Phase 1).",
      techStack: ["React", "Rust", "ICP Smart Contracts", "Vite", "Blockchain"],
      category: "Blockchain",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/Mohamedali1111/cargotrace-finance",
      liveUrl: null,
      featured: true,
      year: "2025",
      hackathon: true
    },
    {
      id: 7,
      title: "Quicksite – Startup Builder Platform",
      description: "Marketplace for selling website templates in all stacks (React, Bootstrap, Node.js, etc.). Includes builder tools, freelancer integration, and client request flow. Built in EGP with full support for Arabic users.",
      techStack: ["React", "Tailwind CSS", "Next.js", "Node.js", "MongoDB"],
      category: "Full Stack",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/Mohamedali1111/quicksite",
      liveUrl: null,
      featured: false,
      year: "2024",
      ongoing: true
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', icon: Code, count: projects.length },
    { id: 'Web Application', name: 'Web Apps', icon: Globe, count: projects.filter(p => p.category === 'Web Application').length },
    { id: 'Full Stack', name: 'Full Stack', icon: Database, count: projects.filter(p => p.category === 'Full Stack').length },
    { id: 'Design', name: 'Design', icon: Building, count: projects.filter(p => p.category === 'Design').length },
    { id: 'Blockchain', name: 'Blockchain', icon: Shield, count: projects.filter(p => p.category === 'Blockchain').length }
  ]

  const technologies = [
    { id: 'all', name: 'All Tech', count: projects.length },
    { id: 'React', name: 'React', count: projects.filter(p => p.techStack.includes('React')).length },
    { id: 'Node.js', name: 'Node.js', count: projects.filter(p => p.techStack.includes('Node.js')).length },
    { id: 'MongoDB', name: 'MongoDB', count: projects.filter(p => p.techStack.includes('MongoDB')).length },
    { id: 'Java', name: 'Java', count: projects.filter(p => p.techStack.includes('Java') || p.techStack.includes('Spring Boot')).length },
    { id: 'Flutter', name: 'Flutter', count: projects.filter(p => p.techStack.includes('Flutter')).length },
    { id: 'PHP', name: 'PHP', count: projects.filter(p => p.techStack.includes('PHP')).length },
    { id: 'Blockchain', name: 'Blockchain', count: projects.filter(p => p.techStack.includes('Blockchain') || p.techStack.includes('Rust')).length }
  ]

  const filteredProjects = useMemo(() => {
    let filtered = projects

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory)
    }

    // Filter by technology
    if (selectedTech !== 'all') {
      filtered = filtered.filter(project => 
        project.techStack.some(tech => 
          tech.toLowerCase().includes(selectedTech.toLowerCase()) ||
          (selectedTech === 'Java' && tech === 'Spring Boot') ||
          (selectedTech === 'Blockchain' && (tech === 'Blockchain' || tech === 'Rust'))
        )
      )
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    return filtered
  }, [projects, selectedCategory, selectedTech, searchTerm])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSelectedTech('all')
  }

  const getProjectStats = () => {
    const stats = {
      total: projects.length,
      featured: projects.filter(p => p.featured).length,
      hackathon: projects.filter(p => p.hackathon).length,
      freelance: projects.filter(p => p.freelance).length,
      ongoing: projects.filter(p => p.ongoing).length
    }
    return stats
  }

  const projectStats = getProjectStats()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-800">
      <div className="container-custom section-padding">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my work across web applications, mobile apps, blockchain solutions, 
            and design projects. Each project demonstrates different technical skills and problem-solving approaches.
          </p>
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white dark:bg-dark-700 rounded-lg p-4 text-center border border-gray-200 dark:border-dark-600">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
              {projectStats.total}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
          </div>
          <div className="bg-white dark:bg-dark-700 rounded-lg p-4 text-center border border-gray-200 dark:border-dark-600">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
              {projectStats.featured}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Featured</div>
          </div>
          <div className="bg-white dark:bg-dark-700 rounded-lg p-4 text-center border border-gray-200 dark:border-dark-600">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
              {projectStats.hackathon}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Hackathon</div>
          </div>
          <div className="bg-white dark:bg-dark-700 rounded-lg p-4 text-center border border-gray-200 dark:border-dark-600">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
              {projectStats.freelance}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Freelance</div>
          </div>
          <div className="bg-white dark:bg-dark-700 rounded-lg p-4 text-center border border-gray-200 dark:border-dark-600">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
              {projectStats.ongoing}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Ongoing</div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="card mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-500'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="bg-white/20 dark:bg-dark-800/20 px-2 py-0.5 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Technology Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {technologies.map(tech => (
                  <option key={tech.id} value={tech.id}>
                    {tech.name} ({tech.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {(searchTerm || selectedCategory !== 'all' || selectedTech !== 'all') && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-dark-600">
              <span className="text-sm text-gray-600 dark:text-gray-400">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm rounded-full">
                  Search: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm('')}
                    className="ml-1 hover:text-primary-800 dark:hover:text-primary-200"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm rounded-full">
                  Category: {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="ml-1 hover:text-primary-800 dark:hover:text-primary-200"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedTech !== 'all' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm rounded-full">
                  Tech: {selectedTech}
                  <button
                    onClick={() => setSelectedTech('all')}
                    className="ml-1 hover:text-primary-800 dark:hover:text-primary-200"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                onClick={clearFilters}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline"
              >
                Clear all
              </button>
            </div>
          )}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {filteredProjects.length} Project{filteredProjects.length !== 1 ? 's' : ''} Found
            </h2>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Code className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
