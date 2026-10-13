import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';
import profilePhoto from '../assets/profile_photo.jpeg';
import resumeEng from '../assets/Bouita_Yassir_CV_ENG.pdf';
import resumeFr from '../assets/Bouita_Yassir_CV_Fr.pdf';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { language, t } = useLanguage();
  const standardTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };
  
  const currentResume = language === 'fr' ? resumeFr : resumeEng;
  const currentResumeName = language === 'fr' ? 'Bouita_Yassir_CV_Fr.pdf' : 'Bouita_Yassir_CV_ENG.pdf';

  const defaultRoles = [
    "IoT & Smart Systems",
    "Computer Vision & YOLOv8",
    "Full-Stack Architecture",
    "Embedded Systems & Robotics"
  ];

  const roles = t.hero.roles || defaultRoles;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: standardTransition
    },
  };

  const buttonHover = {
    y: -3,
    transition: { type: "spring", stiffness: 400, damping: 15 }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-[240px] md:w-[350px] h-[240px] md:h-[350px] bg-blue-600/10 rounded-full blur-[90px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[280px] md:w-[450px] h-[280px] md:h-[450px] bg-indigo-600/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <motion.div
              initial="initial"
              animate="animate"
              className="text-center lg:text-left order-2 lg:order-1"
            >
            {/* Seeking Badge with Minimal Live Dot */}
            <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider mb-6 lg:mb-8"
            >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{t.hero.statusAvailable || t.hero.seeking}</span>
            </motion.div>

            <motion.h1 
                variants={fadeInUp}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 lg:mb-6 leading-[1.08] tracking-tight text-white"
            >
                {t.hero.greeting} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-indigo-400">
                {t.hero.name}
                </span>
            </motion.h1>

            {/* Clean Role Cycler without AI icons */}
            <motion.div 
              variants={fadeInUp}
              className="h-7 flex items-center justify-center lg:justify-start mb-6"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-blue-400 font-semibold text-sm tracking-wide"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.h2 
                variants={fadeInUp}
                transition={{ ...standardTransition, delay: 0.1 }}
                className="text-base sm:text-lg md:text-xl font-medium text-slate-300 mb-6 lg:mb-8 flex items-center justify-center lg:justify-start gap-4 opacity-90"
            >
                <div className="hidden sm:block h-[1px] w-8 lg:w-12 bg-blue-500/30"></div>
                {t.hero.degree}
            </motion.h2>

            <motion.p 
                variants={fadeInUp}
                transition={{ ...standardTransition, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 lg:mb-10 leading-relaxed font-normal"
            >
                {t.hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div 
                variants={fadeInUp}
                transition={{ ...standardTransition, delay: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-10"
            >
                <motion.a
                  href="#projects"
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 text-xs uppercase tracking-wider transition-colors duration-300"
                >
                  {t.hero.viewProjects} 
                  <ChevronRight size={15} />
                </motion.a>

                <motion.a
                  href={currentResume}
                  download={currentResumeName}
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-7 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 rounded-xl font-bold flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all duration-300"
                >
                  <span>{t.hero.downloadCv}</span>
                  <Download size={14} />
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-7 py-3.5 bg-slate-900/40 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white rounded-xl font-bold flex items-center justify-center text-xs uppercase tracking-wider transition-colors duration-300"
                >
                  {t.hero.contactMe}
                </motion.a>
            </motion.div>

            {/* Credibility highlights - clean minimal pills without trophy/grad icons */}
            <motion.div
              variants={fadeInUp}
              transition={{ ...standardTransition, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 border-t border-slate-900/60 text-xs text-slate-400"
            >
              <span className="px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-lg text-[11px] font-medium">
                Major de Promotion (FSR)
              </span>
              <span className="px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-lg text-[11px] font-medium">
                M.Sc. IT & Systems (INSEA)
              </span>
              <span className="px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-lg text-[11px] font-medium">
                11+ Projects
              </span>
            </motion.div>
            </motion.div>

            {/* Right Content - Clean framed portrait without floating gimmick badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative group max-w-[300px] sm:max-w-[400px] lg:max-w-none">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-blue-500/10 rounded-[2.5rem] -z-10 blur-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-700"></div>

                <div className="relative rounded-2xl overflow-hidden glass-panel p-2 shadow-2xl">
                  <img 
                    src={profilePhoto} 
                    alt="Yassir Bouita" 
                    className="w-full aspect-square md:w-[420px] md:h-[420px] object-cover rounded-xl transition duration-700 grayscale-0 lg:grayscale lg:group-hover:grayscale-0 lg:group-hover:scale-[1.01]" 
                  />
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
