import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone, Shield, Filter, Search, X } from 'lucide-react'
import SkillItem from '../components/SkillItem'

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('proficiency')

  // Real skills data from Mohamed Ali's profile
  const skills = [
    // Languages
    { name: 'JavaScript', description: 'ES6+, modern syntax, async programming', proficiency: 90, category: 'Languages' },
    { name: 'TypeScript', description: 'Type safety, interfaces, generics', proficiency: 85, category: 'Languages' },
    { name: 'Java', description: 'OOP, Spring Framework, enterprise development', proficiency: 80, category: 'Languages' },
    { name: 'PHP', description: 'Native PHP, web development, server-side scripting', proficiency: 75, category: 'Languages' },
    { name: 'C++', description: 'System programming, algorithms, data structures', proficiency: 70, category: 'Languages' },
    { name: 'C#', description: '.NET development, Windows applications', proficiency: 70, category: 'Languages' },
    { name: 'Dart', description: 'Flutter development, mobile app programming', proficiency: 80, category: 'Languages' },
    { name: 'Python', description: 'Scripting, automation, data processing', proficiency: 75, category: 'Languages' },
    { name: 'HTML5', description: 'Semantic markup, accessibility, modern standards', proficiency: 95, category: 'Languages' },
    { name: 'CSS3', description: 'Flexbox, Grid, animations, responsive design', proficiency: 90, category: 'Languages' },

    // Frontend
    { name: 'React', description: 'Hooks, Context, performance optimization', proficiency: 90, category: 'Frontend' },
    { name: 'Next.js', description: 'SSR, SSG, API routes, full-stack development', proficiency: 85, category: 'Frontend' },
    { name: 'Angular', description: 'Components, services, dependency injection', proficiency: 75, category: 'Frontend' },
    { name: 'Bootstrap', description: 'Responsive grid, components, utilities', proficiency: 85, category: 'Frontend' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS, custom components', proficiency: 90, category: 'Frontend' },

    // Backend
    { name: 'Node.js', description: 'Event-driven, non-blocking I/O, npm ecosystem', proficiency: 85, category: 'Backend' },
    { name: 'Express.js', description: 'REST APIs, middleware, routing', proficiency: 85, category: 'Backend' },
    { name: 'Spring Boot', description: 'Java framework, dependency injection, microservices', proficiency: 75, category: 'Backend' },
    { name: 'PHP Native', description: 'Server-side scripting, web applications', proficiency: 75, category: 'Backend' },

    // Mobile
    { name: 'Flutter', description: 'Cross-platform mobile development, Dart framework', proficiency: 80, category: 'Mobile' },

    // Databases
    { name: 'MongoDB', description: 'NoSQL, document storage, aggregation', proficiency: 80, category: 'Databases' },
    { name: 'MySQL', description: 'Relational database, SQL queries, optimization', proficiency: 75, category: 'Databases' },
    { name: 'Firebase', description: 'Cloud database, authentication, hosting', proficiency: 80, category: 'Databases' },

    // Tools & Practices
    { name: 'Git & GitHub', description: 'Version control, collaboration, workflow', proficiency: 90, category: 'Tools' },
    { name: 'REST APIs', description: 'API design, HTTP methods, status codes', proficiency: 85, category: 'Practices' },
    { name: 'Responsive Design', description: 'Mobile-first, breakpoints, flexible layouts', proficiency: 90, category: 'Practices' },
    { name: 'Authentication', description: 'JWT, session management, security', proficiency: 80, category: 'Practices' },
    { name: 'Role-based Access Control', description: 'User permissions, security models', proficiency: 80, category: 'Practices' },
    { name: 'Agile/Scrum', description: 'Sprint planning, daily standups, retrospectives', proficiency: 85, category: 'Practices' },
    { name: 'CI/CD', description: 'Continuous integration, automated deployment', proficiency: 75, category: 'Practices' },
    { name: 'Testing', description: 'Unit testing, integration testing, TDD', proficiency: 70, category: 'Practices' }
  ]

  const categories = [
    { id: 'all', name: 'All Skills', icon: Code, count: skills.length },
    { id: 'Languages', name: 'Languages', icon: Code, count: skills.filter(s => s.category === 'Languages').length },
    { id: 'Frontend', name: 'Frontend', icon: Globe, count: skills.filter(s => s.category === 'Frontend').length },
    { id: 'Backend', name: 'Backend', icon: Database, count: skills.filter(s => s.category === 'Backend').length },
    { id: 'Mobile', name: 'Mobile', icon: Smartphone, count: skills.filter(s => s.category === 'Mobile').length },
    { id: 'Databases', name: 'Databases', icon: Database, count: skills.filter(s => s.category === 'Databases').length },
    { id: 'Tools', name: 'Tools', icon: Shield, count: skills.filter(s => s.category === 'Tools').length },
    { id: 'Practices', name: 'Practices', icon: Shield, count: skills.filter(s => s.category === 'Practices').length }
  ]

  const filteredSkills = useMemo(() => {
    let filtered = skills

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(skill => skill.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(skill =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Sort skills
    switch (sortBy) {
      case 'proficiency':
        return filtered.sort((a, b) => b.proficiency - a.proficiency)
      case 'name':
        return filtered.sort((a, b) => a.name.localeCompare(b.name))
      case 'category':
        return filtered.sort((a, b) => a.category.localeCompare(b.category))
      default:
        return filtered
    }
  }, [skills, selectedCategory, searchTerm, sortBy])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSortBy('proficiency')
  }

  const getCategoryStats = () => {
    const stats = {}
    skills.forEach(skill => {
      if (!stats[skill.category]) {
        stats[skill.category] = { count: 0, avgProficiency: 0 }
      }
      stats[skill.category].count++
      stats[skill.category].avgProficiency += skill.proficiency
    })
    
    Object.keys(stats).forEach(category => {
      stats[category].avgProficiency = Math.round(stats[category].avgProficiency / stats[category].count)
    })
    
    return stats
  }

  const categoryStats = getCategoryStats()

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
            Technical Skills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across programming languages, 
            frameworks, tools, and best practices.
          </p>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {Object.entries(categoryStats).map(([category, stats]) => (
            <div key={category} className="bg-white dark:bg-dark-700 rounded-lg p-4 text-center border border-gray-200 dark:border-dark-600">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                {stats.count}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {category}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                Avg: {stats.avgProficiency}%
              </div>
            </div>
          ))}
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
                placeholder="Search skills..."
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

            {/* Sort */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="proficiency">Sort by Proficiency</option>
                <option value="name">Sort by Name</option>
                <option value="category">Sort by Category</option>
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {(searchTerm || selectedCategory !== 'all') && (
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
              <button
                onClick={clearFilters}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline"
              >
                Clear all
              </button>
            </div>
          )}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {filteredSkills.length} Skill{filteredSkills.length !== 1 ? 's' : ''} Found
            </h2>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredSkills.length} of {skills.length} skills
            </div>
          </div>

          {filteredSkills.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <SkillItem skill={skill} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Code className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No skills found
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

export default Skills
