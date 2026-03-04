import { motion } from 'framer-motion';
import { MapPin, Search, GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();
    
    const highlights = [
        { icon: MapPin, text: 'Rabat, Morocco', label: t.about.highlights.location },
        { icon: Search, text: t.about.highlights.seeking, label: t.about.highlights.status },
        { icon: GraduationCap, text: t.about.highlights.msc, label: t.about.highlights.degree },
        { icon: Award, text: t.about.highlights.electronics, label: t.about.highlights.skills },
    ];

    const standardTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };
    const fadeInUp = {
        initial: { opacity: 0, y: 15 },
        whileInView: { 
            opacity: 1, 
            y: 0,
            transition: standardTransition
        },
        viewport: { once: true }
    };

    const cardHover = {
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 20 }
    };

    return (
        <section id="about" className="py-20 lg:py-24 relative overflow-hidden bg-slate-950 -mt-px">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                    
                    {/* Content side */}
                    <motion.div 
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="lg:col-span-7 order-2 lg:order-1"
                    >
                        <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md mb-6 shadow-sm">
                            <h2 className="text-[9px] uppercase tracking-widest font-bold text-blue-400">{t.about.badge}</h2>
                        </motion.div>
                        
                        <motion.h3 variants={fadeInUp} transition={{ ...standardTransition, delay: 0.05 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white text-center lg:text-left">
                            {t.about.title1} <br />
                            <span className="text-blue-500 italic font-medium">{t.about.title2}</span>
                        </motion.h3>
                        
                        <div className="space-y-6 text-base sm:text-lg text-slate-400 leading-relaxed font-medium">
                            <motion.p variants={fadeInUp} transition={{ delay: 0.1 }}>
                                {t.about.p1}
                            </motion.p>
                            <motion.p variants={fadeInUp} transition={{ delay: 0.15 }}>
                                {t.about.p2}
                            </motion.p>
                            
                            <motion.div 
                                variants={fadeInUp}
                                transition={{ delay: 0.2 }}
                                className="p-6 sm:p-8 bg-slate-900 border-l-2 border-blue-500 rounded-r-xl font-medium text-slate-300 italic shadow-lg group hover:border-blue-400 transition-colors duration-500"
                            >
                                {t.about.internship}
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={{
                                        initial: { opacity: 0, y: 10, scale: 0.95 },
                                        whileInView: { 
                                            opacity: 1, 
                                            y: 0, 
                                            scale: 1,
                                            transition: { duration: 0.4, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }
                                        }
                                    }}
                                    initial="initial"
                                    whileInView="whileInView"
                                    viewport={{ once: true }}
                                    whileHover={cardHover}
                                    className="p-5 sm:p-6 bg-slate-900 border border-slate-800 rounded-xl flex flex-col gap-4 shadow-sm hover:border-blue-500/30 transition-colors duration-300 group"
                                >
                                    <div className="w-10 h-10 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600/10 transition-colors shadow-sm">
                                        <item.icon className="text-blue-500 group-hover:scale-110 transition-transform duration-500" size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] uppercase font-bold text-slate-500 tracking-wider mb-1.5">{item.label}</p>
                                        <p className="text-xs sm:text-sm font-semibold text-slate-300 leading-tight group-hover:text-blue-400 transition-colors duration-500">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}

                            <motion.div
                                variants={{
                                    initial: { opacity: 0, y: 15 },
                                    whileInView: { 
                                        opacity: 1, 
                                        y: 0,
                                        transition: { duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }
                                    }
                                }}
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                className="p-6 bg-blue-600 rounded-xl flex flex-col justify-between sm:col-span-2 shadow-lg shadow-blue-900/10 group overflow-hidden relative transition-colors duration-500"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -z-10 group-hover:bg-white/10 transition-all duration-700"></div>
                                <div className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-4 relative z-10">{t.about.focus}</div>
                                <div className="text-lg font-bold text-white italic relative z-10">{t.about.focusText}</div>
                                <div className="mt-4 h-[2px] w-full bg-white/20 rounded-full overflow-hidden relative z-10">
                                    <div className="h-full w-3/4 bg-white/50"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
