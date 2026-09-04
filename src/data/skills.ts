export interface SkillCategory {
  category: string
  items: string[]
}

/*
 * ============================================
 * EDIT YOUR SKILLS HERE
 * ============================================
 * Group skills by category. Each category becomes a glass card.
 * No progress bars, no percentages — just clean lists.
 */
export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'C/C++', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js',  'FastAPI', 'PostgreSQL', 'MongoDB',],
  },
  {
    category: 'Tools',
    items: ['Git', 'Figma', 'VS Code', 'Postman', 'Jupyter'],
  },
]

