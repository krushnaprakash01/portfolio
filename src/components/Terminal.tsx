import { motion } from 'framer-motion'

const terminalLines = [
  { prefix: '~', command: 'whoami' },
  { prefix: '', command: 'krushna-bhende — cse-student & developer' },
  { prefix: '~', command: 'cat skills.txt' },
  { prefix: '', command: 'react · node · python · typescript · ml' },
  { prefix: '~', command: 'git log --oneline -3' },
  { prefix: '', command: 'a1b2c3d feat: add framer-motion animations' },
  { prefix: '', command: '4e5f6g7 fix: optimize lighthouse score to 96' },
  { prefix: '', command: '8h9i0j1 init: portfolio v2.0' },
]

export default function Terminal() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
        {/* macOS-style title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-elevated/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-xs font-mono text-muted ml-2">~/portfolio</span>
        </div>

        {/* Terminal content */}
        <div className="p-5 font-mono text-sm leading-relaxed space-y-0.5">
          {terminalLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.3 }}
              className={line.prefix ? 'text-foreground' : 'text-muted pl-4'}
            >
              {line.prefix && (
                <span className="text-accent">{line.prefix} $ </span>
              )}
              {line.command}
            </motion.div>
          ))}

          {/* Blinking cursor line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex items-center text-foreground mt-2"
          >
            <span className="text-accent">~ $ </span>
            <span className="w-2.5 h-[18px] bg-accent animate-blink ml-1 rounded-[1px]" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

