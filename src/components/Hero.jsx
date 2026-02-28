import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import profilePhoto from '../assets/profile_photo.jpeg';

const Hero = () => {
  const standardTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };
  
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
      {/* Background decoration - optimized for mobile */}
      <div className="absolute top-1/4 -left-20 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-blue-600/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-indigo-600/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <motion.div
              initial="initial"
              animate="animate"
              className="text-center lg:text-left order-2 lg:order-1"
            >
            <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center bg-blue-600/10 border border-blue-500/20 text-blue-400 px-4 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest mb-6 lg:mb-10 shadow-sm"
            >
                Seeking End-of-Year Internship
            </motion.div>

            <motion.h1 
                variants={fadeInUp}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 lg:mb-8 leading-[1.1] tracking-tight text-white"
            >
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Yassir Bouita
                </span>
            </motion.h1>

            <motion.h2 
                variants={fadeInUp}
                transition={{ ...standardTransition, delay: 0.1 }}
                className="text-lg sm:text-xl md:text-2xl font-bold text-slate-200 mb-8 lg:mb-10 flex items-center justify-center lg:justify-start gap-4 italic opacity-80"
            >
                <div className="hidden sm:block h-[1px] w-8 lg:w-12 bg-blue-500/30"></div>
                M.Sc. Candidate in IT & Intelligent Systems
            </motion.h2>

            <motion.p 
                variants={fadeInUp}
                transition={{ ...standardTransition, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 lg:mb-12 leading-relaxed font-medium"
            >
                Passionate about bridging hardware and digital intelligence to build smart connected solutions for the future.
            </motion.p>

            <motion.div 
                variants={fadeInUp}
                transition={{ ...standardTransition, delay: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6"
            >
                <motion.a
                  href="#projects"
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20 uppercase tracking-widest text-[11px] transition-colors duration-300"
                >
                View Projects 
                <ChevronRight size={16} />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-lg font-bold flex items-center justify-center shadow-xl uppercase tracking-widest text-[11px] transition-colors duration-300"
                >
                Contact Me
                </motion.a>
            </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            >
            <div className="relative group max-w-[300px] sm:max-w-[400px] lg:max-w-none">
                <div className="absolute -inset-4 bg-blue-500/5 rounded-[2rem] -z-10 blur-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 p-2 bg-slate-900 shadow-2xl">
                <img 
                    src={profilePhoto} 
                    alt="Yassir Bouita" 
                    className="w-full aspect-square md:w-[420px] md:h-[420px] object-cover rounded-2xl transition duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.01]" 
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
