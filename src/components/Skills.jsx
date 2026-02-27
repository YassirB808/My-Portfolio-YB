import { motion } from 'framer-motion';
import { 
  Code2, 
  BrainCircuit, 
  Globe, 
  Database, 
  Cpu, 
  BarChart3, 
  Cloud 
} from 'lucide-react';

const skillsData = [
  {
    category: "Programming",
    icon: Code2,
    skills: ["Python", "C", "Java", "JS", "TS", "MATLAB", "R"]
  },
  {
    category: "AI & ML",
    icon: BrainCircuit,
    skills: ["PyTorch", "TensorFlow", "YOLOv8", "CNN"]
  },
  {
    category: "Web Tech",
    icon: Globe,
    skills: ["React.js", "Django", "FastAPI", "Tailwind"]
  },
  {
    category: "Big Data",
    icon: Cloud,
    skills: ["Apache Hadoop", "Cloudera", "GCP"]
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "Embedded",
    icon: Cpu,
    skills: ["Arduino", "SolidWorks", "PCB Design"]
  }
];

const Skills = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 -mt-px relative">
      <div className="container mx-auto px-6">
        <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md mb-6 shadow-sm">
            <h2 className="text-[9px] uppercase tracking-widest font-bold text-blue-400">My Toolbox</h2>
          </motion.div>
          <motion.h3 variants={fadeInUp} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-white leading-tight">Expertise & Skills</motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl hover:border-blue-500/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600/10 transition-colors duration-500">
                  <item.icon size={20} className="text-blue-500 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500" />
                </div>
                <h4 className="text-sm font-bold text-white leading-tight uppercase tracking-widest">{item.category}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-[9px] font-bold text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 group-hover:border-blue-500/20 group-hover:text-slate-200 transition-all duration-300 tracking-widest uppercase"
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
