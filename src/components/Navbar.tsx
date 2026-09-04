import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 glass border-b border-border'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo with pulsing green dot */}
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-sm text-foreground hover:text-accent transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          krushna.dev
        </a>

        {/* Center: pill-style nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-1 bg-surface/50 backdrop-blur-sm rounded-full px-2 py-1 border border-border">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 text-sm font-mono text-muted hover:text-foreground transition-colors rounded-full hover:bg-elevated/50"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: dark mode toggle + CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-elevated transition-all"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-sm font-mono border border-border rounded-full text-foreground hover:border-accent hover:text-accent transition-all group"
          >
            Let's Talk
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

