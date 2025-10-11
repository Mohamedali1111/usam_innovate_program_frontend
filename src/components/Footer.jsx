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
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-slate-600 dark:text-slate-400 font-light">
              © {currentYear} Mohamed Ali. All rights reserved.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-2 font-light">
              Software Engineer • Shorouk City, Cairo, Egypt
            </p>
          </div>
          
          <div className="flex space-x-8">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                  aria-label={link.ariaLabel}
                >
                  <Icon className="w-6 h-6" />
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
