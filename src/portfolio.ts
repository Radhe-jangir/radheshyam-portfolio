import type React from 'react';

export interface SoftwareSkill {
  skillName: string;
  fontAwesomeClassname?: string;
  style?: React.CSSProperties;
}

export interface SkillDomain {
  title: string;
  fileName: string;
  skills: string[];
  softwareSkills: SoftwareSkill[];
}

export interface Degree {
  title: string;
  subtitle: string;
  logo_path?: string;
  alt_name: string;
  duration: string;
  descriptions: string[];
  website_link?: string;
  grade?: string;
}

export interface Certification {
  title: string;
  subtitle: string;
  logo_path?: string;
  certificate_link?: string;
  alt_name: string;
  color_code: string;
  date?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  company_url?: string;
  logo_path?: string;
  duration: string;
  location: string;
  description: string;
  responsibilities?: string[];
  color: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  languages: {
    name: string;
    color: string;
  }[];
  githubUrl: string;
  liveDemoUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

// Portfolio Configuration & Data
export const settings = {
  isSplash: false,
  useCustomCursor: false,
  googleTrackingId: '',
};

export const greeting = {
  title: 'Radheshyam Suthar',
  logo_name: '< Radheshyam Suthar />',
  nickname: 'Radhey',
  subTitle:
    'AI/ML Engineer | Python Developer | Data Analyst',
  roleAlternative:
    'AI/ML & Full-Stack Developer',
  summary:
    'I am a BCA Computer Science student at IGNTU with hands-on experience building AI/ML applications, REST APIs, and data-driven systems. My work spans NLP, supervised machine learning, Generative AI, LLM integration, sustainability analytics, full-stack dashboards, and data analytics. My technical experience includes Python, FastAPI, Scikit-learn, Pandas, React, Flask and LLM-based workflows.',
  resumeLink: '#contact',
  resumeDownloadUrl: '#',
  portfolio_repository: 'https://github.com/Radhe-jangir/radheshyam-portfolio',
  githubProfile: 'https://github.com/Radhe-jangir',
};

export const socialMediaLinks = {
  github: 'https://github.com/Radhe-jangir',
  linkedin: 'https://linkedin.com/in/radheshyamsuthar',
  gmail: 'jangirradhe175@gmail.com',
};

export const skills = {
  data: [
    {
      title: 'Data Science & AI/ML',
      fileName: 'DataScienceImg',
      skills: [
        '⚡ Developing supervised machine-learning regression and classification pipelines using Scikit-learn',
        '⚡ Engineering NLP solutions, multi-label text sentiment analysis and automated reporting',
        '⚡ Designing Generative AI workflows, prompt engineering, and LLM application integrations',
        '⚡ Conducting exploratory data analysis (EDA), data cleaning, statistical modeling, and forecasting with Pandas and NumPy',
      ],
      softwareSkills: [
        { skillName: 'Python' },
        { skillName: 'Scikit-learn' },
        { skillName: 'Pandas' },
        { skillName: 'NumPy' },
        { skillName: 'Matplotlib' },
        { skillName: 'FastAPI' },
        { skillName: 'Flask' },
        { skillName: 'OpenRouter' },
      ],
    },
    {
      title: 'Full Stack & Web Development',
      fileName: 'FullStackImg',
      skills: [
        '⚡ Building high-performance, asynchronous REST APIs with FastAPI and Flask',
        '⚡ Developing responsive, accessible, interactive web applications with React, TypeScript and modern CSS',
        '⚡ Architecting database models, migrations and persistent schemas with SQLite, MySQL and SQLAlchemy',
        '⚡ Integrating external APIs, managing secure server environments and deploying to modern cloud platforms',
      ],
      softwareSkills: [
        { skillName: 'React' },
        { skillName: 'TypeScript' },
        { skillName: 'JavaScript' },
        { skillName: 'Tailwind CSS' },
        { skillName: 'Vite' },
        { skillName: 'Node.js' },
        { skillName: 'SQLite' },
        { skillName: 'Git & GitHub' },
      ],
    },
  ],
};

export const groupedSkills: SkillCategory[] = [
  {
    category: 'Programming',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C++', 'HTML', 'CSS'],
  },
  {
    category: 'Data & Analytics',
    skills: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Data Visualization',
      'Exploratory Data Analysis',
      'Forecasting',
    ],
  },
  {
    category: 'Machine Learning',
    skills: [
      'Scikit-learn',
      'Regression',
      'Classification',
      'Model Evaluation',
      'Hyperparameter Tuning',
      'NLP',
      'Sentiment Analysis',
    ],
  },
  {
    category: 'AI / GenAI',
    skills: [
      'Generative AI',
      'LLM Integration',
      'Prompt Engineering',
      'OpenRouter',
      'Groq API',
      'MCP',
      'LLM Architecture',
    ],
  },
  {
    category: 'Web Development',
    skills: [
      'React.js',
      'Flask',
      'FastAPI',
      'Node.js',
      'REST APIs',
      'Backend Development',
      'API Integration',
    ],
  },
  {
    category: 'Databases',
    skills: ['SQLite', 'MySQL', 'SQLAlchemy'],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Playwright',
      'Vercel',
      'Render',
      'Docker',
    ],
  },
];

