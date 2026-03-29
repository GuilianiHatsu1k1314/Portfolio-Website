import React, { useState } from 'react';
import './Contact.css';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SOCIALS = [
  {
    icon: '🌐',
    platform: 'Resume / Portfolio Link',
    handle: 'glpobre.jobs180.com',
    href: 'http://glpobre.jobs180.com',
    color: 'rgba(0,245,255,0.8)',
  },
  {
    icon: '📧',
    platform: 'Email',
    handle: 'guilianipobre11@gmail.com',
    href: 'mailto:guilianipobre11@gmail.com',
    color: 'rgba(0,255,136,0.8)',
  },
  {
    icon: '📱',
    platform: 'Mobile',
    handle: '+63 909 006 4389',
    href: 'tel:+639090064389',
    color: 'rgba(255,0,170,0.8)',
  },
  {
    icon: '📍',
    platform: 'Location',
    handle: 'Pampanga, Central Luzon, Philippines 🇵🇭',
    href: 'https://maps.google.com/?q=Pampanga,Philippines',
    color: 'rgba(255,220,0,0.8)',
  },
];

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__inner">
          {/* Left: intro */}
          <div className="contact__intro">
            <p className="section-label">Let's Connect</p>
            <h2 className="section-title">
              Got an opportunity? <span className="highlight">Let's talk.</span>
            </h2>
            <p className="contact__tagline">
              I'm a fresh BSCS graduate from Holy Angel University, actively looking for my first full-time role in software development, cybersecurity, or cloud. If you have an opening or a project in mind — I'd love to hear from you.
            </p>

            <div className="contact__socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social"
                  style={{ '--social-color': s.color } as React.CSSProperties}
                >
                  <span className="contact__social-icon">{s.icon}</span>
                  <div className="contact__social-info">
                    <div className="contact__social-platform">{s.platform}</div>
                    <div className="contact__social-handle">{s.handle}</div>
                  </div>
                  <span className="contact__social-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="contact__form-wrapper">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">✅</div>
                <div className="contact__success-title">Message Received!</div>
                <p className="contact__success-text">
                  Thanks for reaching out! I'll get back to you as soon as I can.
                </p>
              </div>
            ) : (
              <>
                <div className="contact__form-title">// Send a message</div>

                <div className="contact__form-row">
                  <div className="contact__field">
                    <label className="contact__label" htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      className="contact__input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact__field">
                    <label className="contact__label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="contact__input"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label className="contact__label" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    className="contact__input"
                    placeholder="Job opportunity, project, etc."
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact__field">
                  <label className="contact__label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact__textarea"
                    placeholder="Tell me more..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button className="btn-neon contact__submit" onClick={handleSubmit}>
                  Send Message →
                </button>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="contact__footer">
          <div className="contact__footer-copy">
            © 2026 Guiliani Louis Habig Pobre — All rights reserved
          </div>
          <div className="contact__footer-built">
            Built with <span>♥</span> · BSCS, Holy Angel University
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
