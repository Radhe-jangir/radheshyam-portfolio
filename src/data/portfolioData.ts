import { WhyMeItem, CurrentFocusItem, RecruiterEvaluationRole } from '../types';

export * from './personal';
export * from './projects';
export * from './skills';
export * from './experience';
export * from './certifications';
export * from './achievements';

export const WHY_ME_ITEMS: WhyMeItem[] = [
  {
    id: 'analytical-thinking',
    number: '01',
    title: 'Analytical Thinking',
    description:
      'Dissecting complex problems and datasets into structured, measurable components.',
    detail:
      'Formulating clear statistical hypotheses and validating data distributions before building models.',
    iconName: 'Target',
  },
  {
    id: 'building-mindset',
    number: '02',
    title: 'Building Mindset',
    description:
      'Learning by building practical systems, experimenting with models, and shipping working applications.',
    detail:
      'Pairing machine learning logic with clean APIs, validation pipelines, and accessible interfaces.',
    iconName: 'Hammer',
  },
  {
    id: 'continuous-learning',
    number: '03',
    title: 'Continuous Learning',
    description:
      'Actively exploring emerging AI technologies, LLMs, machine learning architectures, and data systems.',
    detail:
      'Refining engineering intuition through real-world experimentation and rigorous benchmarking.',
    iconName: 'Compass',
  },
];

export const CURRENT_FOCUS_TOPICS: CurrentFocusItem[] = [
  {
    id: 'cf-1',
    title: 'Machine Learning Pipelines & Evaluation',
    category: 'Applied ML',
    description:
      'Benchmarking regularized regression against ensemble trees (Random Forest, CART) with rigorous cross-validation.',
    tags: ['Scikit-learn', 'Cross-Validation', 'Hyperparameter Tuning', 'Residual Metrics'],
    status: 'Core Focus',
  },
  {
    id: 'cf-2',
    title: 'Generative AI & LLM Systems',
    category: 'Generative AI',
    description:
      'Building agentic workflows, structured output extractors, and domain-grounded prompt pipelines with safety guardrails.',
    tags: ['Prompt Engineering', 'Safety Guardrails', 'Structured Outputs', 'LLMs'],
    status: 'Core Focus',
  },
  {
    id: 'cf-3',
    title: 'Python Backend & Microservices',
    category: 'Backend',
    description:
      'Architecting low-latency asynchronous FastAPI and Flask endpoints capable of serving model inference at scale.',
    tags: ['FastAPI', 'Flask', 'REST APIs', 'SQLAlchemy'],
    status: 'Core Focus',
  },
];

export const RECRUITER_ROLES: RecruiterEvaluationRole[] = [
  {
    id: 'aiml-engineer',
    title: 'AI / Machine Learning Engineer Intern',
    fitScore: 98,
    keyStrengths: [
      'Scikit-learn & Python ML pipelines',
      'Multi-model benchmarking (Ridge, CART, Random Forest)',
      'Prompt engineering & LLM Security (CLLMSP certified)',
      'FastAPI / Flask model inference microservices',
    ],
    recommendedProjects: ['sentiforge', 'house-price-prediction', 'predictra-ai'],
    matchedSkills: ['Python', 'Scikit-learn', 'FastAPI', 'Generative AI', 'Model Evaluation'],
    readinessSummary:
      'Hands-on competency in writing clean Python ML scripts, benchmarking regression & classification algorithms, and wrapping models in production REST APIs.',
  },
];
