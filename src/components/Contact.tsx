import React, { useState } from 'react';
import { contactConfig, socialMediaLinks } from '../portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !message) {
      setStatusMessage('Please enter your name and message.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    setStatusMessage('Opening your email client with draft prepared...');
    window.location.href = `mailto:${contactConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section container" id="contact" aria-labelledby="contact-title">
      <div className="contact-wrap">
        <div>
          <span className="eyebrow">04 / Get in touch</span>
          <h2 id="contact-title">
            Let’s build<br />
            something <span className="accent">great.</span>
          </h2>
          <p>
            Have an AI/ML opportunity, research collaboration, or interesting engineering project? I’d love to connect.
          </p>

          <a className="contact-email" id="contact-email" href={`mailto:${contactConfig.email}`}>
            {contactConfig.email}
          </a>

          <div style={{ marginTop: '16px', display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="tag"
              style={{
                background: 'var(--surface-hover)',
                color: copied ? 'var(--accent)' : 'var(--text)',
                cursor: 'pointer',
                border: '1px solid var(--border)',
                padding: '6px 12px',
                fontSize: '0.8rem',
              }}
            >
              {copied ? '✓ Copied to clipboard!' : 'Copy email address'}
            </button>
            <a
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="tag"
              style={{
                background: 'var(--surface-hover)',
                color: 'var(--text)',
                border: '1px solid var(--border)',
                padding: '6px 12px',
                fontSize: '0.8rem',
              }}
            >
              GitHub ↗
            </a>
            <a
              href={socialMediaLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="tag"
              style={{
                background: 'var(--surface-hover)',
                color: 'var(--text)',
                border: '1px solid var(--border)',
                padding: '6px 12px',
                fontSize: '0.8rem',
              }}
            >
              LinkedIn ↗
            </a>
          </div>

          <p className="form-note" style={{ marginTop: '28px' }}>
            Location: {contactConfig.location}
          </p>
          <p className="form-note">
            This form opens your email app directly. No personal data is stored on a server.
          </p>
        </div>

        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Alex Morgan"
              required
              maxLength={100}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Your email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="alex@example.com"
              required
              maxLength={254}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="field">
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me a little about your role, project, or idea..."
              required
              maxLength={1500}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <button className="btn btn-primary" type="submit">
            Open email draft <span aria-hidden="true">↗</span>
          </button>

          {statusMessage && (
            <p id="form-status" className="form-status" role="status" style={{ color: 'var(--accent)' }}>
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
