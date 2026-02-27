import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import profilePhoto from '../assets/profile_photo.jpeg';

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-950">
      <div className="absolute top-1/4 -left-20 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial="initial"
              animate="animate"
              className="text-left"
            >
            <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center bg-blue-600/10 border border-blue-500/20 text-blue-400 px-4 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest mb-10 shadow-sm"
            >
                Seeking End-of-Year Internship
            </motion.div>

            <motion.h1 
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white"
            >
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Yassir Bouita
                </span>
            </motion.h1>

            <motion.h2 
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl font-bold text-slate-200 mb-10 flex items-center gap-4 italic opacity-80"
            >
                <div className="h-[1px] w-12 bg-blue-500/30"></div>
                M.Sc. Candidate in IT & Intelligent Systems
            </motion.h2>

            <motion.p 
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed font-medium"
            >
                Passionate about bridging hardware and digital intelligence to build smart connected solutions for the future.
            </motion.p>

            <motion.div 
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-6"
            >
                <motion.a
                  href="#projects"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-blue-900/20 transition-all uppercase tracking-widest text-[11px]"
                >
                View Projects 
                <ChevronRight size={16} />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-xl font-bold transition-all shadow-xl uppercase tracking-widest text-[11px]"
                >
                Contact Me
                </motion.a>
            </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
            <div className="relative group">
                <div className="absolute -inset-4 bg-blue-500/5 rounded-[2rem] -z-10 blur-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
                <div className="relative rounded-3xl overflow-hidden border border-slate-800 p-2 bg-slate-900 shadow-2xl">
                <img 
                    src={profilePhoto} 
                    alt="Yassir Bouita" 
                    className="w-80 h-80 md:w-[420px] md:h-[420px] object-cover rounded-2xl transition duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.02]" 
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
