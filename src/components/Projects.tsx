import React, { useState } from 'react';
import { projects } from '../portfolio';

interface ProjectDisplay {
  id: string;
  name: string;
  category: 'ai' | 'nlp' | 'web';
  artClass: string;
  miniTitle: string;
  eyebrow: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveDemoUrl?: string;
}

const PROJECT_LIST: ProjectDisplay[] = [
  {
    id: 'predictra-ai',
    name: 'Predictra AI',
    category: 'ai',
    artClass: 'art-one',
    miniTitle: 'predictra.ai',
    eyebrow: 'Machine Learning / Analytics',
    description:
      'AI-powered business analytics and machine-learning platform supporting CSV/Excel data profiling, automated cleaning, interactive visualization, ML model training, forecasting and AI-generated insights.',
    tags: ['React', 'FastAPI', 'Python', 'Scikit-learn', 'Pandas', 'OpenRouter'],
    githubUrl: 'https://github.com/Radhe-jangir/predictra-ai',
    liveDemoUrl: 'https://predictra-ai.example.com',
  },
  {
    id: 'sentiforge',
    name: 'SentiForge',
    category: 'nlp',
    artClass: 'art-two',
    miniTitle: 'sentiforge.nlp',
    eyebrow: 'NLP / Text Analytics',
    description:
      'Full-stack NLP platform for multi-label sentiment classification, trend analysis and automated PDF report generation with high accuracy.',
    tags: ['Python', 'Flask', 'TextBlob', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/Radhe-jangir/sentiforge',
    liveDemoUrl: 'https://sentiforge-demo.example.com',
  },
  {
    id: 'ecotwin-intelligence',
    name: 'EcoTwin Intelligence',
    category: 'web',
    artClass: 'art-three',
    miniTitle: 'ecotwin.eco',
    eyebrow: 'Generative AI / Green Tech',
    description:
      'Full-stack carbon-footprint tracking platform with AI-generated environmental impact analysis and real-time data visualization.',
    tags: ['React 19', 'TypeScript', 'Express', 'Google Generative AI'],
    githubUrl: 'https://github.com/Radhe-jangir/ecotwin-intelligence',
    liveDemoUrl: 'https://ecotwin-demo.example.com',
  },
  {
    id: 'ai-resume-screening-system',
    name: 'AI Resume Screening System',
    category: 'ai',
    artClass: 'art-four',
    miniTitle: 'resume.screen',
    eyebrow: 'Recruitment AI / NLP',
    description:
      'Flask-based recruitment platform performing intelligent resume parsing, NLP-based candidate scoring, and automated candidate ranking workflows.',
    tags: ['Python', 'Flask', 'Scikit-learn', 'NLP', 'Pandas'],
    githubUrl: 'https://github.com/Radhe-jangir/resume-screening-system',
  },
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'web' | 'nlp'>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectDisplay | null>(null);

  const filteredProjects = PROJECT_LIST.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <>
      <section className="section container" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / Selected work</span>
            <h2 id="work-title">Ideas brought to life.</h2>
          </div>
          <p>
            Real-world AI/ML applications, data analytics platforms, and full-stack systems built by Radheshyam.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filters" role="group" aria-label="Filter projects">
          <button
            className="filter"
            type="button"
            data-filter="all"
            aria-pressed={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            All projects
          </button>
          <button
            className="filter"
            type="button"
            data-filter="ai"
            aria-pressed={filter === 'ai'}
            onClick={() => setFilter('ai')}
          >
            AI / Machine Learning
          </button>
          <button
            className="filter"
            type="button"
            data-filter="web"
            aria-pressed={filter === 'web'}
            onClick={() => setFilter('web')}
          >
            Web apps
          </button>
          <button
            className="filter"
            type="button"
            data-filter="nlp"
            aria-pressed={filter === 'nlp'}
            onClick={() => setFilter('nlp')}
          >
            NLP &amp; Text
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="projects">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="project"
              data-category={project.category}
            >
              <div className={`project-art ${project.artClass}`} aria-hidden="true">
                <div className="mini-window">
                  <div className="mini-title">{project.miniTitle}</div>
                  <div className="mini-line"></div>
                  <div className="mini-line short"></div>
                  <div className="mini-blocks">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>

              <div className="project-body">
                <span className="eyebrow">{project.eyebrow}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginTop: 'auto' }}>
                  <button
                    className="text-button"
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    aria-haspopup="dialog"
                  >
                    View details <span aria-hidden="true">↗</span>
                  </button>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-button"
                        style={{ fontSize: '0.82rem', color: 'var(--muted)' }}
                      >
                        Code ↗
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-button"
                        style={{ fontSize: '0.82rem', color: 'var(--accent)' }}
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p id="project-count" className="form-note" role="status" style={{ marginTop: '24px' }}>
          Showing {filteredProjects.length} project{filteredProjects.length === 1 ? '' : 's'}.
        </p>
      </section>

      {/* Project Details Modal */}
      {activeModalProject && (
        <dialog
          id="project-dialog"
          open
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <div className="dialog-top">
            <button
              className="icon-btn"
              id="close-dialog"
              type="button"
              onClick={() => setActiveModalProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>
          </div>

          <span className="eyebrow">{activeModalProject.eyebrow}</span>
          <h2 id="dialog-title" style={{ marginTop: '4px', marginBottom: '16px' }}>
            {activeModalProject.name}
          </h2>
          <p id="dialog-description" style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '20px' }}>
            {activeModalProject.description}
          </p>

          <div style={{ marginBottom: '24px' }}>
            <strong style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', color: 'var(--text)' }}>
              Technologies &amp; Architecture:
            </strong>
            <div className="tags">
              {activeModalProject.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
            {activeModalProject.githubUrl && (
              <a
                className="btn btn-primary"
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository <span aria-hidden="true">↗</span>
              </a>
            )}
            {activeModalProject.liveDemoUrl && (
              <a
                className="btn"
                href={activeModalProject.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <span aria-hidden="true">↗</span>
              </a>
            )}
            <button
              className="btn"
              type="button"
              onClick={() => setActiveModalProject(null)}
            >
              Close
            </button>
          </div>
        </dialog>
      )}
    </>
  );
};
