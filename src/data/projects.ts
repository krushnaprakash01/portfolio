export interface Project {
  id: number
  title: string
  description: string
  detail: string
  tech: string[]
  github: string
  demo: string
  metric?: string
  featured?: boolean
}

/*
 * ============================================
 * EDIT YOUR PROJECTS HERE
 * ============================================
 * Each project needs: title, description, detail (what you learned),
 * tech stack array, GitHub link, and live demo link.
 * Mark your best project with featured: true — it gets a larger card.
 */
export const projects: Project[] = [
  {
    id: 1,
    title: 'Real-time Chat Platform',
    description:
      'A fully functional chat application with multiple rooms, typing indicators, emoji reactions, and simulated real-time messaging — all running client-side.',
    detail:
      'Learned how to architect state management for real-time apps, handle cross-tab sync via localStorage events, and build responsive mobile-first chat UIs.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'localStorage'],
    github: 'https://github.com/yourusername/chat-app',
    demo: 'https://chat-app-woad-eight-14.vercel.app',
    metric: '3 chat rooms · live typing indicators',
    featured: true,
  },
  {
    id: 2,
    title: 'Expense Tracker Dashboard',
    description:
      'Full-featured finance dashboard with income/expense tracking, category breakdowns with CSS progress bars, budget alerts, month filters, and CSV export.',
    detail:
      'First project where I built a complete CRUD app with data persistence, learned to handle financial calculations precisely, and implemented CSV export from scratch.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Chart.js'],
    github: 'https://github.com/yourusername/expense-tracker',
    demo: 'https://expense-tracker-pi-eight-18.vercel.app',
    metric: 'Budget alerts · CSV export',
  },
  {
    id: 3,
    title: 'Developer Portfolio',
    description:
      'The site you\'re looking at — a React + Vite SPA with Framer Motion animations, dark mode toggle, and a luxury terminal aesthetic.',
    detail:
      'Practiced component architecture, CSS custom properties for theming, performance optimization (Lighthouse 95+), and deploying to Vercel.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://portfolio-nine-topaz-37.vercel.app',
  },
]
