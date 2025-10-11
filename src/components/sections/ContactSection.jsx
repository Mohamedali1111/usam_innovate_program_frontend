import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Globe, MessageCircle, Building } from 'lucide-react'

const ContactSection = () => {
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
      description: 'Call me for urgent matters'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cairo, Egypt',
      link: 'https://maps.google.com/?q=Cairo,Egypt',
      description: 'Based in Cairo, Egypt'
    },
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
      description: 'Connect with me professionally'
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'mohamed-ali-portfolio.vercel.app',
      link: 'https://mohamed-ali-portfolio.vercel.app',
      description: 'Visit my portfolio website'
    }
  ]

  const availability = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM', status: 'Available' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM', status: 'Available' },
    { day: 'Sunday', time: 'Closed', status: 'Unavailable' }
  ]

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Ready to discuss your next project? I'm always excited to work on new challenges and bring ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
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
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors duration-200 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-slate-300 dark:group-hover:bg-slate-600 transition-colors duration-200">
                    <item.icon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {item.label}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 font-medium mb-1">
                      {item.value}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Availability & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Availability
            </h3>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
              <div className="space-y-4">
                {availability.map((slot, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        {slot.day}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {slot.time}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      slot.status === 'Available' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {slot.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <motion.a
                href="mailto:mohamedali200bu@gmail.com"
                className="flex items-center justify-center w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 px-6 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </motion.a>
              
              <motion.a
                href="https://github.com/Mohamedali1111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white py-4 px-6 rounded-lg font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-8">
            <MessageCircle className="w-12 h-12 text-slate-600 dark:text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with passionate people. 
              Whether you have a specific project in mind or just want to chat about technology, 
              I'd love to hear from you!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection