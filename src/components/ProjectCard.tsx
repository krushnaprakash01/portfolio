import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
  featured?: boolean
}

export default function ProjectCard({
  project,
  index,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`group relative bg-surface border border-border rounded-3xl p-6 sm:p-8
        transition-shadow duration-300 hover:shadow-xl hover:shadow-black/20
        hover:border-elevated flex flex-col ${
          featured ? 'md:col-span-2 md:row-span-2' : ''
        }`}
    >
      {/* Project number */}
      <span className="font-mono text-sm text-muted/40">
        {String(project.id).padStart(2, '0')}
      </span>

      {/* Title */}
      <h3
        className={`font-body font-semibold text-foreground mt-3 ${
          featured ? 'text-2xl' : 'text-lg'
        }`}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className={`text-muted mt-2 leading-relaxed ${
          featured ? 'text-base' : 'text-sm line-clamp-2'
        }`}
      >
        {project.description}
      </p>

      {/* Featured-only: metric + detail */}
      {featured && project.metric && (
        <p className="text-accent font-mono text-sm mt-4">
          ⚡ {project.metric}
        </p>
      )}
      {featured && (
        <p className="text-muted/60 text-sm italic font-display mt-2">
          {project.detail}
        </p>
      )}

      {/* Non-featured: shorter detail */}
      {!featured && (
        <p className="text-muted/50 text-xs mt-2 font-display italic line-clamp-2">
          {project.detail}
        </p>
      )}

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-2.5 py-1 rounded-full bg-elevated text-muted border border-border"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-6 mt-auto pt-6 font-mono text-sm">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent transition-colors inline-flex items-center gap-1 group/link"
        >
          GitHub
          <ArrowUpRight
            size={14}
            className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
          />
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent transition-colors inline-flex items-center gap-1 group/link"
        >
          Live Demo
          <ArrowUpRight
            size={14}
            className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>
    </motion.article>
  )
}

