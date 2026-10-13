import { motion } from 'framer-motion';
import { Terminal, Brain, Globe, Cloud, Database, Cpu, BarChart3, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.categories.lang,
      icon: Terminal,
      color: "from-blue-500 to-indigo-500",
      skills: ["Python", "Kotlin", "C", "Java", "JavaScript", "MATLAB", "R", "TypeScript"]
    },
    {
      title: t.skills.categories.ai,
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: ["PyTorch", "Scikit-learn", "TensorFlow", "CNN", "YOLO (Ultralytics YOLOv8)"]
    },
    {
      title: t.skills.categories.web,
      icon: Globe,
      color: "from-sky-500 to-blue-600",
      skills: ["Flask", "Django", "Streamlit", "React.js", "Angular", "HTML", "CSS", "PHP", "Bootstrap", "WebSocket", "Tailwind"]
    },
    {
      title: t.skills.categories.bd,
      icon: Cloud,
      color: "from-indigo-500 to-cyan-500",
      skills: ["Apache", "Hadoop", "Cloudera", "Google Cloud"]
    },
    {
      title: t.skills.categories.db,
      icon: Database,
      color: "from-emerald-500 to-teal-600",
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Redis", "Oracle (SQL, PL/SQL)", "DB Administration"]
    },
    {
      title: t.skills.categories.iot,
      icon: Cpu,
      color: "from-amber-500 to-orange-600",
      skills: ["Arduino", "SolidWorks", "Catia V5", "PCB Design", "Soldering"]
    },
    {
      title: t.skills.categories.de,
      icon: BarChart3,
      color: "from-teal-500 to-cyan-600",
      skills: ["ETL", "Talend", "Power BI", "Tableau", "Web Scraping"]
    },
    {
      title: t.skills.categories.tools,
      icon: Wrench,
      color: "from-slate-400 to-slate-600",
      skills: ["Git", "GitHub", "Office365", "LaTeX (Overleaf)", "Notion", "ClickUp", "Jira"]
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

  return (
    <section id="skills" className="py-24 bg-slate-950 -mt-px border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md mb-6 shadow-sm">
            <h2 className="text-[9px] uppercase tracking-widest font-bold text-blue-400">{t.skills.badge}</h2>
          </motion.div>
          <motion.h3 variants={fadeInUp} transition={{ delay: 0.05 }} className="text-4xl md:text-5xl font-bold text-white leading-tight">{t.skills.title}</motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  initial: { opacity: 0, y: 15 },
                  whileInView: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.4, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-6 glass-card rounded-2xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-all duration-300">
                      <Icon size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">{category.title}</h4>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2.5 py-1 bg-slate-950 border border-slate-800/80 rounded-md text-[11px] font-medium text-slate-400 group-hover:text-slate-300 hover:text-white hover:border-blue-500/30 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
