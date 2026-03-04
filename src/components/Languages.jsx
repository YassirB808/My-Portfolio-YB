import { motion } from 'framer-motion';
import { Languages as LangIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Languages = () => {
  const { t } = useLanguage();

  const languagesData = [
    { name: t.languages.items.arabic, level: t.languages.levels.native, percentage: 100 },
    { name: t.languages.items.french, level: t.languages.levels.fluent, percentage: 95 },
    { name: t.languages.items.english, level: t.languages.levels.fluent, percentage: 90 },
    { name: t.languages.items.asl, level: t.languages.levels.beginner, percentage: 25 },
    { name: t.languages.items.spanish, level: t.languages.levels.beginner, percentage: 20 }
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
    <section id="languages" className="py-24 bg-slate-950 -mt-px border-t border-slate-900">
      <div className="container mx-auto px-6">
        <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md mb-6 shadow-sm">
            <h2 className="text-[9px] uppercase tracking-widest font-bold text-blue-400">{t.languages.badge}</h2>
          </motion.div>
          <motion.h3 variants={fadeInUp} transition={{ delay: 0.05 }} className="text-4xl md:text-5xl font-bold text-white leading-tight">{t.languages.title}</motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languagesData.map((lang, index) => (
            <motion.div
              key={index}
              variants={{
                initial: { opacity: 0, scale: 0.95 },
                whileInView: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.5, delay: index * 0.1 }
                }
              }}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <LangIcon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{lang.name}</h4>
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{lang.level}</span>
                  </div>
                </div>
              </div>

              <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
