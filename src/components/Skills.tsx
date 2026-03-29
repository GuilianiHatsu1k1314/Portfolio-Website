import React, { useState } from 'react';
import './Skills.css';

interface Skill {
  name: string;
  icon: string;
  level: number;
  levelLabel: string;
  color: string;
  colorDim: string;
  category: string;
}

const SKILLS: Skill[] = [
  // Networking & Security
  { name: 'Computer Networking', icon: '🌐', level: 88, levelLabel: 'Advanced', color: 'rgba(0,245,255,0.8)', colorDim: 'rgba(0,245,255,0.4)', category: 'Networking' },
  { name: 'Cybersecurity', icon: '🛡️', level: 82, levelLabel: 'Advanced', color: 'rgba(255,0,170,0.8)', colorDim: 'rgba(255,0,170,0.4)', category: 'Networking' },
  { name: 'Cyber Threat Mgmt', icon: '⚠️', level: 78, levelLabel: 'Advanced', color: 'rgba(255,80,80,0.8)', colorDim: 'rgba(255,80,80,0.4)', category: 'Networking' },
  { name: 'Linux', icon: '🐧', level: 80, levelLabel: 'Advanced', color: 'rgba(230,200,0,0.8)', colorDim: 'rgba(230,200,0,0.4)', category: 'Networking' },

  // Development
  { name: 'Fullstack Dev', icon: '⚡', level: 75, levelLabel: 'Proficient', color: 'rgba(0,245,255,0.8)', colorDim: 'rgba(0,245,255,0.4)', category: 'Development' },
  { name: 'Databases', icon: '🗄️', level: 80, levelLabel: 'Advanced', color: 'rgba(100,150,255,0.8)', colorDim: 'rgba(100,150,255,0.4)', category: 'Development' },
  { name: 'Data Structures', icon: '🧱', level: 78, levelLabel: 'Advanced', color: 'rgba(0,255,136,0.8)', colorDim: 'rgba(0,255,136,0.4)', category: 'Development' },
  { name: 'Data Management', icon: '📂', level: 77, levelLabel: 'Advanced', color: 'rgba(150,100,255,0.8)', colorDim: 'rgba(150,100,255,0.4)', category: 'Development' },

  // Cloud & AI
  { name: 'Cloud Computing', icon: '☁️', level: 76, levelLabel: 'Advanced', color: 'rgba(0,180,255,0.8)', colorDim: 'rgba(0,180,255,0.4)', category: 'Cloud & AI' },
  { name: 'AWS Foundations', icon: '🟠', level: 74, levelLabel: 'Proficient', color: 'rgba(255,150,0,0.8)', colorDim: 'rgba(255,150,0,0.4)', category: 'Cloud & AI' },
  { name: 'Artificial Intelligence', icon: '🤖', level: 72, levelLabel: 'Proficient', color: 'rgba(191,0,255,0.8)', colorDim: 'rgba(191,0,255,0.4)', category: 'Cloud & AI' },
  { name: 'Data Visualization', icon: '📊', level: 75, levelLabel: 'Proficient', color: 'rgba(0,255,200,0.8)', colorDim: 'rgba(0,255,200,0.4)', category: 'Cloud & AI' },
  { name: 'Responsible AI', icon: '⚖️', level: 80, levelLabel: 'Advanced', color: 'rgba(255,220,0,0.8)', colorDim: 'rgba(255,220,0,0.4)', category: 'Cloud & AI' },
  { name: 'Computer Ethics', icon: '🧭', level: 85, levelLabel: 'Advanced', color: 'rgba(0,245,150,0.8)', colorDim: 'rgba(0,245,150,0.4)', category: 'Cloud & AI' },
];

const CATEGORIES = ['All', 'Networking', 'Development', 'Cloud & AI'];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div
    className="skill-card"
    style={{
      '--skill-color': skill.color,
      '--skill-color-dim': skill.colorDim,
    } as React.CSSProperties}
  >
    <span className="skill-card__icon">{skill.icon}</span>
    <div className="skill-card__name">{skill.name}</div>
    <div className="skill-card__bar-track">
      <div className="skill-card__bar-fill" style={{ width: `${skill.level}%` }} />
    </div>
    <div className="skill-card__level">{skill.levelLabel} · {skill.level}%</div>
  </div>
);

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__header">
          <p className="section-label">Technical Arsenal</p>
          <h2 className="section-title">
            Skills &amp; <span className="highlight">Expertise</span>
          </h2>
        </div>

        {/* Certifications strip */}
        <div className="skills__certs">
          {[
            { label: 'Ethics in Generative AI', year: '2026', color: 'var(--neon-cyan)' },
            { label: 'Data Analytics Essentials', year: '2025', color: 'var(--neon-green)' },
            { label: 'AWS Cloud Foundations', year: '2025', color: 'rgba(255,150,0,0.9)' },
            { label: 'Cyber Threat Management', year: '2024', color: 'var(--neon-magenta)' },
            { label: 'CCNA Intro to Networks', year: '2024', color: 'rgba(100,150,255,0.9)' },
          ].map((cert) => (
            <div
              key={cert.label}
              className="skills__cert-badge"
              style={{ '--cert-color': cert.color } as React.CSSProperties}
            >
              <span className="skills__cert-year">{cert.year}</span>
              <span className="skills__cert-label">{cert.label}</span>
            </div>
          ))}
        </div>

        <div className="skills__tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`skills__tab${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills__grid">
          {filtered.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
