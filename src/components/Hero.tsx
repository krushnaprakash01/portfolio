import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Github, Linkedin, Code2, Mail, FileDown } from 'lucide-react'
import Terminal from './Terminal'
import { socials, resumeUrl } from '../data/socials'

const phrases = ['fast web apps', 'ML pipelines', 'open-source tools']

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Code2,
  Mail,
  Twitter: Mail, // fallback icon for Twitter
}

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [prefersReducedMotion])

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  const ease = [0.16, 1, 0.3, 1]

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--muted)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--muted)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-5 gap-12 lg:gap-16 items-center relative z-10 w-full">
        {/* Left column (60%) */}
        <div className="lg:col-span-3 space-y-6">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="font-mono text-sm text-muted"
          >
            {'// krushna-bhende — CSE \'28'}
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display italic text-foreground leading-[1.1]"
          >
            I build{' '}
            <span className="relative inline-flex min-w-[240px] sm:min-w-[320px] align-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIndex}
                  initial={
                    prefersReducedMotion
                      ? {}
                      : { opacity: 0, filter: 'blur(10px)', y: 10 }
                  }
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={
                    prefersReducedMotion
                      ? {}
                      : { opacity: 0, filter: 'blur(10px)', y: -10 }
                  }
                  transition={{ duration: 0.5, ease }}
                  className="text-accent absolute left-0"
                >
                  {phrases[phraseIndex]}
                </motion.span>
              </AnimatePresence>
              {/* Invisible spacer so the h1 doesn't collapse */}
              <span className="invisible">{phrases[0]}</span>
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="text-muted text-lg max-w-[52ch]"
          >
            Third Year BE CSE student at MGICOET. Currently
            building full-stack apps and exploring machine learning.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.4 }}
            className="flex flex-wrap items-center gap-5 pt-2"
          >
            <a
              href="#projects"
              className="group font-mono text-sm text-accent hover:text-foreground transition-colors"
            >
              View Projects
              <span className="block h-px bg-accent group-hover:bg-foreground transition-colors mt-0.5" />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 font-mono text-sm border border-border rounded-full text-muted hover:text-foreground hover:border-foreground/30 transition-all"
            >
              <FileDown size={14} />
              Download Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
            className="flex items-center gap-4 pt-4"
          >
            {socials
              .filter((s) => s.platform !== 'Email')
              .map((social) => {
                const Icon = iconMap[social.icon] || Mail
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
          </motion.div>
        </div>

        {/* Right column (40%) — Terminal mockup */}
        <div className="lg:col-span-2 hidden lg:block">
          <Terminal />
        </div>
      </div>
    </section>
  )
}

