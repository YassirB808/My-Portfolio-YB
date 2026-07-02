import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projectsData = [
    {
      title: "NeuroscanAI",
      description: t.projects.items.neuroscan,
      techStack: ["FastAPI", "YOLOv8", "OpenCV", "Flask", "Jupyter", "Chart.js"],
      githubLink: "https://github.com/YassirB808",
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Academic Orientation AgenticAI",
      description: t.projects.items.academicOrientation,
      techStack: ["Agentic AI", "React", "Python", "Chatbot", "TailwindCSS"],
      githubLink: "https://www.linkedin.com/feed/update/urn:li:activity:7464358772405235713/",
      color: "from-sky-500 to-blue-600"
    },
    {
      title: "Mindspark",
      description: t.projects.items.mindspark,
      techStack: ["Django", "WebSocket", "Channels", "Bootstrap", "SQLite"],
      githubLink: "https://github.com/YassirB808",
      color: "from-indigo-600 to-purple-600"
    },
    {
      title: "Portfolio Project INSEA",
      description: t.projects.items.portfolioInsea,
      techStack: ["React.js", "TailwindCSS", "Kotlin", "Vite", "Framer Motion"],
      githubLink: "https://github.com/YassirB808/PortfolioProjectINSEA",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Gestion Réparation",
      description: t.projects.items.gestionReparation,
      techStack: ["Java", "JSP", "Servlets", "HTML/CSS", "JavaScript"],
      githubLink: "https://www.linkedin.com/feed/update/urn:li:activity:7464694372853301248/",
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Xpenses",
      description: t.projects.items.xpenses,
      techStack: ["Flutter", "Dart", "Firebase", "Hive", "OpenAI"],
      githubLink: "https://github.com/ZikoKai/xpenses",
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Gesture-Controlled Robotic Arm",
      description: t.projects.items.roboticArm,
      techStack: ["Arduino", "C/C++", "Sensors", "Bluetooth", "AutoCAD"],
      githubLink: "https://www.linkedin.com/in/yassir-bouita-50173828a/details/projects/",
      color: "from-orange-600 to-amber-500"
    },
    {
      title: "Projet PHP - Page INSEA",
      description: t.projects.items.projetPhpInsea,
      techStack: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      githubLink: "https://github.com/YassirB808/ProjetPHP-PageINSEA",
      color: "from-indigo-500 to-cyan-500"
    },
    {
      title: "Archix-Frontend",
      description: t.projects.items.archix,
      techStack: ["TypeScript", "React", "TailwindCSS"],
      githubLink: "https://github.com/YassirB808",
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "AQI-MONITORING",
      description: t.projects.items.aqi,
      techStack: ["Ubidots", "Flask", "HTML", "Sensors"],
      githubLink: "https://github.com/YassirB808",
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "Handwritten Recognition",
      description: t.projects.items.handwritten,
      techStack: ["Jupyter", "TensorFlow", "Scikit-learn"],
      githubLink: "https://github.com/YassirB808",
      color: "from-orange-600 to-red-600"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const cardHover = {
    y: -5,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  };

  return (
    <section id="projects" className="py-24 bg-slate-950 -mt-px">
      <div className="container mx-auto px-6">
        <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md mb-6 shadow-sm">
            <h2 className="text-[9px] uppercase tracking-widest font-bold text-blue-400">{t.projects.badge}</h2>
          </motion.div>
          <motion.h3 variants={fadeInUp} transition={{ delay: 0.05 }} className="text-4xl md:text-5xl font-bold text-white leading-tight">{t.projects.title}</motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }
                }
              }}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              whileHover={cardHover}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-colors duration-300 shadow-xl"
            >
              <div className={`h-24 sm:h-32 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-all duration-500 flex items-center justify-center`}>
                <Code2 className="text-white opacity-20 group-hover:scale-110 transition-transform duration-500 w-9 h-9 sm:w-12 sm:h-12" />
              </div>

              <div className="p-5 sm:p-8">
                <div className="flex justify-between items-start mb-3 sm:mb-4 gap-2">
                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight duration-300">{project.title}</h4>
                  <div className="flex gap-2">
                    <motion.a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-slate-400 hover:text-white bg-slate-950 p-1.5 sm:p-2 rounded-lg border border-slate-800 hover:border-blue-500/30 transition-all flex-shrink-0"
                    >
                      <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </motion.a>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-4 sm:mb-6 leading-relaxed line-clamp-4 sm:line-clamp-none">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                        key={techIndex} 
                        className="text-[9px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md uppercase tracking-widest border border-blue-500/10 group-hover:border-blue-500/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
