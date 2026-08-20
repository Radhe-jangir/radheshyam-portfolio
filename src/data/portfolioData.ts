import {
  Project,
  TechCategory,
  ExperienceItem,
  CertificationItem,
  WhyMeItem,
  AchievementItem,
  CurrentFocusItem,
  RecruiterEvaluationRole,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Radheshyam Suthar',
  initials: 'RS',
  headline: 'AI/ML & Data Analytics Developer',
  badge: 'AI/ML • DATA ANALYTICS • PYTHON • 3D SPATIAL SYSTEMS',
  heroHeading: 'Turning Data Into Intelligence.',
  heroDescription:
    "Hi, I'm Radheshyam Suthar — an AI/ML and Data Analytics developer building practical machine learning systems, intelligent applications and data-driven solutions with high-velocity engineering.",
  currentStatus: 'Currently exploring AI/ML Research, Spatial Intelligence & LLM Security',
  statusShort: 'Available for AI/ML & Data Analytics Internships & High-Impact Roles',
  email: 'jangirradhe175@gmail.com',
  githubUrl: 'https://github.com/Radhe-jangir',
  linkedinUrl: 'https://linkedin.com/in/radheshyamsuthar',
  resumeUrl: '#contact',
  education: {
    degree: 'BCA — Computer Science',
    institution: 'Indira Gandhi National Tribal University (IGNTU)',
    location: 'Amarkantak, India',
    status: '3rd Year / 5th Semester BCA Student',
    period: '2022 – Present',
    gpa: '8.8 / 10 (Current Equivalent)',
  },
  about: {
    heading: 'Beyond the Code.',
    bio: [
      "I'm a BCA Computer Science student specializing in Artificial Intelligence, Machine Learning and Data Analytics.",
      'I take raw datasets and transform them into actionable intelligence, robust predictive models and production-ready full-stack applications. My work spans deep statistical data analysis, machine learning pipelines, LLM-powered systems, and responsive analytics platforms.',
      'I learn primarily by building — rapidly experimenting with neural architectures, model APIs, data pipelines and real-world deployment challenges.',
    ],
  },
};

