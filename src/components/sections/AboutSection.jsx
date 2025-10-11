import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, BookOpen, Award, Globe, Building, Code } from 'lucide-react'

const AboutSection = () => {
  const education = {
    degree: "B.Sc. in Computer Science and Information Systems",
    university: "Misr International University (MIU)",
    period: "Sep 2021 – Jun 2025",
    location: "Cairo, Egypt"
  }

  const coursework = {
    programming: [
      "Data Structures",
      "Object-Oriented Programming", 
      "Web Development",
      "Software Engineering",
      "Software Testing"
    ],
    csFundamentals: [
      "Database Management",
      "Artificial Intelligence",
      "Computer Architecture",
      "Operating Systems",
      "Computer Networks"
    ],
    informationSystems: [
      "Information Systems Analysis",
      "Database Systems",
      "Web Technologies & Frameworks",
      "Mobile App Development",
      "Cloud Computing Concepts"
    ]
  }

  const achievements = [
    {
      title: "USAM Innovate Program",
      description: "React Developer Intern - Developed and optimized responsive web interfaces using React.js, ensuring consistent design across devices. Integrated APIs and state management to improve functionality and user interactions.",
      icon: Building,
      category: "Current Internship",
      period: "Aug 2025 – Sep 2025"
    },
    {
      title: "Circle Advertising Egypt",
      description: "Software Development Intern - Contributed to frontend and backend features in internal web tools, improving performance and user experience. Fixed bugs, optimized database queries, and updated UI components.",
      icon: Building,
      category: "Work Experience",
      period: "Sep 2024 – Oct 2024"
    },
    {
      title: "CargoTrace Hackathon",
      description: "Built a DeFi platform that mirrored real-world trade documents into blockchain NFTs to trigger financing. Designed React frontend with blockchain integration.",
      icon: Award,
      category: "Competition",
      period: "2025"
    },
    {
      title: "Cybersecurity Platform",
      description: "Developed a cybersecurity training platform simulating phishing and malware scenarios. Implemented authentication, role-based dashboards, and performance tracking.",
      icon: Code,
      category: "Graduation Project",
      period: "2024"
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
      description: "Circle Advertising internship and graduation project"
    },
    {
      year: "2025",
      title: "Current Internship",
      description: "USAM Innovate Program - React Developer Intern"
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
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900">
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
            About Me
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Computer Science graduate with hands-on experience in building enterprise-grade applications. 
            Specialized in modern web technologies with a focus on security, scalability, and user experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Education Section */}
          <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h2>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-1 font-medium">
                    {education.university}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    {education.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{education.period}</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Coursework Section */}
          <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Core Competencies</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(coursework).map(([category, courses]) => (
                <div key={category} className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <ul className="space-y-3">
                    {courses.map((course, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Key Achievements */}
          <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Professional Achievements</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div key={index} className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-200">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex-shrink-0">
                        <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {achievement.title}
                          </h3>
                          {achievement.period && (
                            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                              {achievement.period}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                          {achievement.description}
                        </p>
                        <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm rounded-full font-medium">
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
          <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                <Globe className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Career Timeline</h2>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200 dark:bg-orange-800"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800">
                      <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">
                        {item.year}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
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
    </section>
  )
}

export default AboutSection
