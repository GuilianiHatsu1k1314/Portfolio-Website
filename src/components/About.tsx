import React from 'react';
import './About.css';

const WORK = [
  {
    title: 'Fullstack Developer Trainee',
    company: 'Juan D. Nepomuceno Sons Inc.',
    date: 'Jan 2026 – Apr 2026',
    desc: 'Developed a full-stack internal system covering database design, frontend UI, backend APIs, and integration. Gained hands-on experience in the complete software development lifecycle within a real-world enterprise environment.',
    icon: '⚡',
    variant: 'work',
  },
];

const EDU = [
  {
    title: 'Bachelor of Science in Computer Science',
    company: 'Holy Angel University (HAU) — Pampanga',
    date: 'Apr 2026',
    desc: 'Graduated with a focus on Computer Science and Information Technology. Dean\'s Lister in 3rd Year, 2nd Semester (April 2025). Active participant in Cisco Networking Academy and regional tech conferences.',
    icon: '🎓',
    variant: 'edu',
  },
];

const SEMINARS = [
  {
    title: 'Cisco Networking Academy Student Congress 2026',
    company: '"Future Proofing Networking Skills In The Philippines"',
    date: '2026',
    desc: 'Participated in the national-level congress exploring the future of networking careers and infrastructure in the Philippine tech landscape.',
    icon: '🌐',
    variant: 'award',
  },
  {
    title: '1st Regional AI Conference 2025',
    company: 'PGN Auditorium, Holy Angel University',
    date: '2025',
    desc: 'Attended a regional conference on reinventing learning through Artificial Intelligence, gaining insights on AI-driven education and responsible AI practices.',
    icon: '🤖',
    variant: 'award',
  },
];

const About: React.FC = () => (
  <section className="about" id="about">
    <div className="container">
      <div className="about__inner">
        {/* Left: text */}
        <div className="about__text-block">
          <div className="about__header">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              A CS graduate who <span className="highlight">ships real things</span>
            </h2>
          </div>

          <div className="about__body">
            <p>
              I'm <strong>Guiliani Louis Habig Pobre</strong>, a freshly graduated Computer Science student from Holy Angel University in Pampanga, Philippines. I'm passionate about building robust systems — from the database layer all the way up to the user interface.
            </p>
            <p>
              My interests span <strong>fullstack development, cybersecurity, cloud computing, and AI</strong>. I hold certifications in CCNA Networking, AWS Cloud Foundations, Cyber Threat Management, and Data Analytics — and I'm always chasing the next one.
            </p>
            <p>
              My goal is simple: <strong>finish strong, land a meaningful role, build financial stability</strong>, and create software that makes a real impact along the way. I'm open to work and ready to contribute.
            </p>
          </div>

          <div className="about__signature">// Guiliani Pobre</div>
        </div>

        {/* Right: timeline cards */}
        <div className="about__cards">
          <div className="about__cards-section-label">Experience</div>
          {WORK.map((item) => (
            <div key={item.title} className={`about__card about__card--${item.variant}`}>
              <div className="about__card-icon">{item.icon}</div>
              <div className="about__card-header">
                <div className="about__card-title">{item.title}</div>
                <div className="about__card-date">{item.date}</div>
              </div>
              <div className="about__card-company">{item.company}</div>
              <div className="about__card-desc">{item.desc}</div>
            </div>
          ))}

          <div className="about__cards-section-label">Education</div>
          {EDU.map((item) => (
            <div key={item.title} className={`about__card about__card--${item.variant}`}>
              <div className="about__card-icon">{item.icon}</div>
              <div className="about__card-header">
                <div className="about__card-title">{item.title}</div>
                <div className="about__card-date">{item.date}</div>
              </div>
              <div className="about__card-company">{item.company}</div>
              <div className="about__card-desc">{item.desc}</div>
            </div>
          ))}

          <div className="about__cards-section-label">Seminars &amp; Conferences</div>
          {SEMINARS.map((item) => (
            <div key={item.title} className={`about__card about__card--${item.variant}`}>
              <div className="about__card-icon">{item.icon}</div>
              <div className="about__card-header">
                <div className="about__card-title">{item.title}</div>
                <div className="about__card-date">{item.date}</div>
              </div>
              <div className="about__card-company">{item.company}</div>
              <div className="about__card-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