export const ABOUT_HIGHLIGHTS = [
  {
    id: 'aiml',
    title: 'AI / ML Engineering',
    tagline: 'Predictive & Generative Intelligence',
    description:
      'Designing and evaluating machine learning pipelines, classification, regression, and LLM-powered systems.',
    icon: 'Brain',
    accentColor: 'cyan',
  },
  {
    id: 'data',
    title: 'Data Analytics & Profiling',
    tagline: 'EDA & Actionable Insights',
    description:
      'Transforming complex unstructured datasets into structured insights using Pandas, automated profiling, and visual statistics.',
    icon: 'BarChart3',
    accentColor: 'blue',
  },
  {
    id: 'python',
    title: 'Python High Performance',
    tagline: 'Core Computational Engine',
    description:
      'Architecting clean data structures, RESTful microservices, ML modeling scripts, and numerical processing workflows.',
    icon: 'Code2',
    accentColor: 'emerald',
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Delivery',
    tagline: 'Interactive 3D & Analytics Systems',
    description:
      'Building performant, accessible web interfaces paired with robust FastAPI/Flask backends and persistent storage.',
    icon: 'Layers',
    accentColor: 'purple',
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'programming',
    name: 'PROGRAMMING & CORE',
    iconName: 'Code',
    description: 'Core computational and query languages for data and application logic.',
    skills: [
      { name: 'Python', badge: 'Core', isPrimary: true },
      { name: 'SQL', badge: 'Relational', isPrimary: true },
      { name: 'JavaScript', badge: 'ES6+' },
      { name: 'TypeScript', badge: 'Type-Safe', isPrimary: true },
      { name: 'C / C++', badge: 'Foundations' },
    ],
  },
  {
    id: 'data',
    name: 'DATA SCIENCE & EDA',
    iconName: 'Database',
    description: 'Data manipulation, statistical analysis, and exploration toolsets.',
    skills: [
      { name: 'Pandas', isPrimary: true },
      { name: 'NumPy', isPrimary: true },
      { name: 'Matplotlib', isPrimary: true },
      { name: 'Seaborn' },
      { name: 'Data Cleaning & Wrangling', isPrimary: true },
      { name: 'EDA (Exploratory Data Analysis)', isPrimary: true },
      { name: 'Statistical Testing & Correlations' },
    ],
  },
  {
    id: 'ml',
    name: 'MACHINE LEARNING',
    iconName: 'Cpu',
    description: 'Supervised learning algorithms, regression, decision trees, and model evaluation.',
    skills: [
      { name: 'Scikit-learn', isPrimary: true },
      { name: 'Regression (Ridge, Lasso, Linear)', isPrimary: true },
      { name: 'Classification (Logistic, SVM, KNN)' },
      { name: 'Random Forest & Ensembles', isPrimary: true },
      { name: 'CART (Decision Trees)' },
      { name: 'Model Evaluation (MAE, RMSE, R²)', isPrimary: true },
      { name: 'Feature Engineering & Scaling' },
      { name: 'PyTorch Basics' },
    ],
  },
  {
    id: 'ai',
    name: 'AI & LLM ORCHESTRATION',
    iconName: 'Sparkles',
    description: 'Modern Generative AI pipelines, model APIs, prompt orchestration, and LLM security.',
    skills: [
      { name: 'Generative AI', isPrimary: true },
      { name: 'LLM Applications', isPrimary: true },
      { name: 'Prompt Engineering', isPrimary: true },
      { name: 'LLM Security & Defense', isPrimary: true },
      { name: 'AI APIs & OpenRouter', isPrimary: true },
      { name: 'Structured JSON Outputs' },
      { name: 'RAG Architecture Basics' },
    ],
  },
  {
    id: 'backend',
    name: 'BACKEND & APIS',
    iconName: 'Server',
    description: 'Server architectures, microservices, and persistent database interfaces.',
    skills: [
      { name: 'FastAPI', isPrimary: true },
      { name: 'Flask', isPrimary: true },
      { name: 'REST APIs & Endpoints', isPrimary: true },
      { name: 'SQLAlchemy & SQLite' },
      { name: 'Node.js & Express' },
      { name: 'Postman Testing' },
    ],
  },
  {
    id: 'frontend',
    name: 'FRONTEND & 3D VISUALS',
    iconName: 'Layout',
    description: 'Component-driven user interfaces for model inspection and analytics.',
    skills: [
      { name: 'React 19', isPrimary: true },
      { name: 'TypeScript', isPrimary: true },
      { name: 'Three.js / WebGL 3D', isPrimary: true },
      { name: 'Tailwind CSS', isPrimary: true },
      { name: 'Motion / Animations' },
      { name: 'Data Visualizers' },
    ],
  },
  {
    id: 'tools',
    name: 'TOOLS & DEPLOYMENT',
    iconName: 'Wrench',
    description: 'Development environments, version control, and production hosting.',
    skills: [
      { name: 'Git & GitHub', isPrimary: true },
      { name: 'VS Code' },
      { name: 'Jupyter Notebooks' },
      { name: 'Vercel / Render' },
      { name: 'Firebase' },
      { name: 'Linux / Bash' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'sentiforge',
    number: '01',
    title: 'SentiForge — AI Sentiment Intelligence',
    tagline: 'Real-time text sentiment evaluation, trend tracking & analytics',
    description:
      'An AI-powered sentiment intelligence platform that analyzes text, visualizes sentiment insights and maintains analysis history through a full-stack architecture.',
    categories: ['AI / ML', 'FULL STACK', 'PYTHON'],
    tech: ['Python', 'Flask', 'React', 'Machine Learning', 'SQLite', 'REST API', 'Tailwind CSS'],
    features: [
      'Sentiment analysis engine classifying text into polarity and confidence scores',
      'Interactive analytics dashboard with sentiment distribution charts',
      'Analysis history tracking with timestamped audit queries',
      'User authentication & session management',
      'Multi-format visual summaries of text streams',
      'Fully responsive, high-contrast 3D spatial interface',
    ],
    problem:
      'Unstructured customer feedback, social sentiment, and textual communications require rapid, standardized polarity scoring and continuous historical tracking without manual categorization overhead.',
    solution:
      'Engineered an end-to-end full-stack platform using a Flask REST API and a lightweight ML scoring pipeline coupled to a responsive React frontend with SQLite historical persistence.',
    approach: [
      'Built a modular Python ML preprocessing script for text cleaning and token normalization.',
      'Constructed REST endpoints in Flask to handle sentiment scoring and store results with timestamps.',
      'Designed a sleek React interface for immediate sentiment breakdown and historical trend visualization.',
    ],
    architecture: [
      'Frontend: React + Tailwind CSS with responsive visual indicators & 3D tilt cards',
      'API Layer: Flask RESTful endpoints for sentiment inference & CRUD history',
      'Persistence: SQLite database managing query logs and user sessions',
      'Model Engine: Python NLP / Scikit-learn sentiment classification module',
    ],
    metrics: [
      { label: 'Architecture', value: 'Full-Stack REST' },
      { label: 'DB Persistence', value: 'SQLite / ACID' },
      { label: 'Inference', value: 'Real-Time Sub-100ms' },
    ],
    githubUrl: 'https://github.com/radheshyamsuthar/sentiforge',
    liveDemoUrl: 'https://sentiforge-demo.example.com',
    isFeatured: true,
    playgroundType: 'sentiment',
    stars: 28,
    featuredOrder: 1,
  },
  {
    id: 'predictra-ai',
    number: '02',
    title: 'Predictra AI — Intelligent Data Analysis',
    tagline: 'Automated profiling, automated cleaning, forecasting & LLM insights',
    description:
      'An intelligent data analysis platform combining automated dataset profiling, cleaning, visualization, machine learning, forecasting and AI-powered insights.',
    categories: ['AI / ML', 'DATA ANALYTICS', 'FULL STACK', 'PYTHON'],
    tech: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'Pandas',
      'SQLAlchemy',
      'SQLite',
      'OpenRouter',
    ],
    features: [
      'CSV and Excel dataset drag-and-drop file ingestion',
      'Automated dataset profiling: null counts, distributions, column statistics',
      'Data cleaning pipeline for missing value imputation and outlier handling',
      'Dynamic statistical visualization and interactive correlation matrices',
      'Machine learning model training and time-series forecasting',
      'AI insights and conversational assistant via OpenRouter LLM API',
      'Comprehensive report generation with CSV and PDF export',
    ],
    problem:
      'Data analysts and developers spend up to 80% of project time on repetitive exploratory data profiling, manual data cleaning, and boilerplate report drafting.',
    solution:
      'Created an integrated workspace that automates dataset diagnostics with Pandas, runs predictive forecasting, and connects LLM agents via OpenRouter to explain data anomalies.',
    approach: [
      'Built asynchronous FastAPI endpoints leveraging Pandas and SQLAlchemy for instant dataset profiling.',
      'Integrated OpenRouter API with structured prompt templates for dataset-grounded narrative analysis.',
      'Crafted a rich TypeScript React dashboard with interactive data charts and export workflows.',
    ],
    architecture: [
      'Backend: FastAPI (Python) with asynchronous file processing',
      'Data Processing: Pandas & NumPy computation engine',
      'AI Layer: OpenRouter LLM integration for automated findings summary',
      'Frontend: React + TypeScript with chart visualizers & 3D spatial cards',
    ],
    metrics: [
      { label: 'Profiling', value: 'Automated EDA' },
      { label: 'Formats', value: 'CSV & Excel Supported' },
      { label: 'AI Layer', value: 'OpenRouter Integration' },
    ],
    githubUrl: 'https://github.com/radheshyamsuthar/predictra-ai',
    liveDemoUrl: 'https://predictra-ai.example.com',
    isFeatured: true,
    playgroundType: 'dataset',
    stars: 34,
    featuredOrder: 2,
  },
  {
    id: 'ecotwin-intelligence',
    number: '03',
    title: 'EcoTwin Intelligence — ESG Sustainability',
    tagline: 'Environmental sustainability analytics & interactive data visualization',
    description:
      'An AI-driven sustainability intelligence platform designed to transform environmental data into actionable insights through analytics and intelligent visualization.',
    categories: ['AI / ML', 'DATA ANALYTICS', 'PYTHON'],
    tech: ['Python', 'AI/ML', 'Data Analytics', 'React', 'Data Visualization', 'Pandas'],
    features: [
      'Multi-stream environmental sensor and emissions data ingestion',
      'Actionable sustainability insights and automated threshold alarms',
      'Dynamic time-series visualizations of ecological metrics',
      'Carbon footprint calculation and reduction forecasting',
      'Anomaly detection algorithms for environmental deviations',
    ],
    problem:
      'Environmental sensor datasets are often siloed, high-frequency, and difficult for non-technical sustainability stakeholders to convert into direct mitigation actions.',
    solution:
      'Built an intelligent analytics pipeline that models sensor trends, flags abnormal variance, and projects ecological indicators on a unified telemetry board.',
    approach: [
      'Designed Python data pipeline for time-series cleaning and baseline comparison.',
      'Implemented trend detection algorithms to flag abnormal spikes in sensor logs.',
      'Developed interactive visual modules in React for intuitive stakeholder reporting.',
    ],
    architecture: [
      'Analytics Core: Python data processing & time-series analysis',
      'Visual Dashboard: React with interactive visual graphs',
      'Intelligence Layer: Statistical anomaly detection & impact projections',
    ],
    metrics: [
      { label: 'Domain', value: 'Sustainability & ESG' },
      { label: 'Focus', value: 'Actionable Insights' },
      { label: 'Visuals', value: 'Interactive Time-Series' },
    ],
    githubUrl: 'https://github.com/radheshyamsuthar/ecotwin-intelligence',
    liveDemoUrl: 'https://ecotwin-demo.example.com',
    isFeatured: true,
    playgroundType: 'sustainability',
    stars: 22,
    featuredOrder: 3,
  },
  {
    id: 'house-price-prediction',
    number: '04',
    title: 'House Price Prediction System',
    tagline: 'Multi-model comparative regression & tree-based valuation evaluation',
    description:
      'A machine learning application for predicting house prices using multiple regression and tree-based models with interactive model evaluation.',
    categories: ['AI / ML', 'DATA ANALYTICS', 'PYTHON'],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'NumPy'],
    features: [
      'Multi-model architecture: Ridge Regression, CART (Decision Tree), and Random Forest',
      'Comprehensive performance evaluation using MAE, MSE, RMSE, and R²',
      'Feature engineering: categorical encoding, numerical scaling, and correlation filtering',
      'Interactive parameter testing and error distribution visualization',
      'Detailed residual analysis and model trade-off comparison',
    ],
    problem:
      'Single-model real estate price estimators often suffer from either high variance or collinearity bias, making comparative model benchmarking critical for accurate valuation.',
    solution:
      'Developed a reproducible Scikit-learn pipeline evaluating regularized linear models alongside non-linear tree ensembles with standardized metric benchmarking.',
    approach: [
      'Conducted rigorous EDA and feature engineering using Pandas and Matplotlib.',
      'Trained and hyperparameter-tuned Ridge Regression, CART, and Random Forest regressors.',
      'Evaluated test sets across MAE, MSE, RMSE, and R² to quantify generalization performance.',
    ],
    architecture: [
      'Data Engineering: Pandas & NumPy for data cleaning and scaling',
      'ML Framework: Scikit-learn multi-regressor pipeline',
      'Evaluation: Standardized MAE, MSE, RMSE, and R² benchmarking suite',
    ],
    metrics: [
      { label: 'Models', value: 'Ridge, CART, Random Forest' },
      { label: 'Metrics Benchmark', value: 'MAE, MSE, RMSE, R²' },
      { label: 'Library', value: 'Scikit-learn' },
    ],
    githubUrl: 'https://github.com/radheshyamsuthar/house-price-prediction',
    liveDemoUrl: 'https://house-price-ml.example.com',
    isFeatured: true,
    playgroundType: 'regression',
    stars: 19,
    featuredOrder: 4,
  },
  {
    id: 'neural-vision-ocr',
    number: '05',
    title: 'NeuralVision — Smart Document OCR & Classifier',
    tagline: 'Automated computer vision text extraction & document taxonomy',
    description:
      'Computer vision pipeline that processes incoming invoice and document scans, extracts structured metadata, and classifies records with confidence scoring.',
    categories: ['AI / ML', 'PYTHON', 'DATA ANALYTICS'],
    tech: ['Python', 'OpenCV', 'PyTesseract', 'FastAPI', 'Pandas', 'Scikit-learn'],
    features: [
      'Image preprocessing: perspective correction, binarization, and noise filtering',
      'OCR bounding box text extraction and tabular line item reconstruction',
      'TF-IDF & Logistic Regression category classification',
      'JSON export format for downstream ERP integration',
    ],
    problem:
      'Manual entry of scanned invoices and physical receipts results in high error rates and operational bottlenecks.',
    solution:
      'Automated document digestion using OpenCV preprocessing and machine learning text classification.',
    approach: [
      'Image filtering and noise cancellation pipeline.',
      'OCR text extraction with coordinate mapping.',
      'Classification layer categorizing document types.',
    ],
    architecture: [
      'Computer Vision: OpenCV + PyTesseract engine',
      'Classification: Scikit-learn NLP pipeline',
      'API: FastAPI endpoint with image upload',
    ],
    metrics: [
      { label: 'Accuracy', value: '94.2% Classification' },
      { label: 'Latency', value: '< 250ms Per Page' },
      { label: 'Format', value: 'Structured JSON' },
    ],
    githubUrl: 'https://github.com/radheshyamsuthar/neural-vision-ocr',
    liveDemoUrl: 'https://neural-vision.example.com',
    isFeatured: false,
    stars: 15,
  },
  {
    id: 'crypto-quant-analytics',
    number: '06',
    title: 'QuantMetrics — Time-Series Volatility Engine',
    tagline: 'Algorithmic market trend detection and backtesting dashboard',
    description:
      'Data analytics engine analyzing historical market movements, calculating rolling Sharpe ratios, Bollinger bands, and visualizing backtested trading strategies.',
    categories: ['DATA ANALYTICS', 'PYTHON', 'FULL STACK'],
    tech: ['Python', 'Pandas', 'NumPy', 'FastAPI', 'React', 'Recharts'],
    features: [
      'Time-series statistical decomposition (Trend, Seasonality, Residuals)',
      'Automated technical indicator calculations (RSI, MACD, Moving Averages)',
      'Strategy backtesting engine with drawdown analysis',
      'Interactive React charting dashboard',
    ],
    problem:
      'Traders need transparent statistical indicators without proprietary black-box software fees.',
    solution:
      'Built an open-source mathematical backtester and analytical dashboard.',
    approach: [
      'High-speed Pandas vectorized computations.',
      'FastAPI endpoints delivering historical analytics.',
      'Responsive React data visualizer.',
    ],
    architecture: [
      'Calculation Engine: NumPy & Pandas vectorized logic',
      'Service: FastAPI REST backtester',
      'UI: React + Recharts interactive charts',
    ],
    metrics: [
      { label: 'Vectorization', value: '100x NumPy Speed' },
      { label: 'Indicators', value: '12+ Financial Metrics' },
      { label: 'Visuals', value: 'Interactive Zoom & Pan' },
    ],
    githubUrl: 'https://github.com/radheshyamsuthar/quant-metrics',
    liveDemoUrl: 'https://quant-metrics.example.com',
    isFeatured: false,
    stars: 21,
  },
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: 'gsa-2026',
    role: 'Google Student Ambassador — 2026',
    organization: 'Google Developers & Campus Ecosystem',
    period: '2026 – Present',
    type: 'Ambassador',
    location: 'Amarkantak, India / Remote',
    impactMetric: 'Impacted 500+ Student Developers',
    description:
      'Selected as an official Google Student Ambassador for the 2026 cohort. Spearheading campus-wide developer initiatives, AI literacy programs, and facilitating peer adoption of cutting-edge Google AI tooling.',
    highlights: [
      'Advocating for modern developer tools and emerging Google AI technologies across the campus community.',
      'Organizing student workshops, technical sessions, hands-on hackathons, and developer enablement labs.',
      'Connecting student developers with AI learning resources, official Google certifications, and hackathon programs.',
      'Mentoring junior peers in machine learning roadmaps, prompt engineering best practices, and Git workflows.',
    ],
    skillsAcquired: ['Developer Advocacy', 'Technical Workshop Leadership', 'AI Evangelism', 'Community Growth'],
    technologies: ['Google AI Studio', 'Gemini APIs', 'Python', 'Developer Ecosystem', 'Git'],
  },
  {
    id: 'elevatex-digital',
    role: 'Co-Founder & Technical Lead',
    organization: 'ElevateX Digital',
    period: '2024 – Present',
    type: 'Leadership',
    location: 'Remote',
    impactMetric: 'Shipped 6+ Digital Systems',
    description:
      'Co-founded a digital engineering and technology consultancy providing robust web architectures, automated data pipelines, and tailored software solutions.',
    highlights: [
      'Collaborating directly with clients to translate business requirements into clean technical specifications.',
      'Architecting and deploying full-stack web applications, REST APIs, and database schemas.',
      'Overseeing technical execution, code quality, deployment pipelines, and client training.',
      'Driving agile project sprints, technical scoping, and continuous infrastructure improvements.',
    ],
    skillsAcquired: ['Full-Stack Architecture', 'Client Communication', 'System Design', 'Agile Delivery'],
    technologies: ['React', 'TypeScript', 'FastAPI', 'Flask', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: 'igntu-tech-lead',
    role: 'Academic AI/ML Developer & Researcher',
    organization: 'Computer Science Department — IGNTU',
    period: '2023 – 2025',
    type: 'Fellowship',
    location: 'Amarkantak, India',
    impactMetric: 'Top Academic Project Ranking',
    description:
      'Active developer in academic research initiatives covering comparative regression analysis, text sentiment intelligence, and environmental data modeling.',
    highlights: [
      'Authored rigorous reproducible machine learning pipelines for house price estimation and statistical modeling.',
      'Engineered automated exploratory data profiling tools reducing manual dataset prep time.',
      'Presented technical demonstrations and project architectures to faculty and peer reviewers.',
    ],
    skillsAcquired: ['Academic Research', 'Statistical Benchmarking', 'Data Modeling', 'Scientific Python'],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Jupyter'],
  },
  {
    id: 'internship-placeholder',
    role: 'AI / Data Analytics Intern',
    organization: '[Target Organization / Enterprise — Open for Opportunities]',
    period: '[Available for Immediate Start / 2026 Term]',
    type: 'Internship',
    location: 'Hybrid / Remote / On-Site',
    impactMetric: 'Ready for High-Velocity Execution',
    description:
      'Ready to apply structured machine learning modeling, data cleansing, and full-stack integration in a high-impact engineering team.',
    highlights: [
      'Hands-on development of data extraction, cleaning, and model evaluation routines.',
      'Building automated data workflows and analytics reporting dashboards.',
      'Collaborating with senior engineering mentors on production-ready AI/ML tasks.',
    ],
    skillsAcquired: ['Production ML', 'Data Pipelines', 'Collaborative Engineering'],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'SQL', 'FastAPI', 'Git'],
    isEditablePlaceholder: true,
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'gsa-cert',
    title: 'Google Student Ambassador 2026',
    issuer: 'Google',
    year: '2026',
    status: 'Verified',
    credentialLevel: 'Specialist',
    credentialId: 'GSA-2026-IND-88492',
    issueDate: 'January 2026',
    verifyLink: 'https://developers.google.com/community/gdsc',
    description:
      'Selected to represent Google and facilitate technology awareness, developer enablement, and AI learning initiatives across campus.',
    skillsCovered: ['AI Awareness', 'Developer Advocacy', 'Technical Leadership', 'Google AI Tools'],
    curriculumHighlights: [
      'Google AI Ecosystem & Developer Tools enablement',
      'Technical workshop organization & community leadership',
      'Peer mentorship & hackathon coordination',
    ],
    badgeColor: 'blue',
  },
  {
    id: 'google-prompting',
    title: 'Google Prompting Essentials',
    issuer: 'Google',
    year: '2025',
    status: 'Verified',
    credentialLevel: 'Professional',
    credentialId: 'GOOGLE-PE-994821',
    issueDate: 'December 2025',
    verifyLink: 'https://grow.google/certificates',
    description:
      'Foundational and advanced prompt engineering principles, structured generative queries, chaining strategies, and LLM orchestration.',
    skillsCovered: ['Prompt Engineering', 'Generative AI', 'LLM Workflow Design', 'Structured Outputs', 'Context Management'],
    curriculumHighlights: [
      'Few-shot prompting, chain-of-thought and directional stimulus',
      'Structured JSON extraction and system instruction design',
      'Mitigating hallucinations and optimizing token context windows',
    ],
    badgeColor: 'cyan',
  },
  {
    id: 'cllmsp',
    title: 'Certified LLM Security Professional (CLLMSP)',
    issuer: 'LLM Security Institute / Accredited Body',
    year: '2025',
    status: 'Verified',
    credentialLevel: 'Advanced',
    credentialId: 'CLLMSP-SEC-77301',
    issueDate: 'November 2025',
    verifyLink: 'https://llmsecurity.org/verify',
    description:
      'Security architectures for Large Language Models, prompt injection mitigation, jailbreak defense, data leakage prevention, and safe AI deployment.',
    skillsCovered: ['LLM Security', 'Prompt Injection Defense', 'Jailbreak Mitigation', 'AI Safety & Governance', 'Model Auditing'],
    curriculumHighlights: [
      'Direct and indirect prompt injection defense architectures',
      'Input sanitization, output guardrails & content safety filters',
      'OWASP Top 10 for Large Language Model Applications compliance',
    ],
    badgeColor: 'purple',
  },
  {
    id: 'microsoft-ai-passport',
    title: 'Microsoft AI Skills Passport',
    issuer: 'Microsoft',
    year: '2025',
    status: 'Verified',
    credentialLevel: 'Professional',
    credentialId: 'MSFT-AI-PASSPORT-4482',
    issueDate: 'October 2025',
    verifyLink: 'https://learn.microsoft.com/credentials',
    description:
      'Core principles of cloud-scale artificial intelligence, cognitive services, ethical AI development, and automated data modeling.',
    skillsCovered: ['Cloud AI Foundations', 'Machine Learning Concepts', 'Ethical AI', 'Azure Cognitive Services'],
    curriculumHighlights: [
      'Foundations of Responsible AI and transparency',
      'Computer Vision, NLP, and Predictive ML model architectures',
      'Cloud AI service consumption and endpoint security',
    ],
    badgeColor: 'blue',
  },
  {
    id: 'supervised-ml-deeplearning',
    title: 'Supervised Machine Learning: Regression & Classification',
    issuer: 'DeepLearning.AI / Coursera',
    year: '2024',
    status: 'Verified',
    credentialLevel: 'Professional',
    credentialId: 'DLAI-SML-339218',
    issueDate: 'August 2024',
    verifyLink: 'https://coursera.org/verify',
    description:
      'Rigorous mathematical and practical machine learning principles: gradient descent, cost functions, regularized linear/logistic regression, and decision trees.',
    skillsCovered: ['Linear Regression', 'Logistic Regression', 'Gradient Descent', 'Overfitting & Regularization', 'Scikit-learn'],
    curriculumHighlights: [
      'Mathematical formulation of loss functions & vectorized gradient descent',
      'Regularization techniques (L1/Lasso, L2/Ridge) to prevent overfitting',
      'Evaluation metrics (Precision, Recall, F1, ROC-AUC, RMSE, R²)',
    ],
    badgeColor: 'emerald',
  },
  {
    id: 'data-analytics-python-eda',
    title: 'Exploratory Data Analysis & Python for Data Science',
    issuer: 'Data Science Academy / Academic Certified',
    year: '2024',
    status: 'Verified',
    credentialLevel: 'Professional',
    credentialId: 'DSA-PY-EDA-10294',
    issueDate: 'May 2024',
    verifyLink: 'https://datascience.org/verify',
    description:
      'Advanced data wrangling, missing data imputation, anomaly detection, statistical distribution testing, and visual analytics using Pandas and NumPy.',
    skillsCovered: ['Pandas', 'NumPy', 'Data Wrangling', 'Statistical Testing', 'Data Profiling', 'Matplotlib'],
    curriculumHighlights: [
      'High-speed dataframe indexing, grouping, merging, and reshaping',
      'Statistical correlation matrices, skewness handling, and outlier filtering',
      'Automated data quality auditing workflows',
    ],
    badgeColor: 'emerald',
  },
  {
    id: 'postman-api-expert',
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    year: '2024',
    status: 'Verified',
    credentialLevel: 'Foundational',
    credentialId: 'POSTMAN-SE-55912',
    issueDate: 'March 2024',
    verifyLink: 'https://badgr.com/public/assertions',
    description:
      'Designing, consuming, testing, and debugging RESTful APIs, mock servers, automated test scripts, and webhook integrations.',
    skillsCovered: ['REST APIs', 'Postman Testing', 'API Authentication', 'Automated Test Scripts'],
    curriculumHighlights: [
      'HTTP status codes, header configurations, and Bearer auth tokens',
      'Automated assertion testing with Chai/JavaScript in Postman',
      'API documentation and mock server orchestration',
    ],
    badgeColor: 'cyan',
  },
