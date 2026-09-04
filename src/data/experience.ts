export interface ExperienceItem {
  role: string
  org: string
  dates: string
  description: string
  tech: string[]
  type: 'education' | 'certification'
  certificateImage?: string
}

export interface CertificateItem {
  id: number
  title: string
  issuer: string
  dates: string
  description: string
  tech: string[]
  image: string
  badge: string
}

export const education: ExperienceItem[] = [
  {
    role: 'Student Of BE in Computer Science & Engineering',
    org: 'Mauli Group of Institutions College of Engineering and Technology, Shegaon',
    dates: '2024 — 2028',
    description:
      'Pursuing Bachelor of Engineering with focus on full-stack development, artificial intelligence, and software engineering principles. Active in technical forums and hands-on project building.',
    tech: ['DSA', 'DBMS', 'OS', 'Computer Networks', 'Machine Learning'],
    type: 'education',
  },
]

export const certifications: CertificateItem[] = [
  {
    id: 1,
    title: 'AI-ML Virtual Internship (10 Weeks)',
    issuer: 'Google for Developers & EduSkills / AICTE',
    dates: 'July — Sept 2025',
    description:
      'Completed 10-week intensive virtual internship covering machine learning pipelines, deep learning foundations, and AI applications under Google for Developers India Edu Program.',
    tech: ['Machine Learning', 'Python', 'AI', 'TensorFlow', 'Data Science'],
    image: '/certificates/cert-5.jpeg',
    badge: 'Google for Developers',
  },
  {
    id: 2,
    title: 'Android Developer Virtual Internship (10 Weeks)',
    issuer: 'Google for Developers & EduSkills / AICTE',
    dates: 'Oct — Dec 2025',
    description:
      'Hands-on mobile application development internship with Kotlin, Android SDK, Jetpack components, and responsive mobile UI architecture.',
    tech: ['Android', 'Kotlin', 'Mobile Dev', 'Jetpack', 'App Design'],
    image: '/certificates/cert-6.jpeg',
    badge: 'Google for Developers',
  },
  {
    id: 3,
    title: 'IoT Cloud Engineer Virtual Internship (10 Weeks)',
    issuer: 'AWS Skill Builder & EduSkills / AICTE',
    dates: 'Jan — March 2026',
    description:
      'Curriculum provided by AWS Skill Builder. Covered Internet of Things architectures, AWS cloud integrations, device protocols, and serverless compute.',
    tech: ['AWS', 'Cloud', 'IoT', 'Serverless', 'Cloud Architecture'],
    image: '/certificates/cert-3.jpeg',
    badge: 'AWS',
  },
  {
    id: 4,
    title: 'Cyber Job Simulation',
    issuer: 'Deloitte / Forage',
    dates: 'December 2025',
    description:
      'Practical cybersecurity job simulation covering enterprise threat landscape analysis, security assessments, and cyber incident mitigation strategies.',
    tech: ['Cybersecurity', 'Threat Analysis', 'Network Security', 'Auditing'],
    image: '/certificates/cert-4.jpeg',
    badge: 'Deloitte',
  },
  {
    id: 5,
    title: 'Google Play Store Listing Certificate',
    issuer: 'Google Play Academy',
    dates: 'November 2025',
    description:
      'Certified by Google Play Academy on store listing optimization, app discoverability, Play Console publishing standards, and policy compliance.',
    tech: ['Google Play', 'ASO', 'Mobile Publishing', 'App Optimization'],
    image: '/certificates/cert-2.jpeg',
    badge: 'Google Play',
  },
  {
    id: 6,
    title: 'Introduction to Data Science',
    issuer: 'Infosys Springboard',
    dates: 'August 2026',
    description:
      'Comprehensive study of data exploratory analysis, statistical modeling, data visualization, and predictive algorithms.',
    tech: ['Data Science', 'Python', 'Statistics', 'Data Analytics'],
    image: '/certificates/cert-8.jpeg',
    badge: 'Infosys',
  },
  {
    id: 7,
    title: 'Python Full Stack Certificate of Completion',
    issuer: 'EduSkills Academy',
    dates: 'May 2025',
    description:
      'Full-stack software engineering certification focused on Python backend frameworks, database persistence, RESTful APIs, and frontend integration.',
    tech: ['Python', 'Full Stack', 'REST APIs', 'Databases', 'Web Dev'],
    image: '/certificates/cert-7.jpeg',
    badge: 'EduSkills',
  },
  {
    id: 8,
    title: 'Java Full Stack Certificate of Completion',
    issuer: 'EduSkills Academy',
    dates: 'March 2025',
    description:
      'Comprehensive Java enterprise application development, OOP architecture, relational data management, and full-stack web solutions.',
    tech: ['Java', 'OOP', 'Spring Boot', 'SQL', 'Web Architecture'],
    image: '/certificates/cert-9.jpeg',
    badge: 'EduSkills',
  },
  {
    id: 9,
    title: 'Digital Marketing Virtual Internship (8 Weeks)',
    issuer: 'EduSkills & AICTE Ministry of Education',
    dates: 'June — August 2026',
    description:
      '8-week certified virtual internship in digital presence, SEO analytics, marketing funnels, and data-driven growth strategies.',
    tech: ['SEO', 'Digital Analytics', 'Content Strategy', 'Growth Marketing'],
    image: '/certificates/cert-1.jpeg',
    badge: 'AICTE / EduSkills',
  },
  {
    id: 10,
    title: 'Student Member Admission',
    issuer: 'The Indian Society for Technical Education (ISTE)',
    dates: '2025 — 2028',
    description:
      'Official student membership in ISTE (Founded 1968), engaging in technical symposiums, research forums, and national engineering networks.',
    tech: ['Technical Leadership', 'Engineering Forum', 'Symposiums', 'Networking'],
    image: '/certificates/cert-10.jpeg',
    badge: 'ISTE',
  },
]

// Combined timeline view sorted for display
export const experience: ExperienceItem[] = [
  ...education,
  ...certifications.map((c) => ({
    role: c.title,
    org: c.issuer,
    dates: c.dates,
    description: c.description,
    tech: c.tech,
    type: 'certification' as const,
    certificateImage: c.image,
  })),
]
