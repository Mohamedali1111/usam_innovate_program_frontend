import React, { useState, useCallback } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { Sun, Moon, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    closeMenu()
  }

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center space-x-3 hover:opacity-70 transition-opacity duration-200"
          >
            <div className="w-8 h-8 bg-slate-900 dark:bg-white flex items-center justify-center">
              <span className="text-white dark:text-slate-900 font-bold text-sm">MA</span>
            </div>
            <span className="text-lg font-medium text-slate-900 dark:text-white tracking-wide">
              Mohamed Ali
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-medium transition-colors duration-200 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white tracking-wide uppercase text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-6">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-slate-600 dark:text-slate-400" /> : <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />}
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-slate-600 dark:text-slate-400" /> : <Menu className="w-5 h-5 text-slate-600 dark:text-slate-400" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800">
            <div className="py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 font-medium transition-colors duration-200 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 tracking-wide uppercase text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
