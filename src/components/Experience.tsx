import React, { useState } from 'react';
import { experiences, degrees, certifications } from '../portfolio';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'certifications'>('work');

  return (
    <section className="section container" id="experience" aria-labelledby="exp-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow">03 / Experience &amp; Journey</span>
          <h2 id="exp-title">Where I’ve contributed.</h2>
        </div>
        <p>
          Applied experience across startups, sustainability programs, university research, and professional certifications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="filters" role="group" aria-label="Experience tabs">
        <button
          className="filter"
          type="button"
          aria-pressed={activeTab === 'work'}
          onClick={() => setActiveTab('work')}
        >
          Work &amp; Internships
        </button>
        <button
          className="filter"
          type="button"
          aria-pressed={activeTab === 'education'}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button
          className="filter"
          type="button"
          aria-pressed={activeTab === 'certifications'}
          onClick={() => setActiveTab('certifications')}
        >
          Certifications
        </button>
      </div>

      {/* Content Panels */}
      {activeTab === 'work' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
          {experiences.sections[0].experiences.map((exp) => (
            <article key={exp.title + exp.company} className="project" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                <span className="eyebrow" style={{ marginBottom: 0 }}>{exp.duration}</span>
                <span className="tag" style={{ background: 'var(--surface-hover)', color: 'var(--muted)' }}>{exp.location}</span>
              </div>
              <h3 style={{ marginBottom: '6px' }}>{exp.title}</h3>
              <strong style={{ display: 'block', color: 'var(--accent)', fontSize: '0.95rem', marginBottom: '12px' }}>
                {exp.company}
              </strong>
              <p style={{ fontSize: '0.92rem', marginBottom: '16px' }}>{exp.description}</p>
              {exp.responsibilities && (
                <ul style={{ paddingLeft: '18px', margin: 0, color: 'var(--muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} style={{ marginBottom: '6px' }}>{resp}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      )}

      {activeTab === 'education' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
          {degrees.degrees.map((deg) => (
            <article key={deg.title} className="project" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                <span className="eyebrow" style={{ marginBottom: 0 }}>{deg.duration}</span>
                {deg.grade && (
                  <span className="tag" style={{ background: 'var(--surface-hover)', color: 'var(--accent)' }}>
                    {deg.grade}
                  </span>
                )}
              </div>
              <h3 style={{ marginBottom: '6px' }}>{deg.title}</h3>
              <strong style={{ display: 'block', color: 'var(--text)', fontSize: '0.95rem', marginBottom: '12px' }}>
                {deg.subtitle}
              </strong>
              <ul style={{ paddingLeft: '18px', margin: 0, color: 'var(--muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                {deg.descriptions.map((desc, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{desc.replace('⚡ ', '')}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}

      {activeTab === 'certifications' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {certifications.certifications.map((cert) => (
            <article key={cert.title} className="project" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="tag" style={{ background: 'var(--surface-hover)', color: 'var(--accent)' }}>
                  {cert.alt_name}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{cert.date}</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>{cert.title}</h3>
              <p style={{ fontSize: '0.88rem', marginBottom: '16px' }}>{cert.subtitle}</p>
              {cert.certificate_link && (
                <a
                  href={cert.certificate_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-button"
                  style={{ fontSize: '0.82rem' }}
                >
                  Verify credential <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
