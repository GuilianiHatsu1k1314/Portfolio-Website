// App.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const target = e.currentTarget.getAttribute("href");
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    };

    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => link.addEventListener("click", handleScroll));

    return () => links.forEach((link) => link.removeEventListener("click", handleScroll));
  }, []);

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-sm z-50 border-b border-cyan-400/20">
        <nav className="flex justify-center gap-10 py-4 text-sm uppercase tracking-widest">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="relative text-gray-400 hover:text-cyan-300 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-cyan-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Sections */}
      <main className="snap-y snap-mandatory h-screen overflow-scroll scroll-smooth">
        {/* Landing */}
        <Section id="home">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center space-y-6"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
              Hi, I’m <span className="text-white">Guiliani Pobre</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl">
              Full-Stack Developer | Futuristic Thinker
            </p>
            <a
              href="#projects"
              className="inline-block mt-6 px-8 py-3 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black text-cyan-300 font-medium transition-all shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]"
            >
              View My Work
            </a>
          </motion.div>
        </Section>

        {/* About */}
        <Section id="about">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto text-center space-y-6"
          >
            <h2 className="text-4xl font-semibold text-cyan-400 relative inline-block">
              About Me
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 blur-sm"></span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I’m a passionate developer who loves creating clean, futuristic web experiences
              with modern frameworks and smooth UX. My focus is on performance, aesthetics, 
              and intuitive interaction.
            </p>
          </motion.div>
        </Section>

        {/* Skills */}
        <Section id="skills">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-semibold text-cyan-400 mb-10 relative inline-block">
              Skills & Tools
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-pink-500 to-cyan-400 blur-sm"></span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              {["React", "Node.js", "Python", "TailwindCSS", "Flask", "SQL"].map((skill) => (
                <span
                  key={skill}
                  className="px-6 py-2 border border-cyan-400/40 rounded-full hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_10px_rgba(34,211,238,0.5)] hover:shadow-[0_0_20px_rgba(34,211,238,0.9)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* Projects */}
        <Section id="projects">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-4xl font-semibold text-cyan-400 mb-10 relative inline-block">
              Projects
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 blur-sm"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {["SmartTarget Ad System", "Portfolio Website", "Data Dashboard", "AI Face Detection"].map((project) => (
                <div
                  key={project}
                  className="p-8 border border-gray-700 rounded-2xl bg-gradient-to-br from-black to-gray-900 hover:from-cyan-900/20 hover:to-pink-900/20 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]"
                >
                  <h3 className="text-xl font-semibold mb-2 text-cyan-300">{project}</h3>
                  <p className="text-gray-400 text-sm">
                    A modern project showcasing innovation, creativity, and functionality.
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* Contact */}
        <Section id="contact">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl font-semibold text-cyan-400 relative inline-block">
              Contact Me
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-pink-500 to-cyan-400 blur-sm"></span>
            </h2>
            <p className="text-gray-400 text-lg">
              Let’s build something incredible together. Reach out anytime.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-block mt-4 px-8 py-3 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black text-cyan-300 font-medium transition-all shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]"
            >
              Send Message
            </a>
          </motion.div>
        </Section>
      </main>
    </div>
  );
}

function Section({ id, children }) {
  return (
    <section
      id={id}
      className="h-screen flex flex-col justify-center items-center px-8 snap-start relative"
    >
      {children}
    </section>
  );
}
