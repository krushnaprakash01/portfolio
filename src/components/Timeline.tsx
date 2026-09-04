import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, GraduationCap, Eye, ExternalLink, Sparkles, Layers } from 'lucide-react'
import { education, certifications, type CertificateItem } from '../data/experience'
import CertificateModal from './CertificateModal'

type FilterTab = 'all' | 'education' | 'certificates'

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all')
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null)

  const openCertModal = (index: number) => {
    setSelectedCertIndex(index)
  }

  const closeCertModal = () => {
    setSelectedCertIndex(null)
  }

  const handlePrevCert = () => {
    if (selectedCertIndex === null) return
    setSelectedCertIndex((prev) =>
      prev === null ? null : (prev - 1 + certifications.length) % certifications.length
    )
  }

  const handleNextCert = () => {
    if (selectedCertIndex === null) return
    setSelectedCertIndex((prev) =>
      prev === null ? null : (prev + 1) % certifications.length
    )
  }

  const selectedCert =
    selectedCertIndex !== null ? certifications[selectedCertIndex] : null

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-sm text-muted flex items-center gap-4"
          >
            <span className="text-accent">04.</span> Education &amp; Certifications
            <span className="h-px w-16 sm:w-24 bg-border" />
          </motion.h2>

          {/* Controls: Filter Tabs + Open Gallery Button */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center bg-surface border border-border rounded-full p-1 text-xs font-mono">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  activeTab === 'all'
                    ? 'bg-accent text-black font-semibold shadow-sm'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                <Layers size={13} />
                All
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  activeTab === 'education'
                    ? 'bg-accent text-black font-semibold shadow-sm'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                <GraduationCap size={13} />
                Education
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  activeTab === 'certificates'
                    ? 'bg-accent text-black font-semibold shadow-sm'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                <Award size={13} />
                Certificates ({certifications.length})
              </button>
            </div>

            <button
              onClick={() => openCertModal(0)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono rounded-full border border-accent/40 bg-accent/10 text-accent hover:bg-accent hover:text-black transition-all shadow-sm"
              title="Click to view all certificate credentials"
            >
              <Eye size={13} />
              <span>View Gallery ({certifications.length})</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            TAB 1 & 2: TIMELINE VIEW (Education & Mixed Timeline)
            ======================================================== */}
        {activeTab !== 'certificates' && (
          <div className="space-y-16">
            {/* Education Block */}
            <div>
              <div className="flex items-center gap-2 mb-8 text-xs font-mono text-muted uppercase tracking-wider">
                <GraduationCap size={15} className="text-accent" />
                <span>Academic Degree</span>
              </div>

              <div className="space-y-6">
                {education.map((item, i) => (
                  <motion.div
                    key={`edu-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-6 sm:p-8 rounded-2xl bg-surface border border-border hover:border-border-hover transition-all relative overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="p-2 rounded-lg bg-accent/10 text-accent">
                            <GraduationCap size={20} />
                          </span>
                          <div>
                            <h3 className="text-lg sm:text-xl font-medium text-foreground">
                              {item.role}
                            </h3>
                            <p className="text-accent font-mono text-sm mt-0.5">
                              @ {item.org}
                            </p>
                          </div>
                        </div>

                        <p className="text-muted text-sm mt-4 leading-relaxed max-w-3xl">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5">
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

                      <div className="font-mono text-xs text-muted px-3 py-1.5 rounded-full bg-elevated border border-border self-start whitespace-nowrap">
                        {item.dates}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Timeline Block (when in 'all' view) */}
            {activeTab === 'all' && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted uppercase tracking-wider">
                    <Award size={15} className="text-accent" />
                    <span>Verified Professional Certifications ({certifications.length})</span>
                  </div>

                  <button
                    onClick={() => setActiveTab('certificates')}
                    className="text-xs font-mono text-accent hover:underline flex items-center gap-1"
                  >
                    Switch to Gallery View &rarr;
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                      onClick={() => openCertModal(i)}
                      className="cursor-pointer group relative p-5 rounded-xl bg-surface border border-border hover:border-accent/60 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                            {cert.badge}
                          </span>
                          <span className="font-mono text-xs text-muted whitespace-nowrap">
                            {cert.dates}
                          </span>
                        </div>

                        <h4 className="text-base font-medium text-foreground group-hover:text-accent transition-colors flex items-center justify-between gap-2">
                          <span>{cert.title}</span>
                          <Eye size={15} className="text-muted group-hover:text-accent transition-colors flex-shrink-0" />
                        </h4>

                        <p className="text-xs font-mono text-muted mt-1">
                          {cert.issuer}
                        </p>

                        <p className="text-xs text-muted mt-3 line-clamp-2 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {cert.tech.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[10px] px-2 py-0.5 rounded bg-elevated text-muted border border-border"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <span className="text-xs font-mono text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          View Certificate
                          <ExternalLink size={12} />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================
            TAB 3: CERTIFICATES GALLERY VIEW (Cards with live thumbnails)
            ======================================================== */}
        {activeTab === 'certificates' && (
          <div>
            <div className="mb-8 flex items-center justify-between">
              <p className="text-sm text-muted">
                Showing all <span className="text-foreground font-medium">10 verified certificates</span>. Click any card to inspect the high-resolution certificate.
              </p>
              <span className="font-mono text-xs text-accent">
                {certifications.length} Credentials
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  onClick={() => openCertModal(index)}
                  className="cursor-pointer group relative bg-surface border border-border hover:border-accent rounded-2xl overflow-hidden shadow-lg transition-all flex flex-col"
                >
                  {/* Certificate Image Thumbnail Preview */}
                  <div className="relative h-48 sm:h-52 bg-elevated/80 overflow-hidden flex items-center justify-center p-3 border-b border-border">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-cover object-top rounded-lg group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />

                    {/* Dark gradient overlay on hover with eye button */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="px-4 py-2 rounded-full bg-accent text-black font-mono text-xs font-semibold flex items-center gap-1.5 shadow-xl">
                        <Eye size={14} />
                        Inspect Certificate
                      </span>
                    </div>

                    {/* Badge on top */}
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-black/75 text-accent border border-accent/30 backdrop-blur-md">
                        {cert.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-muted mb-2">
                        <span>{cert.dates}</span>
                        <span className="text-accent">#{index + 1}</span>
                      </div>

                      <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors">
                        {cert.title}
                      </h3>

                      <p className="text-xs font-mono text-muted mt-1">
                        {cert.issuer}
                      </p>

                      <p className="text-xs text-muted mt-3 line-clamp-2 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border flex flex-wrap gap-1.5">
                      {cert.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-elevated text-muted border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={closeCertModal}
        onPrev={handlePrevCert}
        onNext={handleNextCert}
        currentIndex={selectedCertIndex ?? 0}
        totalCount={certifications.length}
      />
    </section>
  )
}
