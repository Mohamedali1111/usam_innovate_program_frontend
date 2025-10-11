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
      description: 'View my code and projects'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohamed-ali-38b6a92b1/',
      icon: Linkedin,
      description: 'Connect professionally'
    },
    {
      name: 'Portfolio',
      url: '#home',
      icon: Globe,
      description: 'View my portfolio'
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
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900">
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
            Let's Connect
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'm always interested in connecting with fellow developers, potential clients, and innovative teams.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            
            {/* Contact Form - Takes 2 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12 h-full">
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-12 h-12 bg-slate-900 dark:bg-white flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white dark:text-slate-900" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-wide">Send Message</h3>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-3 tracking-wide uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-6 py-4 border focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent transition-colors duration-200 ${
                          errors.name 
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                            : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                        } text-slate-900 dark:text-white font-light`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-3 tracking-wide uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-6 py-4 border focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent transition-colors duration-200 ${
                          errors.email 
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                            : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                        } text-slate-900 dark:text-white font-light`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-3 tracking-wide uppercase">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full px-6 py-4 border focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent transition-colors duration-200 ${
                        errors.message 
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                          : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                      } text-slate-900 dark:text-white resize-vertical font-light`}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium py-4 px-12 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide uppercase text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white dark:border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Contact Information - Takes 1 column */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-slate-900 dark:bg-white flex items-center justify-center">
                    <Building className="w-5 h-5 text-white dark:text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">Contact Info</h3>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-slate-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1">
                          <Icon className="w-4 h-4 text-white dark:text-slate-900" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-1 tracking-wide text-sm">
                            {info.label}
                          </h4>
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-light text-sm break-all"
                          >
                            {info.value}
                          </a>
                          <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 font-light">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-slate-900 dark:bg-white flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white dark:text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">Connect</h3>
                </div>

                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target={social.url.startsWith('http') ? '_blank' : undefined}
                        rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 group"
                      >
                        <div className="w-8 h-8 bg-slate-900 dark:bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <Icon className="w-4 h-4 text-white dark:text-slate-900" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors duration-200 tracking-wide text-sm">
                            {social.name}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-500 font-light">
                            {social.description}
                          </p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Availability Section */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 tracking-wide">
                Let's Work Together
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 font-light">
                I'm currently available for:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-900 dark:bg-white flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white dark:text-slate-900" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2 tracking-wide">Full-time Positions</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-500 font-light">Software Engineering roles</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-900 dark:bg-white flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white dark:text-slate-900" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2 tracking-wide">Freelance Projects</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-500 font-light">Web development work</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-900 dark:bg-white flex items-center justify-center mx-auto mb-4">
                    <Github className="w-8 h-8 text-white dark:text-slate-900" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2 tracking-wide">Open Source</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-500 font-light">Contributions & collaborations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-900 dark:bg-white flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white dark:text-slate-900" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2 tracking-wide">Consulting</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-500 font-light">Technical guidance & mentorship</p>
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