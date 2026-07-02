import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.categories.lang,
      skills: ["Python", "Kotlin", "C", "Java", "JavaScript", "MATLAB", "R", "TypeScript"]
    },
    {
      title: t.skills.categories.ai,
      skills: ["PyTorch", "Scikit-learn", "TensorFlow", "CNN", "YOLO (Ultralytics YOLOv8)"]
    },
    {
      title: t.skills.categories.web,
      skills: ["Flask", "Django", "Streamlit", "React.js", "Angular", "HTML", "CSS", "PHP", "Bootstrap", "WebSocket", "Tailwind"]
    },
    {
      title: t.skills.categories.bd,
      skills: ["Apache", "Hadoop", "Cloudera", "Google Cloud"]
    },
    {
      title: t.skills.categories.db,
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Redis", "Oracle (SQL, PL/SQL)", "DB Administration"]
    },
    {
      title: t.skills.categories.iot,
      skills: ["Arduino", "SolidWorks", "Catia V5", "PCB Design", "Soldering"]
    },
    {
      title: t.skills.categories.de,
      skills: ["ETL", "Talend", "Power BI", "Tableau", "Web Scraping"]
    },
    {
      title: t.skills.categories.tools,
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
      <div className="container mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={{
                initial: { opacity: 0, y: 15 },
                whileInView: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }
                }
              }}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group"
            >
              <h4 className="text-lg font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:border-blue-500/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
