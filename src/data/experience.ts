export interface ExperienceItem {
  role: string
  org: string
  dates: string
  description: string
  tech: string[]
  type: 'work' | 'education' | 'achievement'
}

/*
 * ============================================
 * EDIT YOUR EXPERIENCE HERE
 * ============================================
 * Add internships, education, hackathon wins, etc.
 * type: 'work' | 'education' | 'achievement'
 */
export const experience: ExperienceItem[] = [

  {
    role: 'learner',
    org: 'eduskills',
    dates: 'Aug-2026',
    description:
      'through this virtual internship upskilling myself',
    tech: [ 'Python'],
    type: 'work',
  },
  {
    role: 'BE in Computer Science & Engineering',
    org: 'Mauli Group of Institutions College of Engineering and Technology ',
    dates: '2024 — 2028',
    description:
      'Third year student with focus on full-stack development and machine learning. Active in coding competitions and technical clubs.',
    tech: ['DSA', 'DBMS', 'OS', 'Networks', 'ML'],
    type: 'education',
  },
 
]

