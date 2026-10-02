import React from 'react';

export const About: React.FC = () => {
  const toolkit = [
    'Python',
    'Scikit-learn',
    'FastAPI',
    'React',
    'TypeScript',
    'Pandas',
    'NumPy',
    'Flask',
    'Generative AI',
    'SQL & SQLite',
    'REST APIs',
    'Git & GitHub',
    'Tailwind CSS',
    'Docker',
  ];

  return (
    <section className="section container about" id="about" aria-labelledby="about-title">
      <div>
        <span className="eyebrow">02 / A little about me</span>
        <h2 id="about-title">
          Curious by nature.<br />
          Driven by data.
        </h2>
        <p>
          I’m Radheshyam Suthar (RDJ), an AI/ML Engineer and BCA Computer Science student at IGNTU. I enjoy the space where analytical intelligence, mathematical rigor, and thoughtful software engineering meet.
        </p>
        <p>
          My approach is straightforward: deeply understand the real problem, architect robust data workflows and ML models, and build clean, accessible interfaces that make complex systems feel intuitive.
        </p>

        <div id="skills" style={{ marginTop: '36px' }}>
          <h3>My toolkit</h3>
          <div className="skills" aria-label="Skills">
            {toolkit.map((skill) => (
              <span key={skill} className="skill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="about-panel">
        <div className="value">
          <span className="value-number">01</span>
          <div>
            <h3>Start with purpose</h3>
            <p>
              Understand who the application or model is for and what measurable problem it needs to accomplish.
            </p>
          </div>
        </div>

        <div className="value">
          <span className="value-number">02</span>
          <div>
            <h3>Keep it clear</h3>
            <p>
              Choose readable typography, straightforward navigation, clean APIs, and reproducible machine learning code.
            </p>
          </div>
        </div>

        <div className="value">
          <span className="value-number">03</span>
          <div>
            <h3>Care about the details</h3>
            <p>
              From inference latency and edge cases to responsive layouts, keyboard accessibility, and real-world data drift.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
