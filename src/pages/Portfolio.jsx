import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { useGreeting } from '../hooks/useGreeting'

// Import sections as components
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ContactSection from '../components/sections/ContactSection'

const Portfolio = () => {
  const greeting = useGreeting()

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
      <section id="home" className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">MA</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              Mohamed Ali
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6"
              variants={itemVariants}
            >
              Software Engineer & Full-Stack Developer
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {greeting}! Computer Science graduate with hands-on experience in full-stack and frontend development, 
              specializing in React, Node.js, and modern web technologies. Skilled in building scalable applications 
              and collaborating in agile teams.
            </motion.p>

            {/* Professional CTA */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <a
                  href="#projects"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <a
                  href="#contact"
                  className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2 border border-slate-300 dark:border-slate-600 shadow-sm hover:shadow-md"
                >
                  Get In Touch
                  <Mail className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

export default Portfolio
