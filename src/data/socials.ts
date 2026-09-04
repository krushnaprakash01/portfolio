export interface Social {
  platform: string
  url: string
  icon: string // lucide-react icon name — must match import in components
}

/*
 * ============================================
 * EDIT YOUR SOCIAL LINKS HERE
 * ============================================
 * icon values must match the lucide-react icon names used in
 * the iconMap inside Hero.tsx and Contact.tsx
 */
export const socials: Social[] = [
  { platform: 'GitHub', url: 'https://github.com/krushnaprakash01', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/krushnaprakash-bhende-b3748732b?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: 'Linkedin' },
  { platform: 'LeetCode', url: 'https://leetcode.com/u/krushnaprakash/', icon: 'Code2' },
  { platform: 'Twitter', url: 'https://x.com/krishtox', icon: 'Twitter' },
  { platform: 'Email', url: 'mailto:krushnaprakashbhende@gmail.com', icon: 'Mail' },
]

/*
 * ============================================
 * EDIT YOUR RESUME LINK HERE
 * ============================================
 * Place resume.pdf in the /public folder, or use an external URL.
 */
export const resumeUrl = '/resume.pdf'

