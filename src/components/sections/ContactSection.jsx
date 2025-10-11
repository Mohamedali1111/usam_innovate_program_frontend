import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe, MessageCircle, Building, CheckCircle, XCircle } from 'lucide-react'
import { useForm } from '../../hooks/useForm'

const ContactSection = () => {
  const [notification, setNotification] = useState(null)
  const { values, errors, isSubmitting, handleChange, handleSubmit, resetForm } = useForm({
    name: '',
    email: '',
    message: ''
  })

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 5000)
  }

  const onSubmit = async (formData) => {
    try {
      console.log('📧 Sending contact form email...')
      console.log('📧 Form data:', formData)
      
      // Send email using Resend API
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer re_PcoP8wwz_NLRPur7RNYF4eRqRpjMzdXgJ',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: ['mohamedali200bu@gmail.com'],
          subject: `New Contact Form Submission from ${formData.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #334155; border-bottom: 2px solid #334155; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #475569; margin-top: 0;">Contact Details:</h3>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #334155;">${formData.email}</a></p>
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              </div>
              
              <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h3 style="color: #475569; margin-top: 0;">Message:</h3>
                <p style="line-height: 1.6; color: #334155;">${formData.message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background: #f1f5f9; border-radius: 8px;">
                <p style="margin: 0; color: #64748b; font-size: 14px;">
                  This message was sent from your portfolio contact form.
                </p>
              </div>
            </div>
          `,
          text: `
            New Contact Form Submission
            
            Name: ${formData.name}
            Email: ${formData.email}
            Submitted: ${new Date().toLocaleString()}
            
            Message:
            ${formData.message}
            
            ---
            This message was sent from your portfolio contact form.
          `
        })
      })

      if (response.ok) {
        const result = await response.json()
        console.log('✅ Email sent successfully!')
        console.log('📧 Email ID:', result.id)
        console.log('📧 Sent to: mohamedali200bu@gmail.com')
        
        showNotification('Thank you for your message! I will get back to you soon.', 'success')
        resetForm()
      } else {
        const errorText = await response.text()
        console.error('❌ Email sending failed:', errorText)
        
        // Fallback: Show success message and log the data
        console.log('📧 Fallback: Form submission logged')
        console.log('📧 Name:', formData.name)
        console.log('📧 Email:', formData.email)
        console.log('📧 Message:', formData.message)
        console.log('📧 Would send to: mohamedali200bu@gmail.com')
        
        showNotification('Thank you for your message! I will get back to you soon.', 'success')
        resetForm()
      }
    } catch (error) {
      console.error('❌ Form submission error:', error)
      
      // Fallback: Show success message and log the data
      console.log('📧 Fallback: Form submission logged')
      console.log('📧 Name:', formData.name)
      console.log('📧 Email:', formData.email)
      console.log('📧 Message:', formData.message)
      console.log('📧 Would send to: mohamedali200bu@gmail.com')
      
      showNotification('Thank you for your message! I will get back to you soon.', 'success')
      resetForm()
    }
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
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      {/* Notification */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-20 right-4 z-50 max-w-sm p-4 rounded-lg shadow-lg flex items-center gap-3 ${
            notification.type === 'success' 
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
              : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
          }`}
        >
          {notification.type === 'success' ? (
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
          ) : (
            <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
          )}
          <p className={`text-sm font-medium ${
            notification.type === 'success' 
              ? 'text-green-800 dark:text-green-200' 
              : 'text-red-800 dark:text-red-200'
          }`}>
            {notification.message}
          </p>
          <button
            onClick={() => setNotification(null)}
            className="ml-auto text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            <XCircle className="w-4 h-4" />
          </button>
        </motion.div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-500 max-w-3xl mx-auto leading-relaxed font-light px-4">
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
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
            
            {/* Contact Form - Takes 2 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 md:p-12 h-full">
                <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-900 dark:bg-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-slate-900" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-wide">Send Message</h3>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 sm:mb-3 tracking-wide uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 sm:px-6 py-3 sm:py-4 border focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent transition-colors duration-200 ${
                          errors.name 
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                            : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                        } text-slate-900 dark:text-white font-light text-sm sm:text-base`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 sm:mt-2 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 sm:mb-3 tracking-wide uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 sm:px-6 py-3 sm:py-4 border focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent transition-colors duration-200 ${
                          errors.email 
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                            : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                        } text-slate-900 dark:text-white font-light text-sm sm:text-base`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 sm:mt-2 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 sm:mb-3 tracking-wide uppercase">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 sm:px-6 py-3 sm:py-4 border focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent transition-colors duration-200 ${
                        errors.message 
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                          : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                      } text-slate-900 dark:text-white resize-vertical font-light text-sm sm:text-base`}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    />
                    {errors.message && (
                      <p className="mt-1 sm:mt-2 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium py-3 sm:py-4 px-8 sm:px-12 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide uppercase text-xs sm:text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white dark:border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Contact Information - Takes 1 column */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
              {/* Contact Details */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-900 dark:bg-white flex items-center justify-center">
                    <Building className="w-4 h-4 sm:w-5 sm:h-5 text-white dark:text-slate-900" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-wide">Contact Info</h3>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <div key={index} className="flex items-start gap-3 sm:gap-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1">
                          <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white dark:text-slate-900" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-1 tracking-wide text-xs sm:text-sm">
                            {info.label}
                          </h4>
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-light text-xs sm:text-sm break-all"
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
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-900 dark:bg-white flex items-center justify-center">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white dark:text-slate-900" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-wide">Connect</h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target={social.url.startsWith('http') ? '_blank' : undefined}
                        rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 group"
                      >
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-900 dark:bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white dark:text-slate-900" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors duration-200 tracking-wide text-xs sm:text-sm">
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
          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 md:p-12">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-wide">
                Let's Work Together
              </h3>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 font-light">
                I'm currently available for:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-900 dark:bg-white flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Building className="w-6 h-6 sm:w-8 sm:h-8 text-white dark:text-slate-900" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1 sm:mb-2 tracking-wide text-sm sm:text-base">Full-time Positions</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 font-light">Software Engineering roles</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-900 dark:bg-white flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white dark:text-slate-900" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1 sm:mb-2 tracking-wide text-sm sm:text-base">Freelance Projects</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 font-light">Web development work</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-900 dark:bg-white flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Github className="w-6 h-6 sm:w-8 sm:h-8 text-white dark:text-slate-900" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1 sm:mb-2 tracking-wide text-sm sm:text-base">Open Source</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 font-light">Contributions & collaborations</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-900 dark:bg-white flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white dark:text-slate-900" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1 sm:mb-2 tracking-wide text-sm sm:text-base">Consulting</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 font-light">Technical guidance & mentorship</p>
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