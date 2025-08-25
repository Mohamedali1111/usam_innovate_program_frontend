import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, BookOpen, Award, Users, Globe, Building, Code } from 'lucide-react'

const About = () => {
  const education = {
    degree: "B.Sc. in Computer Science and Information Systems",
    university: "Misr International University (MIU)",
    period: "Sep 2021 – Jun 2025",
    location: "Cairo, Egypt"
  }

  const coursework = {
    programming: [
      "Object-Oriented Programming (Java)",
      "Data Structures & Algorithms",
      "Web Development (HTML, CSS, JavaScript)",
      "Database Design & Management",
      "Software Engineering Principles"
    ],
    csFundamentals: [
      "Computer Architecture",
      "Operating Systems",
      "Computer Networks",
      "Cybersecurity Fundamentals",
      "Artificial Intelligence Basics"
    ],
    informationSystems: [
      "Information Systems Analysis",
      "Database Systems (MySQL, MongoDB)",
      "Web Technologies & Frameworks",
      "Mobile App Development",
      "Cloud Computing Concepts"
    ]
  }

  const achievements = [
    {
      title: "ICP Hackathon 2025 Finalist",
      description: "2nd place in Phase 1 for CargoTrace Finance project",
      icon: Award,
      category: "Competition"
    },
    {
      title: "Software Development Intern",
      description: "Circle Advertising Egypt - Built production features",
      icon: Building,
      category: "Work Experience"
    },
    {
      title: "Banking Internship",
      description: "Commercial International Bank (CIB) - Digital transformation",
      icon: Users,
      category: "Industry Experience"
    },
    {
      title: "Freelance Projects",
      description: "Delivered client projects under tight deadlines",
      icon: Code,
      category: "Client Work"
    }
  ]

  const timeline = [
    {
      year: "2021",
      title: "Started Computer Science Degree",
      description: "Began B.Sc. at Misr International University"
    },
    {
      year: "2022-2023",
      title: "Core CS Foundation",
      description: "Studied programming, algorithms, and computer fundamentals"
    },
    {
      year: "2023-2024",
      title: "Advanced Development",
      description: "Learned web technologies, databases, and frameworks"
    },
    {
      year: "2024",
      title: "Professional Experience",
      description: "Internships at Circle Advertising and CIB Bank"
    },
    {
      year: "2025",
      title: "Final Year & Projects",
      description: "Advanced projects and ICP Hackathon participation"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-800">
      <div className="container-custom section-padding">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Computer Science graduate with practical experience building secure and scalable full-stack web applications. 
            Skilled in both frontend and backend using React, Node.js, MongoDB, and Next.js.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Education Section */}
          <motion.section variants={itemVariants} className="card">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
            </div>
            
            <div className="bg-white dark:bg-dark-700 rounded-lg p-6 border border-gray-200 dark:border-dark-600">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">
                    {education.university}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {education.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{education.period}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Coursework Section */}
          <motion.section variants={itemVariants} className="card">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Relevant Coursework</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(coursework).map(([category, courses]) => (
                <div key={category} className="bg-white dark:bg-dark-700 rounded-lg p-6 border border-gray-200 dark:border-dark-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <ul className="space-y-2">
                    {courses.map((course, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Key Achievements */}
          <motion.section variants={itemVariants} className="card">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Key Achievements</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div key={index} className="bg-white dark:bg-dark-700 rounded-lg p-6 border border-gray-200 dark:border-dark-600">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          {achievement.description}
                        </p>
                        <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm rounded-full">
                          {achievement.category}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.section>

          {/* Timeline Section */}
          <motion.section variants={itemVariants} className="card">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                <Globe className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Academic Journey</h2>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center border-4 border-white dark:border-dark-700">
                      <span className="text-primary-600 dark:text-primary-400 font-bold text-sm">
                        {item.year}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}

export default About
