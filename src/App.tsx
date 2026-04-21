import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Sparkles,
  ArrowRight,
  Code2,
  Cpu,
  Database,
  Layers,
  Zap
} from 'lucide-react';

import profileImg from './assets/hero.png';
import './index.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 }
};

const sectionStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="loading-screen"
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div 
        className="loader-logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        TUAN LE<span style={{ color: '#3b82f6' }}>.</span>
      </motion.div>
      <div className="loader-bar-bg">
        <motion.div 
          className="loader-bar-fill" 
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      <div className="loader-number">{progress}%</div>
    </motion.div>
  );
};

const ProjectCard = ({ title, description, tags, delay }: any) => {
  const ref = useRef(null);
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -12, rotateX: 2, rotateY: -2 }}
      className="crystal-panel card-3d project-card"
    >
      <div className="badge project-badge">Project</div>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-tags">
        {tags.map((tag: string) => (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
      <motion.a 
        href="#"
        whileHover={{ x: 5 }}
        className="project-link"
      >
        View Details <ArrowRight size={18} />
      </motion.a>
    </motion.div>
  );
};

const TechItem = ({ icon: Icon, label }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className="tech-pill"
  >
    <Icon size={16} color="#3f68ff" />
    {label}
  </motion.div>
);

const experiences = [
  {
    company: 'Finbud AI',
    role: 'Software Engineer Intern',
    date: 'Jan 2026 - Present',
    summary: 'Built AI products end to end across chatbot intelligence, RAG reliability, and production backend flows.',
    tasks: [
      'Developed chatbot product flows for real user prompts and response quality improvements.',
      'Built a RAG pipeline to increase analysis accuracy and reduce model hallucination in financial contexts.',
      'Implemented React + Node.js features end to end, from UI components to backend service integration.',
      'Collaborated on backend APIs and deployment workflows to ship AI features into production faster.'
    ]
  },
  {
    company: 'Career Hub',
    role: 'Full-stack Intern',
    date: 'Sep 2025 - Dec 2025',
    summary: 'Delivered full-stack product features with strong focus on reliability, UX clarity, and documentation.',
    tasks: [
      'Built and maintained frontend modules with React for student-facing product experiences.',
      'Implemented backend endpoints and business logic for feature delivery and data consistency.',
      'Supported technical documentation to speed up onboarding and cross-team handoff.',
      'Worked across product and engineering feedback loops to iterate features quickly.'
    ]
  }
];

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-main">
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div className="mesh-gradient" />
      
      <motion.div 
        style={{ 
          scaleX, 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '4px', 
          background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', 
          zIndex: 2000,
          transformOrigin: '0%' 
        }} 
      />

      {!loading && (
        <motion.div 
          className="entrance-ready"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <nav>
            <div className="nav-brand-wrap">
              <div className="nav-logo">TL</div>
              <span className="nav-brand">Tuan Le</span>
            </div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Exp</a></li>
              <li><a href="#projects">Work</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="nav-cta"
            >
              Contact Me
            </motion.button>
          </nav>

          <main className="page-shell">
            <section id="about" className="hero">
              <motion.div 
                className="hero-content"
                variants={sectionStagger}
                initial="hidden"
                animate="show"
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.div className="hero-kicker-row" variants={fadeUp}>
                  <div className="hero-kicker">
                    NORTHEASTERN UNIVERSITY
                  </div>
                  <Sparkles size={18} color="#f59e0b" fill="#f59e0b" />
                </motion.div>
                
                <motion.h1 className="hero-title" variants={fadeUp}>
                  Software & <br />
                  <span className="gradient-text">AI Engineer</span>
                </motion.h1>
                
                <motion.p className="hero-lead" variants={fadeUp}>
                  Building scalable agents and full-stack ecosystems. 
                  Bridging <span style={{ color: '#3b82f6' }}>Machine Intelligence</span> with <span style={{ color: '#8b5cf6' }}>Modern Architecture.</span>
                </motion.p>

                <motion.div className="tech-grid" variants={fadeUp}>
                  <TechItem icon={Globe} label="Next.js" />
                  <TechItem icon={Code2} label="Python" />
                  <TechItem icon={Zap} label="LangChain" />
                  <TechItem icon={Cpu} label="TensorFlow" />
                  <TechItem icon={Database} label="PostgreSQL" />
                  <TechItem icon={Layers} label="Docker" />
                </motion.div>

                <motion.div className="hero-actions" variants={fadeUp}>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary"
                  >
                    Work Experience
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-secondary"
                  >
                    Download CV
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div 
                className="hero-image-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="main-img-wrapper crystal-panel">
                  <div className="photo-badge">GPA 4.0/4.0 Scholar</div>
                  <img src={profileImg} alt="Tuan Le" className="main-img" />
                </div>
              </motion.div>
            </section>

            <section id="skills" className="stats-section">
              <div className="stats-grid">
                {[
                  { label: 'TOP-TIER GPA', value: '4.0', sub: 'Northeastern University' },
                  { label: 'SYSTEMS', value: '100K+', sub: 'Market Data Points' },
                  { label: 'AI PROJECTS', value: '15+', sub: 'Deployed Solutions' }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    className="crystal-panel"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.12 }}
                    whileHover={{ y: -8 }}
                    style={{ padding: '40px 30px', textAlign: 'center' }}
                  >
                    <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px' }}>{stat.label}</div>
                    <div className="gradient-text" style={{ fontSize: '3rem', marginBottom: '8px', fontWeight: 800 }}>{stat.value}</div>
                    <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600 }}>{stat.sub}</div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section id="experience" className="experience-section">
              <div className="section-head">
                <h2 className="hero-title section-title">Experience</h2>
              </div>
              <div className="experience-list">
                {experiences.map((exp, i) => (
                  <motion.div 
                    key={i}
                    className="crystal-panel exp-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="exp-content">
                      <h3 className="exp-company">{exp.company}</h3>
                      <p className="gradient-text exp-role">{exp.role}</p>
                      <p className="exp-summary">{exp.summary}</p>
                      <ul className="exp-tasks">
                        {exp.tasks.map((task) => (
                          <li key={task}>{task}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="badge">{exp.date}</div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section id="projects" className="projects-section">
              <h2 className="projects-title">Featured Works</h2>
              <div className="project-grid">
                <ProjectCard title="FinDeep" description="Multi-agent LLM systems." tags={["Python", "LangChain"]} delay={0.1} />
                <ProjectCard title="Recipe Gen" description="REST API based discovery." tags={["Node.js", "React"]} delay={0.2} />
              </div>
            </section>
            
            <section id="contact" className="contact-section">
              <div className="crystal-panel contact-panel">
                <h2 className="contact-title">Let&apos;s Build.</h2>
                <p className="contact-sub">Fast execution, clear ownership, and deep engineering craft for AI-native products.</p>
                <motion.a href="mailto:contact@tuanle.dev" className="contact-link">
                  Start Conversation
                </motion.a>
              </div>
            </section>
          </main>
        </motion.div>
      )}
    </div>
  );
}

export default App;
