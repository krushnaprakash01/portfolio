import { motion } from 'framer-motion'
import { Github, Linkedin, Code2, Mail, Twitter } from 'lucide-react'
import { socials } from '../data/socials'

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Code2,
  Mail,
  Twitter,
}

export default function Contact() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.h2
          {...fadeUp}
          className="font-mono text-sm text-muted mb-6 flex items-center justify-center gap-4"
        >
          <span className="h-px w-12 bg-border" />
          <span>
            <span className="text-accent">05.</span> Contact
          </span>
          <span className="h-px w-12 bg-border" />
        </motion.h2>

        <motion.h3
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="font-display italic text-3xl sm:text-4xl text-foreground mb-4"
        >
          Let's Build Something
        </motion.h3>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="text-muted mb-8 max-w-md mx-auto"
        >
          I'm open to internships, full-time roles, and freelance projects.
          Response within 24 hours — usually much faster.
        </motion.p>

        <motion.a
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          href="mailto:krushnaprakashbhende@gmail.com"
          className="inline-block font-mono text-lg text-accent hover:text-foreground transition-colors group"
        >
          krushnaprakashbhende@gmail.com
          <span className="block h-px bg-accent group-hover:bg-foreground transition-colors" />
        </motion.a>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.25 }}
          className="flex items-center justify-center gap-5 mt-10"
        >
          {socials.map((social) => {
            const Icon = iconMap[social.icon] || Mail
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl text-muted hover:text-accent hover:bg-elevated/50 transition-all"
                aria-label={social.platform}
              >
                <Icon size={22} />
              </a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

