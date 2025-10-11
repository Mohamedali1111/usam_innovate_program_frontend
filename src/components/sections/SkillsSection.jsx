import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Wrench, Zap } from 'lucide-react'

const SkillsSection = () => {
  // Clean, organized skills based on CV
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['JavaScript', 'Java', 'C++', 'C#', 'PHP', 'Python', 'Dart', 'Rust', 'HTML5', 'CSS3'],
      color: 'blue'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Globe,
      skills: ['React', 'Next.js', 'Angular', 'Node.js', 'Express.js', 'Flutter', 'Spring Boot', 'Bootstrap', 'EJS'],
      color: 'green'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Firebase'],
      color: 'purple'
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Figma', 'Framer', 'Jira'],
      color: 'orange'
    },
    {
      title: 'Practices',
      icon: Zap,
      skills: ['REST APIs', 'Responsive Design', 'Version Control', 'Agile/Scrum', 'Authentication', 'Testing'],
      color: 'indigo'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/10',
        icon: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-800'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/10',
        icon: 'text-green-600 dark:text-green-400',
        border: 'border-green-200 dark:border-green-800'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/10',
        icon: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-800'
      },
      orange: {
        bg: 'bg-orange-50 dark:bg-orange-900/10',
        icon: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-200 dark:border-orange-800'
      },
      indigo: {
        bg: 'bg-indigo-50 dark:bg-indigo-900/10',
        icon: 'text-indigo-600 dark:text-indigo-400',
        border: 'border-indigo-200 dark:border-indigo-800'
      }
    }
    return colors[color] || colors.blue
  }

  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-900">
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
            Technical Skills
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across modern web technologies, frameworks, and development practices.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const colorClasses = getColorClasses(category.color)
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${colorClasses.bg} ${colorClasses.border} rounded-2xl p-8 border-2 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 ${colorClasses.bg} rounded-xl`}>
                    <Icon className={`w-6 h-6 ${colorClasses.icon}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h2>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 bg-white dark:bg-slate-800 ${colorClasses.icon} rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Skills Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                    {category.skills.length}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {category.title.split(' ')[0]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
