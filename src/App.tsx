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
      className="crystal-panel card-3d"
    >
      <div className="badge" style={{ marginBottom: '15px' }}>Project</div>
      <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', fontWeight: 700 }}>{title}</h3>
      <p style={{ color: '#64748b', marginBottom: '25px' }}>{description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
        {tags.map((tag: string) => (
          <span key={tag} style={{ background: '#f1f5f9', padding: '5px 12px', borderRadius: '100px', fontSize: '0.8rem', color: '#334155', fontWeight: 600 }}>
            {tag}
          </span>
        ))}
      </div>
      <motion.a 
        href="#"
        whileHover={{ x: 5 }}
        style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3b82f6', textDecoration: 'none', fontWeight: 700 }}
      >
        View Details <ArrowRight size={18} />
      </motion.a>
    </motion.div>
  );
};

const TechItem = ({ icon: Icon, label }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '8px', 
      padding: '8px 16px', 
      background: 'white', 
      borderRadius: '100px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
      fontSize: '0.9rem',
      fontWeight: 600,
      color: '#334155'
    }}
  >
    <Icon size={16} color="#3b82f6" />
    {label}
  </motion.div>
);

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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '40px', height: '40px', background: '#3b82f6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>TL</div>
              <span style={{ fontWeight: 800, fontSize: '1.25rem' }}>Tuan Le</span>
            </div>
            <ul className="nav-links">
              <li><a href="#about" style={{ fontWeight: 600 }}>About</a></li>
              <li><a href="#experience" style={{ fontWeight: 600 }}>Exp</a></li>
              <li><a href="#projects" style={{ fontWeight: 600 }}>Work</a></li>
              <li><a href="#skills" style={{ fontWeight: 600 }}>Skills</a></li>
            </ul>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                background: '#1e293b', 
                color: 'white', 
                border: 'none', 
                padding: '12px 28px', 
                borderRadius: '100px', 
                fontWeight: 700 
              }}
            >
              Contact Me
            </motion.button>
          </nav>

          <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <section className="hero">
              <motion.div 
                className="hero-content"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                  <div style={{ padding: '6px 18px', background: '#3b82f6', color: 'white', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 800 }}>
                    NORTHEASTERN UNIVERSITY
                  </div>
                  <Sparkles size={18} color="#f59e0b" fill="#f59e0b" />
                </div>
                
                <h1 className="hero-title">
                  Software & <br />
                  <span className="gradient-text">AI Engineer</span>
                </h1>
                
                <p style={{ fontSize: '1.5rem', color: '#475569', marginBottom: '40px', maxWidth: '650px', fontWeight: 600, lineHeight: '1.4' }}>
                  Building scalable agents and full-stack ecosystems. 
                  Bridging <span style={{ color: '#3b82f6' }}>Machine Intelligence</span> with <span style={{ color: '#8b5cf6' }}>Modern Architecture.</span>
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '50px' }}>
                  <TechItem icon={Globe} label="Next.js" />
                  <TechItem icon={Code2} label="Python" />
                  <TechItem icon={Zap} label="LangChain" />
                  <TechItem icon={Cpu} label="TensorFlow" />
                  <TechItem icon={Database} label="PostgreSQL" />
                  <TechItem icon={Layers} label="Docker" />
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="crystal-panel"
                    style={{ background: '#3b82f6', color: 'white', padding: '20px 45px', border: 'none', fontWeight: 800, fontSize: '1.1rem' }}
                  >
                    Work Experience
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ background: 'transparent', padding: '20px 45px', border: '2px solid #cbd5e1', borderRadius: '24px', fontWeight: 800 }}
                  >
                    Download CV
                  </motion.button>
                </div>
              </motion.div>

              <motion.div 
                className="hero-image-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="main-img-wrapper crystal-panel" style={{ borderRadius: '50px', background: 'white' }}>
                  <div className="photo-badge" style={{ zIndex: 10 }}>GPA 4.0/4.0 Scholar</div>
                  <img src={profileImg} alt="Tuan Le" className="main-img" />
                </div>
              </motion.div>
            </section>

            <section style={{ padding: '80px 0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                {[
                  { label: 'TOP-TIER GPA', value: '4.0', sub: 'Northeastern University' },
                  { label: 'SYSTEMS', value: '100K+', sub: 'Market Data Points' },
                  { label: 'AI PROJECTS', value: '15+', sub: 'Deployed Solutions' }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    className="crystal-panel"
                    style={{ padding: '40px 30px', textAlign: 'center' }}
                  >
                    <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px' }}>{stat.label}</div>
                    <div className="gradient-text" style={{ fontSize: '3rem', marginBottom: '8px', fontWeight: 800 }}>{stat.value}</div>
                    <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600 }}>{stat.sub}</div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section id="experience" style={{ padding: '150px 0' }}>
              <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2 className="hero-title" style={{ fontSize: '4rem' }}>Experience</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {[
                  { company: "FinbudAI", role: "Software Engineer Intern", date: "Jan 2026 – Pres", desc: "Architected quant-trading platforms." },
                  { company: "Career Hub", role: "Full-stack Intern", date: "Sep – Dec 2025", desc: "Led UI overhaul & tech docs." }
                ].map((exp, i) => (
                  <div key={i} className="crystal-panel" style={{ padding: '50px', display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '2.2rem', fontWeight: 800 }}>{exp.company}</h3>
                      <p className="gradient-text" style={{ fontWeight: 800 }}>{exp.role}</p>
                      <p style={{ color: '#64748b' }}>{exp.desc}</p>
                    </div>
                    <div className="badge">{exp.date}</div>
                  </div>
                ))}
              </div>
            </section>

            <section id="projects" style={{ padding: '150px 0' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '60px' }}>Featured Works</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                <ProjectCard title="FinDeep" description="Multi-agent LLM systems." tags={["Python", "LangChain"]} delay={0.1} />
                <ProjectCard title="Recipe Gen" description="REST API based discovery." tags={["Node.js", "React"]} delay={0.2} />
              </div>
            </section>
            
            <section id="contact" style={{ padding: '150px 0 100px 0', textAlign: 'center' }}>
              <div className="crystal-panel" style={{ padding: '120px 40px', background: '#0f172a', color: 'white' }}>
                <h2 style={{ fontSize: '4.5rem', fontWeight: 800 }}>Let's Build.</h2>
                <motion.a href="mailto:contact@tuanle.dev" className="crystal-panel" style={{ padding: '22px 70px', background: 'white', color: 'black', textDecoration: 'none', fontWeight: 900, display: 'inline-block', marginTop: '40px' }}>
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
