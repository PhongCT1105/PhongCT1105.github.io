const CONFIG = {
  github: {
    username: 'PhongCT1105', // Your GitHub org/user name.
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'GitHub Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // Projects to exclude
        },
      },
      manual: {
        projects: [], // Specify projects manually if needed
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'SyntheSearch',
          description:
            'An AI-powered research synthesis tool that helps users find relevant research papers and generate insights.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/PhongCT1105/SyntheSearch',
        },
        {
          title: 'Urban Traffic Monitoring System',
          description:
            'An AI-driven solution for real-time vehicle detection and classification for urban traffic management.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/PhongCT1105/TrafficMonitoring',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Phong Cao',
    description: 'Explore the portfolio and projects of Phong Cao.',
    imageURL: '',
  },
  social: {
    linkedin: 'phong-cao',
    twitter: '',
    facebook: '',
    instagram: '',
    github: 'PhongCT1105',
    website: 'https://www.linkedin.com/in/phong-cao',
    email: 'ptcao@wpi.edu',
    phone: '(774) 701-3932',
  },
  resume: {
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Replace with your actual resume link
  },
  skills: [
    'Python',
    'C/C++',
    'TypeScript',
    'JavaScript',
    'Java',
    'SQL',
    'PyTorch',
    'TensorFlow',
    'Scikit-learn',
    'Keras',
    'LangChain',
    'Azure AI Vision',
    'Blob Storage',
    'PostgreSQL',
    'MySQL',
    'React.js',
    'Node.js',
    'Prisma ORM',
    'Express',
    'Tailwind CSS',
    'Flask',
    'Linux',
    'Jira',
  ],
  experiences: [
    {
      company: 'FPT Software, Vietnam',
      position: 'Machine Learning Intern (MLOps)',
      from: 'June 2024',
      to: 'August 2024',
      companyLink: '',
    },
    {
      company: 'FPT Software, Vietnam',
      position: 'Data Science Intern',
      from: 'July 2023',
      to: 'August 2023',
      companyLink: '',
    },
    {
      company: 'Vietnam National University',
      position: 'Artificial Intelligence Summer Intern',
      from: 'June 2022',
      to: 'August 2022',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Microsoft Certified Azure AI Engineer Associate (In-progress)',
      body: 'Specialization in Azure AI Solutions',
      year: '2024',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Worcester Polytechnic Institute, MA',
      degree: 'M.S. in Artificial Intelligence, B.S. in Computer Science',
      from: '2022',
      to: 'Expected 2026',
    },
  ],
  publications: [],
  blog: {
    source: '', // No blog at the moment
    username: '', // No blog username
    limit: 0,
  },
  googleAnalytics: {
    id: '', // Add if needed
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'nord',
    ],
  },
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
