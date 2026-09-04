import { motion } from 'framer-motion'
import { experience } from '../data/experience'

export default function Timeline() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm text-muted mb-12 flex items-center gap-4"
        >
          <span className="text-accent">04.</span> Experience &amp; Education
          <span className="h-px flex-1 bg-border" />
        </motion.h2>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border hidden sm:block" />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <motion.div
                key={`${item.role}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex gap-8 relative"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center pt-1.5 flex-shrink-0">
                  <div className="w-[15px] h-[15px] rounded-full border-2 border-accent bg-background z-10" />
                </div>

                {/* Content */}
                <div className="flex-1 sm:flex gap-8">
                  {/* Date */}
                  <div className="font-mono text-sm text-muted whitespace-nowrap min-w-[150px] pt-0.5 mb-2 sm:mb-0">
                    {item.dates}
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="text-lg text-foreground font-medium">
                      {item.role}
                    </h3>
                    <p className="font-mono text-sm text-accent mt-0.5">
                      @ {item.org}
                    </p>
                    <p className="text-muted text-sm mt-3 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2.5 py-0.5 rounded bg-elevated text-muted border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

