import React from 'react';
import './Projects.css';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  emoji: string;
  gradient: string;
  type: 'featured' | 'regular' | 'small';
  label: string;
  isFeatured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: 'Nepomuceno Enterprise System — Fullstack OJT Project',
    desc: 'End-to-end internal business system built during my OJT at Juan D. Nepomuceno Sons Inc. Designed and implemented the database schema, RESTful API, backend logic, and frontend interface. Delivered a working solution that streamlined internal data management processes.',
    tags: ['Fullstack', 'Database Design', 'REST API', 'Frontend', 'Backend'],
    emoji: '🏢',
    gradient: 'linear-gradient(135deg, rgba(0,245,255,0.15) 0%, rgba(0,100,150,0.1) 100%)',
    type: 'featured',
    label: 'OJT Project · 2026',
    isFeatured: true,
  },
  {
    title: 'Network Threat Analyzer',
    desc: 'A cybersecurity dashboard that monitors network traffic, flags anomalies, and visualizes potential threats in real time. Inspired by coursework in Cyber Threat Management and CCNA networking principles.',
    tags: ['Cybersecurity', 'Networking', 'Data Visualization', 'Linux'],
    emoji: '🛡️',
    gradient: 'linear-gradient(135deg, rgba(255,0,170,0.15) 0%, rgba(100,0,80,0.1) 100%)',
    type: 'regular',
    label: 'Security · 2025',
  },
  {
    title: 'CloudOps Dashboard',
    desc: 'A cloud resource monitoring interface built on AWS Foundations concepts. Tracks EC2 instances, S3 usage, and billing estimates. Designed to practice cloud management skills from AWS Academy training.',
    tags: ['AWS', 'Cloud Computing', 'Dashboard', 'Data Management'],
    emoji: '☁️',
    gradient: 'linear-gradient(135deg, rgba(255,150,0,0.15) 0%, rgba(100,60,0,0.1) 100%)',
    type: 'regular',
    label: 'Cloud · 2025',
  },
  {
    title: 'AI Ethics Explorer',
    desc: 'Interactive learning tool that walks users through key principles of responsible AI and ethical considerations in generative AI systems.',
    tags: ['AI Ethics', 'Responsible AI', 'Education'],
    emoji: '⚖️',
    gradient: 'linear-gradient(135deg, rgba(191,0,255,0.15) 0%, transparent 100%)',
    type: 'small',
    label: 'AI · 2026',
  },
  {
    title: 'DataViz Portfolio',
    desc: 'A collection of data visualization projects using real-world datasets. Covers chart types, storytelling with data, and analytics dashboards.',
    tags: ['Data Visualization', 'Analytics', 'Charts'],
    emoji: '📊',
    gradient: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, transparent 100%)',
    type: 'small',
    label: 'Analytics · 2025',
  },
  {
    title: 'Linux SysAdmin Toolkit',
    desc: 'A set of bash scripts and automation tools for common Linux sysadmin tasks: user management, log parsing, and network diagnostics.',
    tags: ['Linux', 'Bash', 'Networking', 'Automation'],
    emoji: '🐧',
    gradient: 'linear-gradient(135deg, rgba(230,200,0,0.15) 0%, transparent 100%)',
    type: 'small',
    label: 'DevOps · 2024',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <article className={`project-card project-card--${project.type}`}>
    <div className="project-card__preview">
      <div className="project-card__preview-gradient" style={{ background: project.gradient }} />
      <div className="project-card__preview-bg">{project.emoji}</div>
      <div className="project-card__preview-label">{project.label}</div>
      <div className="project-card__preview-links">
        <button className="project-card__link-btn">GitHub ↗</button>
        <button className="project-card__link-btn">Live ↗</button>
      </div>
    </div>

    <div className="project-card__body">
      {project.isFeatured && (
        <div className="project-card__featured-badge">Featured Project</div>
      )}
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.desc}</p>
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-card__tag">{tag}</span>
        ))}
      </div>
    </div>
  </article>
);

const Projects: React.FC = () => (
  <section className="projects" id="projects">
    <div className="container">
      <div className="projects__header">
        <div>
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
        </div>
        <div className="projects__see-all">
          View All on GitHub →
        </div>
      </div>

      <div className="projects__grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
