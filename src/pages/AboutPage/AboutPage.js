import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I love <span className="highlight">JavaScript/Typescript</span> and
              everything pertaining to the web.
            </p>
            <p>
              When my dev senses kick in I love to build
              <span className="highlight"> awesome stuff</span>. I stay close to
              current tech trends and build projects using the new tech that I find interesting. 
             
            </p>
            <p>
              This site  is build with<span className="highlight">React JS</span>.
             
            </p>
            <p>
              React, React-Native, Node.js, Typescript, GraphQL, Mysql, Docker and
              Kubernetes are the main tricks up my sleeve. 
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
        <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
