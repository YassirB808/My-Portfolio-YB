import { motion } from 'framer-motion';
import { MapPin, Search, GraduationCap, Award } from 'lucide-react';

const About = () => {
    const highlights = [
        { icon: MapPin, text: 'Rabat, Morocco', label: 'Location' },
        { icon: Search, text: 'Seeking Internship', label: 'Status' },
        { icon: GraduationCap, text: 'M.Sc. IT & Intelligent Systems', label: 'Degree' },
        { icon: Award, text: 'Electronics & Robotics', label: 'Skills' },
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 15 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    };

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-slate-950 -mt-px">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
                    
                    {/* Content side */}
                    <motion.div 
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="md:col-span-7"
                    >
                        <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md mb-6 shadow-sm">
                            <h2 className="text-[9px] uppercase tracking-widest font-bold text-blue-400">Professional Background</h2>
                        </motion.div>
                        
                        <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                            Engineering the future through <br />
                            <span className="text-blue-500 italic font-medium">Smart Systems.</span>
                        </motion.h3>
                        
                        <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-medium">
                            <motion.p variants={fadeInUp}>
                                I am an <span className="text-white font-semibold">M.Sc. Candidate in IT and Intelligent Systems</span> at INSEA. My work focuses on the intersection of hardware and software, where I apply a multidisciplinary approach to solve complex engineering challenges.
                            </motion.p>
                            <motion.p variants={fadeInUp}>
                                With experience spanning from embedded electronics to modern web architecture, I specialize in building systems that are both robust and intelligent. I bridge the gap between physical sensors and digital data processing.
                            </motion.p>
                            
                            <motion.div 
                                variants={fadeInUp}
                                className="p-8 bg-slate-900 border-l-2 border-blue-500 rounded-r-xl font-medium text-slate-300 italic shadow-lg group hover:border-blue-400 transition-colors duration-500"
                            >
                                I am currently seeking an end-of-year internship to apply my expertise in IoT and AI to high-impact professional projects.
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Stats/Highlights side */}
                    <div className="md:col-span-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ y: -3 }}
                                    className="p-6 bg-slate-900 border border-slate-800 rounded-xl flex flex-col gap-4 shadow-sm hover:border-blue-500/30 transition-all group"
                                >
                                    <div className="w-10 h-10 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600/10 transition-colors shadow-sm">
                                        <item.icon className="text-blue-500 group-hover:scale-110 transition-transform duration-500" size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] uppercase font-bold text-slate-500 tracking-wider mb-1.5">{item.label}</p>
                                        <p className="text-xs font-semibold text-slate-300 leading-tight group-hover:text-blue-400 transition-colors duration-500">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Additional Info Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                whileHover={{ scale: 1.01 }}
                                className="p-6 bg-blue-600 rounded-xl flex flex-col justify-between sm:col-span-2 shadow-lg shadow-blue-900/10 group overflow-hidden relative"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -z-10 group-hover:bg-white/10 transition-all duration-700"></div>
                                <div className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-4">Core Focus</div>
                                <div className="text-lg font-bold text-white italic">Intelligent Systems & Full-stack IoT</div>
                                <div className="mt-4 h-[2px] w-full bg-white/20 rounded-full overflow-hidden">
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
