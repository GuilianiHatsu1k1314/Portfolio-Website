import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact'];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="navbar__logo-bracket">[</span>
        GLP
        <span className="navbar__logo-bracket">]</span>
      </div>

      <div className="navbar__status">
        <div className="navbar__status-dot" />
        OPEN TO WORK
      </div>

      <ul className="navbar__links">
        {NAV_LINKS.map((link) => (
          <li
            key={link}
            className={`navbar__link${active === link ? ' active' : ''}`}
            onClick={() => scrollTo(link)}
          >
            {link}
          </li>
        ))}
      </ul>

      <button className="navbar__cta" onClick={() => scrollTo('Contact')}>
        Hire Me
      </button>

      <div className="navbar__hamburger">
        <span /><span /><span />
      </div>
    </nav>
  );
};

export default Navbar;