export const degrees = {
  degrees: [
    {
      title: 'Bachelor of Computer Applications (BCA), Computer Science',
      subtitle: 'Indira Gandhi National Tribal University (IGNTU), Amarkantak',
      alt_name: 'IGNTU',
      duration: 'September 2024 – May 2027 Expected',
      grade: 'Third Year / 5th Semester',
      descriptions: [
        '⚡ Focused study on Artificial Intelligence, Machine Learning, Data Analytics, and Software Engineering.',
        '⚡ Hands-on coursework in Data Structures, Database Management Systems (DBMS), Operating Systems, and Object-Oriented Programming.',
        '⚡ Developing end-to-end applications and applied AI pipelines for academic and social-impact initiatives.',
      ],
      website_link: 'https://igntu.ac.in/',
    },
    {
      title: 'Secondary & Senior Secondary Education',
      subtitle: 'Jawahar Navodaya Vidyalaya',
      alt_name: 'JNV',
      duration: 'April 2019 – May 2023',
      descriptions: [
        '⚡ Completed formal schooling with core foundational coursework in Science, Mathematics, and Computer Science.',
        '⚡ Developed strong analytical reasoning and early computational problem-solving skills.',
      ],
    },
  ],
};

export const certifications = {
  certifications: [
    {
      title: 'Certified LLM Security Professional (CLLMSP)',
      subtitle: 'LLM Security Institute',
      certificate_link: 'https://llmsecurity.org/verify',
      alt_name: 'CLLMSP',
      color_code: '#3b82f6',
      date: '2025',
    },
    {
      title: 'Google Prompting Essentials',
      subtitle: 'Google',
      certificate_link: 'https://grow.google/certificates',
      alt_name: 'Google',
      color_code: '#4285f4',
      date: '2025',
    },
    {
      title: 'Google AI Essentials',
      subtitle: 'Google',
      certificate_link: 'https://grow.google/certificates',
      alt_name: 'Google',
      color_code: '#34a853',
      date: '2025',
    },
    {
      title: 'Microsoft AI Skills Passport',
      subtitle: 'Microsoft',
      certificate_link: 'https://learn.microsoft.com/credentials',
      alt_name: 'Microsoft',
      color_code: '#00a4ef',
      date: '2025',
    },
    {
      title: 'Microsoft Azure Essentials',
      subtitle: 'Microsoft',
      certificate_link: 'https://learn.microsoft.com/credentials',
      alt_name: 'Microsoft',
      color_code: '#0078d4',
      date: '2025',
    },
    {
      title: 'Prompt Design in Vertex AI Skill Badge — Google AI Skills Fest 2026',
      subtitle: 'Google Cloud',
      certificate_link: 'https://cloud.google.com/training',
      alt_name: 'Google Cloud',
      color_code: '#ea4335',
      date: '2026',
    },
    {
      title: 'EY Technology Program',
      subtitle: 'Ernst & Young',
      certificate_link: '',
      alt_name: 'EY',
      color_code: '#ffe600',
      date: '2024',
    },
    {
      title: 'Deloitte Australia — Cyber Job Simulation',
      subtitle: 'Deloitte',
      certificate_link: '',
      alt_name: 'Deloitte',
      color_code: '#86bc25',
      date: '2024',
    },
  ],
};

