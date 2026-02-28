import { motion } from 'framer-motion';
import { Github, Code2 } from 'lucide-react';

const projectsData = [
  {
    title: "NeuroscanAI",
    description: "A medical web application utilizing the YOLOv8n model to automatically detect brain tumors in MRI scans with real-time predictions at 81% accuracy.",
    techStack: ["FastAPI", "YOLOv8", "OpenCV", "Flask", "Jupyter", "Chart.js"],
    githubLink: "https://github.com/YassirB808",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Mindspark",
    description: "A real-time multiplayer trivia game enabling seamless live competition between users with a fully responsive front-end.",
    techStack: ["Django", "WebSocket", "Channels", "Bootstrap", "SQLite"],
    githubLink: "https://github.com/YassirB808",
    color: "from-indigo-600 to-purple-600"
  },
  {
    title: "Archix-Frontend",
    description: "Frontend architecture repository focusing on scalability, performance, and modern UI design principles.",
    techStack: ["TypeScript", "React", "TailwindCSS"],
    githubLink: "https://github.com/YassirB808",
    color: "from-blue-400 to-cyan-400"
  },
  {
    title: "AQI-MONITORING",
    description: "Air quality monitoring application providing real-time environmental data visualization.",
    techStack: ["Ubidots", "Flask", "HTML", "Sensors"],
    githubLink: "https://github.com/YassirB808",
    color: "from-emerald-600 to-teal-600"
  },
  {
    title: "Handwritten Recognition",
    description: "Machine learning model for character recognition utilizing advanced neural network architectures.",
    techStack: ["Jupyter", "TensorFlow", "Scikit-learn"],
    githubLink: "https://github.com/YassirB808",
    color: "from-orange-600 to-red-600"
  }
];

const Projects = () => {
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
            <h2 className="text-[9px] uppercase tracking-widest font-bold text-blue-400">My Portfolio</h2>
          </motion.div>
          <motion.h3 variants={fadeInUp} transition={{ delay: 0.05 }} className="text-4xl md:text-5xl font-bold text-white leading-tight">Featured Projects</motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className={`h-32 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-all duration-500 flex items-center justify-center`}>
                <Code2 size={48} className="text-white opacity-20 group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight duration-300">{project.title}</h4>
                  <div className="flex gap-2">
                    <motion.a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-slate-400 hover:text-white bg-slate-950 p-2 rounded-lg border border-slate-800 hover:border-blue-500/30 transition-all"
                    >
                      <Github size={18} />
                    </motion.a>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                        key={techIndex} 
                        className="text-[9px] font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md uppercase tracking-widest border border-blue-500/10 group-hover:border-blue-500/30 transition-colors duration-300"
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
