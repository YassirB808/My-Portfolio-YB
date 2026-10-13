import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Download, FileText, Award, Sparkles, GraduationCap } from 'lucide-react';
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
    y: -4,
    transition: { type: "spring", stiffness: 400, damping: 10 }
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
            {/* Seeking Badge with Pulsing Live Dot */}
            <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 lg:mb-8 shadow-sm"
            >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{t.hero.statusAvailable || t.hero.seeking}</span>
            </motion.div>

            <motion.h1 
                variants={fadeInUp}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 lg:mb-6 leading-[1.1] tracking-tight text-white"
            >
                {t.hero.greeting} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-indigo-400">
                {t.hero.name}
                </span>
            </motion.h1>

            {/* Fluid Role Cycler */}
            <motion.div 
              variants={fadeInUp}
              className="h-9 flex items-center justify-center lg:justify-start mb-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-bold tracking-wide backdrop-blur-sm"
                >
                  <Sparkles size={13} className="text-blue-400" />
                  <span>{roles[roleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.h2 
                variants={fadeInUp}
                transition={{ ...standardTransition, delay: 0.1 }}
                className="text-base sm:text-lg md:text-xl font-semibold text-slate-300 mb-6 lg:mb-8 flex items-center justify-center lg:justify-start gap-4 italic opacity-90"
            >
                <div className="hidden sm:block h-[1px] w-8 lg:w-12 bg-blue-500/30"></div>
                {t.hero.degree}
            </motion.h2>

            <motion.p 
                variants={fadeInUp}
                transition={{ ...standardTransition, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 lg:mb-10 leading-relaxed font-medium"
            >
                {t.hero.description}
            </motion.p>

            {/* CTAs including direct CV download */}
            <motion.div 
                variants={fadeInUp}
                transition={{ ...standardTransition, delay: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-10"
            >
                <motion.a
                  href="#projects"
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20 uppercase tracking-widest text-[11px] transition-colors duration-300"
                >
                  {t.hero.viewProjects} 
                  <ChevronRight size={16} />
                </motion.a>

                <motion.a
                  href={currentResume}
                  download={currentResumeName}
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-7 py-3.5 bg-blue-500/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg uppercase tracking-widest text-[11px] transition-all duration-300"
                >
                  <FileText size={15} />
                  <span>{t.hero.downloadCv}</span>
                  <Download size={14} />
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-xl font-bold flex items-center justify-center shadow-xl uppercase tracking-widest text-[11px] transition-colors duration-300"
                >
                  {t.hero.contactMe}
                </motion.a>
            </motion.div>

            {/* Credibility highlights */}
            <motion.div
              variants={fadeInUp}
              transition={{ ...standardTransition, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 border-t border-slate-900 text-xs text-slate-400"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-400/5 border border-amber-400/20 text-amber-300 rounded-lg font-semibold text-[10px]">
                <Award size={13} className="text-amber-400" />
                <span>Major de Promotion (FSR)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/5 border border-blue-500/20 text-blue-300 rounded-lg font-semibold text-[10px]">
                <GraduationCap size={13} className="text-blue-400" />
                <span>M.Sc. IT & Systems (INSEA)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-lg font-semibold text-[10px]">
                <span>11+ Projects</span>
              </div>
            </motion.div>
            </motion.div>

            {/* Right Content with Floating Tech Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative group max-w-[300px] sm:max-w-[400px] lg:max-w-none">
                {/* Glow ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-blue-500/10 rounded-[2.5rem] -z-10 blur-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>

                {/* Floating Top-Right Badge: INSEA Master's */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -top-3 -right-3 z-20 flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-xl shadow-2xl backdrop-blur-md text-[11px] font-bold text-white"
                >
                  <GraduationCap size={14} className="text-blue-400" />
                  <span>{t.hero.profileBadgeInsea || "M.Sc. INSEA"}</span>
                </motion.div>

                {/* Floating Bottom-Left Badge: Major de Promo */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-3 -left-3 z-20 flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-xl shadow-2xl backdrop-blur-md text-[11px] font-bold text-amber-300"
                >
                  <Award size={14} className="text-amber-400" />
                  <span>{t.hero.profileBadgeMajor || "Major de Promo"}</span>
                </motion.div>

                <div className="relative rounded-2xl overflow-hidden border border-slate-800 p-2 bg-slate-900 shadow-2xl">
                  <img 
                    src={profilePhoto} 
                    alt="Yassir Bouita" 
                    className="w-full aspect-square md:w-[420px] md:h-[420px] object-cover rounded-2xl transition duration-700 grayscale-0 lg:grayscale lg:group-hover:grayscale-0 lg:group-hover:scale-[1.01]" 
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