//   {
//   id: 'my-new-certificate-slug', // Unique short id (e.g. 'aws-cloud-practitioner')
//   title: 'Your Certificate Title Here',
//   issuer: 'Google / Microsoft / IBM / DeepLearning.AI / Coursera',
//   year: '2024',
//   credentialId: 'CERT-123456789',
//   credentialUrl: 'https://your-verification-link.com/verify/12345',
//   skillsCovered: ['Machine Learning', 'Python', 'Data Analysis'],
//   status: 'Verified',
//   credentialLevel: 'Professional', // or 'Specialization', 'Foundation', 'Advanced'
//   description: 'A 1-2 sentence description of what you learned and built in this course.',
//   curriculumHighlights: [
//     'First key topic or project built during the certification',
//     'Second major theoretical or practical concept learned',
//     'Third hands-on tool or framework mastered'
//   ]
// },
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
      'Exceptional hands-on competency in writing clean Python ML scripts, benchmarking regression & classification algorithms, and wrapping models in production REST APIs.',
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst / BI Intelligence Intern',
    fitScore: 96,
    keyStrengths: [
      'Pandas & NumPy data manipulation',
      'Automated dataset profiling & statistical analysis',
      'Interactive visual dashboarding & time-series analysis',
      'SQL querying and relational schema modeling',
    ],
    recommendedProjects: ['predictra-ai', 'ecotwin-intelligence', 'crypto-quant-analytics'],
    matchedSkills: ['Pandas', 'NumPy', 'SQL', 'EDA', 'Data Visualization', 'Matplotlib'],
    readinessSummary:
      'Strong analytical mindset capable of digesting large CSV/Excel datasets, detecting statistical anomalies, computing correlations, and building clear dashboards for stakeholders.',
  },
  {
    id: 'python-backend',
    title: 'Python Backend Developer (AI Systems)',
    fitScore: 95,
    keyStrengths: [
      'FastAPI & Flask REST architectures',
      'SQLAlchemy ORM & SQLite database persistence',
      'OpenRouter / LLM API integration with structured schemas',
      'Git collaboration & modular code design',
    ],
    recommendedProjects: ['predictra-ai', 'sentiforge', 'neural-vision-ocr'],
    matchedSkills: ['Python', 'FastAPI', 'Flask', 'REST APIs', 'SQLAlchemy', 'Git'],
    readinessSummary:
      'Proven ability to build scalable backend services that handle file ingestion, async processing, database transactions, and model inference with low latency.',
  },
  {
    id: 'genai-specialist',
    title: 'Generative AI & LLM Applications Developer',
    fitScore: 97,
    keyStrengths: [
      'Google Prompting Essentials certified',
      'Certified LLM Security Professional (CLLMSP)',
      'Agentic prompt chaining & structured JSON outputs',
      'End-to-end full-stack integration with React interfaces',
    ],
    recommendedProjects: ['predictra-ai', 'sentiforge'],
    matchedSkills: ['Generative AI', 'Prompt Engineering', 'LLM Security', 'OpenRouter', 'React'],
    readinessSummary:
      'Equipped with both offensive prompt engineering and defensive LLM security principles, ready to architect robust AI applications with safety guardrails.',
  },
];

