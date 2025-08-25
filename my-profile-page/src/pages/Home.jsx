import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Code, Mail, ChevronDown } from 'lucide-react'
import { useGreeting } from '../hooks/useGreeting'

const Home = () => {
  const greeting = useGreeting()
  const [experienceCount, setExperienceCount] = useState(0)
  const [projectsCount, setProjectsCount] = useState(0)
  const [skillsCount, setSkillsCount] = useState(0)

  // Real data from Mohamed Ali's profile
  const experienceYears = 3 // Since 2021
  const totalProjects = 7 // All projects listed
  const totalSkills = 25 // Count of technical skills

  useEffect(() => {
    const animateCount = (target, setter) => {
      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setter(Math.floor(current))
      }, 30)
    }

    animateCount(experienceYears, setExperienceCount)
    animateCount(totalProjects, setProjectsCount)
    animateCount(totalSkills, setSkillsCount)
  }, [])

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
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-primary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-700">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              <span className="text-gradient">Mohamed Ali</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
              variants={itemVariants}
            >
              Software Engineer
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8"
              variants={itemVariants}
            >
              {greeting}! I'm building secure, scalable, and user-friendly software.
            </motion.p>

            {/* Animated Stats */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {experienceCount}+
                </div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {projectsCount}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {skillsCount}+
                </div>
                <div className="text-gray-600 dark:text-gray-400">Technical Skills</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="/projects"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="/contact"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Contact Me
                  <Mail className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Computer Science graduate with practical experience building secure and scalable full-stack web applications. 
              Skilled in both frontend and backend using React, Node.js, MongoDB, and Next.js. 
              Completed internships in advertising and banking with real contributions to production systems. 
              Passionate about user-friendly design, clean architecture, and solving real-world problems through technology.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors duration-200"
            >
              Learn More About Me
              <ChevronDown className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-600" />
      </motion.div>
    </div>
  )
}

export default Home
