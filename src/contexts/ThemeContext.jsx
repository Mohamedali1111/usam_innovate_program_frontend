import React, { createContext, useContext, useReducer, useEffect } from 'react'

const ThemeContext = createContext()

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        isDark: !state.isDark
      }
    case 'SET_THEME':
      return {
        ...state,
        isDark: action.payload
      }
    default:
      return state
  }
}

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    isDark: false
  })

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      dispatch({ type: 'SET_THEME', payload: savedTheme === 'dark' })
    } else {
      dispatch({ type: 'SET_THEME', payload: prefersDark })
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    if (state.isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [state.isDark])

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' })
  }

  const value = {
    isDark: state.isDark,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
