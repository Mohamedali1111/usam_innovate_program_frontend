import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Portfolio />
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
