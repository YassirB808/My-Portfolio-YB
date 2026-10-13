import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Search, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const projectsData = [
    {
      id: "neuroscan",
      title: "NeuroscanAI",
      category: "ai",
      badge: "81% Accuracy",
      description: t.projects.items.neuroscan,
      techStack: ["FastAPI", "YOLOv8", "OpenCV", "Flask", "Chart.js"],
      link: "https://github.com/YassirB808"
    },
    {
      id: "academic-orientation",
      title: "Academic Orientation AgenticAI",
      category: "ai",
      badge: "Agentic AI",
      description: t.projects.items.academicOrientation,
      techStack: ["Agentic AI", "React", "Python", "Chatbot", "TailwindCSS"],
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7464358772405235713/"
    },
    {
      id: "robotic-arm",
      title: "Gesture-Controlled Robotic Arm",
      category: "iot",
      badge: "Hardware & BLE",
      description: t.projects.items.roboticArm,
      techStack: ["Arduino", "C/C++", "Sensors", "Bluetooth", "AutoCAD"],
      link: "https://www.linkedin.com/in/yassir-bouita-50173828a/details/projects/"
    },
    {
      id: "aqi",
      title: "AQI-MONITORING",
      category: "iot",
      badge: "IoT & Cloud",
      description: t.projects.items.aqi,
      techStack: ["Ubidots", "Flask", "HTML", "Sensors"],
      link: "https://github.com/YassirB808"
    },
    {
      id: "mindspark",
      title: "Mindspark",
      category: "web",
      badge: "Real-Time WebSocket",
      description: t.projects.items.mindspark,
      techStack: ["Django", "WebSocket", "Channels", "Bootstrap", "SQLite"],
      link: "https://github.com/YassirB808"
    },
    {
      id: "portfolio-insea",
      title: "Portfolio Project INSEA",
      category: "web",
      badge: "React & Vite",
      description: t.projects.items.portfolioInsea,
      techStack: ["React.js", "TailwindCSS", "Kotlin", "Vite", "Framer Motion"],
      link: "https://github.com/YassirB808/PortfolioProjectINSEA"
    },
    {
      id: "archix",
      title: "Archix-Frontend",
      category: "web",
      badge: "Architecture",
      description: t.projects.items.archix,
      techStack: ["TypeScript", "React", "TailwindCSS"],
      link: "https://github.com/YassirB808"
    },
    {
      id: "gestion-reparation",
      title: "Gestion Réparation",
      category: "web",
      badge: "Java OOP",
      description: t.projects.items.gestionReparation,
      techStack: ["Java", "JSP", "Servlets", "HTML/CSS", "JavaScript"],
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7464694372853301248/"
    },
    {
      id: "projet-php",
      title: "Projet PHP - Page INSEA",
      category: "web",
      badge: "Full-Stack Portal",
      description: t.projects.items.projetPhpInsea,
      techStack: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      link: "https://github.com/YassirB808/ProjetPHP-PageINSEA"
    },
    {
      id: "xpenses",
      title: "Xpenses",
      category: "mobile",
      badge: "Flutter & OpenAI",
      description: t.projects.items.xpenses,
      techStack: ["Flutter", "Dart", "Firebase", "Hive", "OpenAI"],
      link: "https://github.com/ZikoKai/xpenses"
    },
    {
      id: "handwritten",
      title: "Handwritten Recognition",
      category: "ai",
      badge: "Neural Network",
      description: t.projects.items.handwritten,
      techStack: ["Jupyter", "TensorFlow", "Scikit-learn"],
      link: "https://github.com/YassirB808"
    }
  ];

  const categories = [
    { key: 'all', label: t.projects.categories.all, count: projectsData.length },
    { key: 'ai', label: t.projects.categories.ai, count: projectsData.filter(p => p.category === 'ai').length },
    { key: 'iot', label: t.projects.categories.iot, count: projectsData.filter(p => p.category === 'iot').length },
    { key: 'web', label: t.projects.categories.web, count: projectsData.filter(p => p.category === 'web').length },
    { key: 'mobile', label: t.projects.categories.mobile, count: projectsData.filter(p => p.category === 'mobile').length },
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.techStack.some(tech => tech.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  const getLinkMeta = (url) => {
    if (url.includes('github.com')) {
      return { icon: Github, label: t.projects.links?.code || 'Code' };
    }
    if (url.includes('linkedin.com')) {
      return { icon: Linkedin, label: t.projects.links?.demo || 'Demo' };
    }
    return { icon: ExternalLink, label: t.projects.links?.view || 'View' };
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="projects" className="py-24 relative -mt-px">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-10"
        >
          <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md mb-6 shadow-sm">
            <h2 className="text-[9px] uppercase tracking-widest font-bold text-blue-400">{t.projects.badge}</h2>
          </motion.div>
          <motion.h3 variants={fadeInUp} transition={{ delay: 0.05 }} className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {t.projects.title}
          </motion.h3>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.projects.searchPlaceholder || "Search projects or tech..."}
            className="w-full pl-11 pr-10 py-2.5 bg-slate-900/60 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all backdrop-blur-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white p-1 cursor-pointer"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                    : 'glass-pill text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center text-slate-400 glass-card rounded-2xl max-w-md mx-auto">
            <p className="text-sm font-medium mb-4">{t.projects.noResults || "No projects match your search criteria."}</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="px-4 py-2 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/20 rounded-lg text-xs font-bold transition-all cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => {
                const linkMeta = getLinkMeta(project.link);

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -4 }}
                    className="group relative glass-card rounded-2xl overflow-hidden flex flex-col justify-between p-6 sm:p-7"
                  >
                    <div>
                      {/* Top Header: Badge & Destination Link */}
                      <div className="flex items-center justify-between mb-4 gap-2">
                        {project.badge ? (
                          <span className="text-[10px] font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md uppercase tracking-wider">
                            {project.badge}
                          </span>
                        ) : <span />}

                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} on ${linkMeta.label}`}
                          className="flex items-center gap-1.5 text-slate-400 hover:text-white bg-slate-950/70 hover:bg-blue-600 px-2.5 py-1 rounded-lg border border-slate-800 hover:border-blue-500 transition-all text-xs font-medium"
                        >
                          <linkMeta.icon size={13} />
                          <span>{linkMeta.label}</span>
                        </a>
                      </div>

                      <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight mb-3">
                        {project.title}
                      </h4>

                      <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {project.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="text-[10px] font-medium text-slate-400 bg-slate-950/60 px-2 py-0.5 rounded border border-slate-800/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
