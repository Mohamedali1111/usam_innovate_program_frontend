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
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            About Me
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
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
          <motion.section variants={itemVariants} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-12 h-12 bg-slate-900 dark:bg-white flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white dark:text-slate-900" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-wide">Education</h3>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 tracking-wide">
                    {education.degree}
                  </h4>
                  <p className="text-xl text-slate-600 dark:text-slate-400 mb-2 font-medium">
                    {education.university}
                  </p>
                  <p className="text-slate-500 dark:text-slate-500 font-light">
                    {education.location}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 px-6 py-3 border border-slate-200 dark:border-slate-700">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium tracking-wide">{education.period}</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Coursework Section */}
          <motion.section variants={itemVariants} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-12 h-12 bg-slate-900 dark:bg-white flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white dark:text-slate-900" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-wide">Core Competencies</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(coursework).map(([category, courses]) => (
                <div key={category} className="bg-slate-50 dark:bg-slate-800 p-8">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 capitalize tracking-wide">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <ul className="space-y-4">
                    {courses.map((course, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-1 h-1 bg-slate-900 dark:bg-white rounded-full mt-3 flex-shrink-0"></div>
                        <span className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Key Achievements */}
          <motion.section variants={itemVariants} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-12 h-12 bg-slate-900 dark:bg-white flex items-center justify-center">
                <Award className="w-6 h-6 text-white dark:text-slate-900" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-wide">Professional Achievements</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div key={index} className="bg-slate-50 dark:bg-slate-800 p-8 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300">
                    <div className="flex items-start gap-6">
                      <div className="w-10 h-10 bg-slate-900 dark:bg-white flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white dark:text-slate-900" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-4">
                          <h4 className="text-xl font-semibold text-slate-900 dark:text-white tracking-wide">
                            {achievement.title}
                          </h4>
                          {achievement.period && (
                            <span className="text-sm text-slate-500 dark:text-slate-500 font-medium tracking-wide">
                              {achievement.period}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed font-light">
                          {achievement.description}
                        </p>
                        <span className="inline-block px-4 py-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm font-medium tracking-wide border border-slate-200 dark:border-slate-700">
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
          <motion.section variants={itemVariants} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-12 h-12 bg-slate-900 dark:bg-white flex items-center justify-center">
                <Globe className="w-6 h-6 text-white dark:text-slate-900" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-wide">Career Timeline</h3>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-8">
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-slate-900 dark:bg-white flex items-center justify-center border-4 border-white dark:border-slate-900">
                      <span className="text-white dark:text-slate-900 font-bold text-sm tracking-wide">
                        {item.year}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
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
