import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  // Persist theme in localStorage
  useEffect(() => {
    const stored = localStorage.getItem('portfolio-theme')
    if (stored === 'light') {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    } else {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev
      if (next) {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
        localStorage.setItem('portfolio-theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
        localStorage.setItem('portfolio-theme', 'light')
      }
      return next
    })
  }

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