export const WHY_ME_ITEMS: WhyMeItem[] = [
  {
    id: 'analytical-thinking',
    number: '01',
    title: 'ANALYTICAL THINKING',
    description:
      'I enjoy breaking complex problems and datasets into structured, measurable components.',
    detail:
      'Rather than rushing into model training, I dissect data distributions, evaluate feature correlation, and formulate clear hypotheses grounded in statistical logic.',
    iconName: 'Target',
  },
  {
    id: 'building-mindset',
    number: '02',
    title: 'BUILDING MINDSET',
    description:
      'I learn by building practical systems, experimenting with models and turning ideas into working applications.',
    detail:
      'Theory comes alive in code. Every algorithm I study is implemented in end-to-end applications with real APIs, validation pipelines, and clean user interfaces.',
    iconName: 'Hammer',
  },
  {
    id: 'continuous-learning',
    number: '03',
    title: 'CONTINUOUS LEARNING',
    description:
      'I actively explore emerging AI technologies, LLMs, machine learning and data systems.',
    detail:
      'From agentic LLM workflows to classical tree ensembles, I stay curious and continually refine my skillset through real-world experimentation.',
    iconName: 'Compass',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Google Student Ambassador 2026',
    category: 'Leadership & Community',
    year: '2026',
    description:
      'Selected to lead campus tech engagement, driving peer awareness in AI/ML and Google technologies.',
    badge: 'Official Ambassador',
  },
  {
    id: 'ach-2',
    title: 'Co-Founder — ElevateX Digital',
    category: 'Entrepreneurship & Engineering',
    year: 'Active',
    description:
      'Co-founded a digital solutions initiative providing modern technology and web services.',
    badge: 'Startup Co-Founder',
  },
  {
    id: 'ach-3',
    title: 'End-to-End AI/ML Systems Built',
    category: 'Technical Projects',
    year: '2024 – 2026',
    description:
      'Engineered full-stack platforms including SentiForge, Predictra AI, and ML regression evaluation suites.',
    badge: '6+ Engineered Systems',
  },
  {
    id: 'ach-4',
    title: 'Data Analytics & Modeling Projects',
    category: 'Data Science',
    year: '2024 – 2026',
    description:
      'Delivered structured exploratory analysis, data cleaning pipelines, and time-series sustainability visualizations.',
    badge: 'Applied ML',
  },
  {
    id: 'ach-5',
    title: 'Hackathon & Technical Program Participation',
    category: 'Competitions & Workshops',
    year: '2024 – 2026',
    description:
      'Participated in collaborative developer hackathons, technical challenges, and community workshops.',
    badge: 'Active Participant',
  },
  {
    id: 'ach-6',
    title: 'Professional AI/ML Certifications',
    category: 'Continuous Education',
    year: '2025 – 2026',
    description:
      'Earned credentials across Google Prompting, Microsoft AI Skills, and LLM Security.',
    badge: '7+ Verified Badges',
  },
];

export const CURRENT_FOCUS_TOPICS: CurrentFocusItem[] = [
  {
    id: 'cf-1',
    title: 'AI/ML Research & Architectures',
    category: 'Research',
    description:
      'Exploring novel neural network architectures, attention mechanisms, and model generalization techniques.',
    tags: ['Deep Learning', 'PyTorch', 'Model Optimization', '3D Tensors'],
    status: 'Research & Dev',
  },
  {
    id: 'cf-2',
    title: 'Generative AI & LLM Applications',
    category: 'Generative AI',
    description:
      'Building agentic workflows, structured output extractors, and domain-grounded prompt pipelines with OpenRouter & APIs.',
    tags: ['LLM Chains', 'Context Grounding', 'Prompt Engineering', 'Safety Guardrails'],
    status: 'Core Focus',
  },
  {
    id: 'cf-3',
    title: 'Data Analytics & Profiling Engines',
    category: 'Data Engineering',
    description:
      'Developing automated data quality verification scripts, missing value imputers, and statistical metric extractors.',
    tags: ['Pandas', 'Automated EDA', 'Statistical Tests', 'Correlation Graphs'],
    status: 'Active Exploration',
  },
  {
    id: 'cf-4',
    title: 'Machine Learning Pipelines & Evaluation',
    category: 'Applied ML',
    description:
      'Refining multi-model benchmarking suites comparing regularized regression against ensemble trees (Random Forest, CART).',
    tags: ['Scikit-learn', 'Cross-Validation', 'Hyperparameter Tuning', 'Residual Metrics'],
    status: 'Core Focus',
  },
  {
    id: 'cf-5',
    title: 'Python High-Performance Backend Systems',
    category: 'Backend',
    description:
      'Creating low-latency REST and async FastAPI microservices capable of serving model inference at scale.',
    tags: ['FastAPI', 'Flask', 'REST APIs', 'Async I/O', 'SQLAlchemy'],
    status: 'Core Focus',
  },
  {
    id: 'cf-6',
    title: '3D Spatial Visuals & Interactive Interfaces',
    category: 'Visual Analytics',
    description:
      'Designing clear, high-contrast 3D exploratory dashboards and WebGL spatial manifolds to communicate complex model predictions.',
    tags: ['Three.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'WebGL 3D'],
    status: 'Active Exploration',
  },
];