export const experiences = {
  sections: [
    {
      title: 'Work Experience & Internships',
      experiences: [
        {
          title: 'Co-Founder & Technical Lead',
          company: 'ElevateX Digital',
          company_url: '',
          duration: '2026 – Present',
          location: 'Remote',
          description:
            'Co-founded a digital services startup focused on web development, automation, and AI-driven digital solutions.',
          responsibilities: [
            'Lead technical strategy and product development, including website development, technology selection and delivery of digital initiatives.',
            'Collaborate on client specifications, system architectures, and end-to-end delivery of custom full-stack solutions.',
            'Ensure software quality, deployment automation, and maintainable software practices.',
          ],
          color: '#1e293b',
        },
        {
          title: 'Student Intern — Green Skills & Applied AI',
          company: '1M1B (1 Million for 1 Billion)',
          company_url: 'https://1m1b.org/',
          duration: 'June 2026 – Present',
          location: 'Remote',
          description:
            'Designed Python-based AI solutions for real-world sustainability challenges under a structured applied AI internship program.',
          responsibilities: [
            'Applied AI/ML techniques collaboratively to environmental and social-impact use cases.',
            'Modeled sustainability metrics, processed ecological datasets, and developed predictive analytical prototypes.',
            'Engaged in mentorship and collaborative project reviews focused on green tech deployment.',
          ],
          color: '#10b981',
        },
        {
          title: 'Python Development Intern',
          company: 'QSkill',
          company_url: '',
          duration: 'June 2026 – July 2026',
          location: 'Remote',
          description:
            'Built a supervised machine-learning regression pipeline for house-price prediction using Ridge, Decision Tree, and Random Forest evaluated with MAE, MSE, RMSE, and R².',
          responsibilities: [
            'Conducted extensive exploratory data analysis, data cleansing, feature scaling, and categorical encoding.',
            'Developed a full-stack sentiment analysis dashboard and an interactive data analytics dashboard.',
            'Completed a 31-day internship and received an official Letter of Recommendation.',
          ],
          color: '#3b82f6',
        },
      ],
    },
  ],
};

export const projects = {
  data: [
    {
      id: 'predictra-ai',
      name: 'Predictra AI',
      description:
        'AI-powered business analytics and machine-learning platform supporting CSV/Excel data profiling, automated cleaning, interactive visualization, ML model training, forecasting and AI-generated insights.',
      languages: [
        { name: 'React', color: '#61dafb' },
        { name: 'TypeScript', color: '#3178c6' },
        { name: 'FastAPI', color: '#009688' },
        { name: 'Python', color: '#3572A5' },
        { name: 'Pandas', color: '#150458' },
        { name: 'Scikit-learn', color: '#f7931e' },
        { name: 'SQLAlchemy', color: '#d71f00' },
        { name: 'OpenRouter', color: '#6366f1' },
      ],
      githubUrl: 'https://github.com/radheshyamsuthar/predictra-ai',
      liveDemoUrl: 'https://predictra-ai.example.com',
    },
    {
      id: 'sentiforge',
      name: 'SentiForge',
      description:
        'Full-stack NLP platform for multi-label sentiment classification, trend analysis and automated PDF report generation.',
      languages: [
        { name: 'Python', color: '#3572A5' },
        { name: 'Flask', color: '#000000' },
        { name: 'TextBlob', color: '#38bdf8' },
        { name: 'Pandas', color: '#150458' },
        { name: 'Matplotlib', color: '#11557c' },
      ],
      githubUrl: 'https://github.com/radheshyamsuthar/sentiforge',
      liveDemoUrl: 'https://sentiforge-demo.example.com',
    },
    {
      id: 'ecotwin-intelligence',
      name: 'EcoTwin Intelligence',
      description:
        'Full-stack carbon-footprint tracking platform with AI-generated environmental impact analysis and data visualization.',
      languages: [
        { name: 'React 19', color: '#61dafb' },
        { name: 'TypeScript', color: '#3178c6' },
        { name: 'Express', color: '#444444' },
        { name: 'Google Generative AI', color: '#4285f4' },
      ],
      githubUrl: 'https://github.com/radheshyamsuthar/ecotwin-intelligence',
      liveDemoUrl: 'https://ecotwin-demo.example.com',
    },
    {
      id: 'ai-resume-screening-system',
      name: 'AI Resume Screening System',
      description:
        'Flask-based recruitment platform performing resume parsing, NLP-based candidate ranking and automated screening.',
      languages: [
        { name: 'Python', color: '#3572A5' },
        { name: 'Flask', color: '#000000' },
        { name: 'Scikit-learn', color: '#f7931e' },
        { name: 'NLP', color: '#8b5cf6' },
      ],
      githubUrl: 'https://github.com/radheshyamsuthar/resume-screening-system',
      liveDemoUrl: '',
    },
  ],
};

export const contactConfig = {
  title: 'Reach Out to me!',
  subtitle:
    'Discuss a project or just want to say hi? My inbox is open for all.',
  ctaHeading: "Let's build something useful.",
  ctaSubtext:
    "I'm open to internships, opportunities, collaborations and interesting projects.",
  location: 'Amarkantak, Madhya Pradesh, India',
  email: 'jangirradhe175@gmail.com',
  github: 'https://github.com/Radhe-jangir',
  linkedin: 'https://linkedin.com/in/radheshyamsuthar',
};
