import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe, MessageCircle, Building } from 'lucide-react'
import { useForm } from '../../hooks/useForm'

const ContactSection = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit, resetForm } = useForm({
    name: '',
    email: '',
    message: ''
  })

  const onSubmit = async (formData) => {
    // Simulate form submission
    console.log('Form submitted:', formData)
    
    // In a real application, you would send this data to your backend
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    
    alert('Thank you for your message! I will get back to you soon.')
    resetForm()
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mohamedali200bu@gmail.com',
      link: 'mailto:mohamedali200bu@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 1014800766',
      link: 'tel:+201014800766',
      description: 'Call or WhatsApp available'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Shorouk City, Cairo, Egypt',
      link: 'https://maps.google.com/?q=Shorouk+City+Cairo+Egypt',
      description: 'Based in Egypt, open to remote work'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Mohamedali1111',
      icon: Github,
      description: 'View my code and projects',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohamed-ali-38b6a92b1/',
      icon: Linkedin,
      description: 'Connect professionally',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Portfolio',
      url: '#home',
      icon: Globe,
      description: 'View my portfolio',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
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
    <section id="contact" className="section-padding bg-white dark:bg-slate-900">
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
            Let's Connect
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'm always interested in connecting with fellow developers, potential clients, and innovative teams.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Send Message</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                    errors.name 
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                      : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700'
                  } text-slate-900 dark:text-white`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                    errors.email 
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                      : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700'
                  } text-slate-900 dark:text-white`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                    errors.message 
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                      : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700'
                  } text-slate-900 dark:text-white resize-vertical`}
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Details */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Information</h2>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white dark:bg-slate-700 rounded-lg">
                      <div className="p-2 bg-slate-100 dark:bg-slate-600 rounded-lg flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                          {info.label}
                        </h3>
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Connect With Me</h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target={social.url.startsWith('http') ? '_blank' : undefined}
                      rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-200 group"
                    >
                      <div className="p-2 bg-slate-100 dark:bg-slate-600 rounded-lg group-hover:scale-110 transition-transform duration-200">
                        <Icon className={`w-5 h-5 text-slate-600 dark:text-slate-400 transition-colors duration-200 ${social.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {social.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {social.description}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
              <div className="text-center p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Let's Work Together
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  I'm currently available for:
                </p>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <p>• Full-time Software Engineering positions</p>
                  <p>• Freelance web development projects</p>
                  <p>• Open source contributions</p>
                  <p>• Technical consulting and mentorship</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
