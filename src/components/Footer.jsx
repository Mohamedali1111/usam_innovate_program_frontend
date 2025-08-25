import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Mohamedali1111',
      icon: Github,
      ariaLabel: 'Visit Mohamed Ali\'s GitHub profile'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohamed-ali-38b6a92b1/',
      icon: Linkedin,
      ariaLabel: 'Visit Mohamed Ali\'s LinkedIn profile'
    },
    {
      name: 'Email',
      url: 'mailto:mohamedali200bu@gmail.com',
      icon: Mail,
      ariaLabel: 'Send email to Mohamed Ali'
    }
  ]

  return (
    <footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Mohamed Ali. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Software Engineer • Shorouk City, Cairo, Egypt
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  aria-label={link.ariaLabel}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
