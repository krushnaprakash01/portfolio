import { motion } from 'framer-motion'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm text-muted mb-12 flex items-center gap-4"
        >
          <span className="text-accent">03.</span> Stack
          <span className="h-px flex-1 bg-border" />
        </motion.h2>

        {/* 3-column grid of glass cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass glass-hover rounded-2xl p-6 transition-all duration-300"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg bg-elevated text-foreground border border-border hover:border-accent/40 hover:text-accent transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

