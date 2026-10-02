import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-inner">
        <p>© {currentYear} Radheshyam Suthar (RDJ). Built with care.</p>
        <a href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
};
