import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Wrench, Zap } from 'lucide-react'

const SkillsSection = () => {
  // Clean, organized skills based on CV
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['JavaScript', 'Java', 'C++', 'C#', 'PHP', 'Python', 'Dart', 'Rust', 'HTML5', 'CSS3']
    },
    {
      title: 'Frameworks & Libraries',
      icon: Globe,
      skills: ['React', 'Next.js', 'Angular', 'Node.js', 'Express.js', 'Flutter', 'Spring Boot', 'Bootstrap', 'EJS']
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Firebase']
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Figma', 'Framer', 'Jira']
    },
    {
      title: 'Practices',
      icon: Zap,
      skills: ['REST APIs', 'Responsive Design', 'Version Control', 'Agile/Scrum', 'Authentication', 'Testing']
    }
  ]

  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            A comprehensive overview of my technical skills and competencies, categorized for clarity and easy review.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            
            return (
              <motion.div
                key={category.title}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-12 h-12 bg-slate-900 dark:bg-white flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white dark:text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-medium tracking-wide border border-slate-200 dark:border-slate-700"
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
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 tracking-wide">
              Skills Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                    {category.skills.length}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-500 font-medium tracking-wide uppercase">
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