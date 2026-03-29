import React, { useState, useEffect } from 'react';
import './Hero.css';

const ROLES = [
  'Fullstack Developer',
  'Cybersecurity Enthusiast',
  'Cloud Computing Advocate',
  'AI & Data Analytics Learner',
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />
      </div>

      <div className="container">
        <div className="hero__grid">
          {/* Left */}
          <div className="hero__content">
            <div className="hero__eyebrow">
              <div className="hero__eyebrow-line" />
              <span className="hero__eyebrow-text">Portfolio // 2026</span>
            </div>

            <h1 className="hero__heading">
              <span className="hero__heading-name">Guiliani Pobre</span>
              <span className="hero__heading-role" data-text="BUILDS.">BUILDS.</span>
            </h1>

            <p className="hero__subtitle">
              <span className="hero__subtitle-prefix">{'>'}</span>
              {displayed}
              <span className="hero__cursor" aria-hidden="true" />
            </p>

            <div className="hero__cta">
              <button
                className="btn-neon"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </button>
              <button
                className="btn-neon btn-neon-ghost"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>

            <div className="hero__stats">
              {[
                { number: '5+', label: 'Certifications' },
                { number: "Dean's", label: 'Lister — HAU 2025' },
                { number: '2026', label: 'BSCS Graduate' },
              ].map((stat) => (
                <div key={stat.label} className="hero__stat">
                  <span className="hero__stat-number">{stat.number}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div className="hero__visual">
            <div className="hero__avatar-wrapper">
              <div className="hero__avatar-ring hero__avatar-ring--outer" />
              <div className="hero__avatar-ring" />
              <div className="hero__avatar">
                <span className="hero__avatar-initials">GL</span>
              </div>
              <div className="hero__badge hero__badge--1">
                <span className="hero__badge-dot" />
                CCNA Certified
              </div>
              <div className="hero__badge hero__badge--2">
                <span className="hero__badge-dot" />
                AWS Cloud Foundations
              </div>
              <div className="hero__badge hero__badge--3">
                <span className="hero__badge-dot" />
                Pampanga, PH 🇵🇭
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
