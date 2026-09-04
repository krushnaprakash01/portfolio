import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm text-muted mb-12 flex items-center gap-4"
        >
          <span className="text-accent">02.</span> Selected Work
          <span className="h-px flex-1 bg-border" />
        </motion.h2>

        {/* Bento-style grid: featured card spans 2 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

