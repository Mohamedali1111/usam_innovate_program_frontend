import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Globe, MessageCircle, ArrowRight } from 'lucide-react'

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mohamedali200bu@gmail.com',
      link: 'mailto:mohamedali200bu@gmail.com',
      description: 'Get in touch for project discussions'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 1014800766',
      link: 'tel:+201014800766',
      description: 'Available for urgent consultations'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cairo, Egypt',
      link: 'https://maps.google.com/?q=Cairo,Egypt',
      description: 'Open to remote and local projects'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Mohamedali1111',
      link: 'https://github.com/Mohamedali1111',
      description: 'View my code repositories'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mohamed-ali',
      link: 'https://linkedin.com/in/mohamed-ali',
      description: 'Connect professionally'
    },
    {
      icon: Globe,
      label: 'Portfolio',
      value: 'mohamed-ali-portfolio.vercel.app',
      link: 'https://mohamed-ali-portfolio.vercel.app',
      description: 'View my work portfolio'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm passionate about creating exceptional digital experiences 
            and would love to discuss your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Primary Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center space-x-4 p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-600"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors duration-200">
                      <item.icon className="w-7 h-7 text-slate-600 dark:text-slate-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white text-lg mb-1">
                        {item.label}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 font-medium text-lg mb-1">
                        {item.value}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-200" />
                  </motion.a>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700"
              >
                <motion.a
                  href="mailto:mohamedali200bu@gmail.com"
                  className="inline-flex items-center justify-center w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-6 h-6 mr-3" />
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 ml-3" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 h-fit">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                Connect With Me
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors duration-200">
                      <item.icon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {item.label}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-200" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-12">
            <MessageCircle className="w-16 h-16 text-slate-600 dark:text-slate-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
              I'm always excited to work on new projects and collaborate with passionate people. 
              Whether you have a specific project in mind or just want to explore possibilities, 
              let's start a conversation and see what we can build together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection