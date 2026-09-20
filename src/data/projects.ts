import { Project } from '../types';

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
      'Fully responsive, clean interface with direct model inference feedback',
    ],
    problem:
      'Unstructured customer feedback, social sentiment, and textual communications require rapid, standardized polarity scoring and continuous historical tracking without manual categorization overhead.',
    solution:
      'Engineered an end-to-end full-stack platform using a Flask REST API and a lightweight ML scoring pipeline coupled to a responsive React frontend with SQLite historical persistence.',
    approach: [
      'Built a modular Python ML preprocessing script for text cleaning and token normalization.',
      'Constructed REST endpoints in Flask to handle sentiment scoring and store results with timestamps.',
      'Designed a clean React interface for immediate sentiment breakdown and historical trend visualization.',
    ],
    architecture: [
      'Frontend: React + Tailwind CSS with responsive visual indicators',
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
      'An intelligent data analysis platform combining automated dataset profiling, cleaning, visualization, machine learning forecasting and AI-powered insights.',
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
      'Data analysts and developers spend significant project time on repetitive exploratory data profiling, manual data cleaning, and boilerplate report drafting.',
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
      'Frontend: React + TypeScript with interactive data visualizers',
    ],
    metrics: [
      { label: 'Profiling', value: 'Automated EDA' },
      { label: 'Formats', value: 'CSV & Excel' },
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
      'Single-model real estate price estimators often suffer from high variance or collinearity bias, making comparative benchmarking critical for reliable valuation.',
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
      'JSON export format for downstream system integration',
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
      'Traders and analysts need transparent statistical indicators without proprietary black-box fees.',
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
      { label: 'Vectorization', value: 'NumPy Vectorized' },
      { label: 'Indicators', value: '12+ Financial Metrics' },
      { label: 'Visuals', value: 'Interactive Time-Series' },
    ],
    githubUrl: 'https://github.com/radheshyamsuthar/quant-metrics',
    liveDemoUrl: 'https://quant-metrics.example.com',
    isFeatured: false,
    stars: 21,
  },
];
