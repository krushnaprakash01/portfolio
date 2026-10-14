import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ExternalLink, Award, Calendar } from 'lucide-react'
import type { CertificateItem } from '../data/experience'

interface CertificateModalProps {
  certificate: CertificateItem | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  currentIndex: number
  totalCount: number
}

export default function CertificateModal({
  certificate,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
}: CertificateModalProps) {
  useEffect(() => {
    if (!certificate) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [certificate, onClose, onPrev, onNext])

  if (!certificate) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl w-full bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-elevated/40">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-accent/10 text-accent">
                <Award size={18} />
              </span>
              <div>
                <h3 className="text-foreground text-sm sm:text-base font-medium truncate max-w-[260px] sm:max-w-md">
                  {certificate.title}
                </h3>
                <p className="text-xs font-mono text-muted flex items-center gap-2">
                  <span>{certificate.issuer}</span>
                  <span>•</span>
                  <span className="text-accent">{currentIndex + 1} of {totalCount}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border border-border text-muted hover:text-foreground hover:bg-elevated transition-colors"
                title="Open original image in full resolution"
              >
                Full Resolution
                <ExternalLink size={13} />
              </a>
              <button
                onClick={onClose}
                className="p-2 text-muted hover:text-foreground hover:bg-elevated rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Certificate Image Viewport */}
          <div className="relative flex-1 bg-black/40 overflow-auto flex items-center justify-center p-3 sm:p-6 min-h-[300px]">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-h-[60vh] w-auto max-w-full rounded-lg shadow-lg object-contain border border-border/40"
            />

            {/* Navigation arrows overlay */}
            <button
              onClick={onPrev}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-surface/90 text-foreground border border-border hover:bg-accent hover:text-black transition-all shadow-lg backdrop-blur-sm"
              aria-label="Previous certificate"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={onNext}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-surface/90 text-foreground border border-border hover:bg-accent hover:text-black transition-all shadow-lg backdrop-blur-sm"
              aria-label="Next certificate"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Bottom Info Bar */}
          <div className="px-5 py-3 border-t border-border bg-surface flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-muted font-mono">
              <Calendar size={13} />
              <span>Issued: {certificate.dates}</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {certificate.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2 py-0.5 rounded bg-elevated text-muted border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

