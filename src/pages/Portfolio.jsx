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
      <section id="home" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="mb-8 sm:mb-12"
              variants={itemVariants}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center">
                <span className="text-white dark:text-slate-900 font-bold text-lg sm:text-xl">MA</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight leading-tight"
              variants={itemVariants}
            >
              Mohamed Ali
            </motion.h1>
            
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl font-light text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 tracking-wide px-4"
              variants={itemVariants}
            >
              Software Engineer & Full-Stack Developer
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg text-slate-500 dark:text-slate-500 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed font-light px-4"
              variants={itemVariants}
            >
              {greeting}! Computer Science graduate with hands-on experience in full-stack and frontend development, 
              specializing in React, Node.js, and modern web technologies. Skilled in building scalable applications 
              and collaborating in agile teams.
            </motion.p>

            {/* Professional CTA */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
              variants={itemVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full sm:w-auto"
              >
                <a
                  href="#projects"
                  className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium py-3 sm:py-4 px-6 sm:px-8 transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 tracking-wide uppercase text-xs sm:text-sm"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full sm:w-auto"
              >
                <a
                  href="#contact"
                  className="w-full border border-slate-900 dark:border-white text-slate-900 dark:text-white font-medium py-3 sm:py-4 px-6 sm:px-8 transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 tracking-wide uppercase text-xs sm:text-sm hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900"
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
