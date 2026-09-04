import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        surface: 'hsl(var(--surface))',
        elevated: 'hsl(var(--elevated))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
        accent: 'hsl(var(--accent))',
        border: 'hsl(var(--border))',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'Consolas', 'monospace'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config

