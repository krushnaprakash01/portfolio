import { motion } from 'framer-motion'

/*
 * ============================================
 * EDIT YOUR ABOUT SECTION HERE
 * ============================================
 * Update the bio paragraphs, stats, and "exploring" topics below.
 */
const stats = [
  { value: '5+', label: 'Projects Shipped' },
  { value: '50+', label: 'LeetCode Solved' },
  { value: '50+', label: 'GitHub Stars' },
  { value: '10+', label: 'Open Source PRs' },
]

const exploring = ['Systems Design', 'LLM Fine-tuning', 'Rust']

export default function About() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          {...fadeUp}
          className="font-mono text-sm text-muted mb-12 flex items-center gap-4"
        >
          <span className="text-accent">01.</span> About
          <span className="h-px flex-1 bg-border" />
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Avatar placeholder — replace with your photo */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="aspect-[3/4] rounded-2xl bg-surface border border-border overflow-hidden">
              <img
                src="/photo.jpeg"
                alt="Krushna Bhende"
                className="w-full h-full object-cover"
                loading="lazy"
                width={400}
                height={533}
              />
            </div>
          </motion.div>

          {/* Bio */}
          <div className="lg:col-span-3 space-y-6">
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="text-foreground text-lg leading-relaxed"
            >
              Hey! I'm Krushna — a Third-year Computer Science student who
              loves turning ideas into real, working software. I've been
              building web apps for the past 1 year, starting from basic HTML
              pages to full-stack applications with proper auth, databases.
              
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="text-muted leading-relaxed"
            >
              When I'm not coding, I'm solving DSA problems, contributing to
              open source, or reading about distributed systems. I'm looking
              for opportunities where I can build meaningful products and learn
              from experienced engineers.
            </motion.p>

            {/* Stats row */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="font-mono text-2xl text-accent font-semibold">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-muted mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Currently exploring */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="pt-2"
            >
              <p className="font-mono text-sm text-muted mb-3">
                Currently exploring:
              </p>
              <div className="flex flex-wrap gap-2">
                {exploring.map((topic) => (
                  <span
                    key={topic}
                    className="font-mono text-xs px-3 py-1.5 rounded-full border border-accent/30 text-accent bg-accent/5"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

