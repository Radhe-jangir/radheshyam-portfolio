import React from 'react';
import { socialMediaLinks } from '../portfolio';

export const Greeting: React.FC = () => {
  return (
    <>
      <section className="hero container" id="home" aria-labelledby="hero-title">
        <div>
          <div className="badge">
            <span className="dot" aria-hidden="true"></span> Welcome to my corner of the internet
          </div>
          <h1 id="hero-title">
            Hi, I’m Radheshyam.<br />
            I build <span className="accent">intelligent systems.</span>
          </h1>
          <p className="lead">
            An AI/ML Engineer & Full-Stack Developer with hands-on experience building machine learning models, REST APIs, and data-driven web applications.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#work">
              Explore my work <span aria-hidden="true">↗</span>
            </a>
            <a className="btn" href="#contact">
              Let’s talk <span aria-hidden="true">→</span>
            </a>
            <a
              className="btn"
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero-note">Thoughtfully designed. Built for the web.</p>
        </div>

        <div className="visual" aria-hidden="true">
          <div className="visual-top">
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className="avatar">RDJ.</div>
          <div className="visual-caption">
            <strong>
              Creative mind.<br />
              Developer at heart.
            </strong>
            <small>
              AI / ML<br />
              + CODE
            </small>
          </div>
          <div className="floating-label">&lt;/&gt; From idea to interface</div>
        </div>
      </section>

      <div className="strip" aria-label="Core competencies">
        <div className="container strip-inner">
          <span>RESPONSIVE DESIGN</span>
          <span>MACHINE LEARNING</span>
          <span>FULL-STACK ARCHITECTURE</span>
          <span>DATA ANALYTICS</span>
          <span>CLEAN INTERFACES</span>
        </div>
      </div>
    </>
  );
};
