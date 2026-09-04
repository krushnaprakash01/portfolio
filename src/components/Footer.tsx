export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} Krushna Bhende. Built with React +
          Vite.
        </p>
        <a
          href="https://github.com/yourusername/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted hover:text-accent transition-colors inline-flex items-center gap-1"
        >
          View Source ↗
        </a>
      </div>
    </footer>
  )
}

