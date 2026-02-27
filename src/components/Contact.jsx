import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink, MapPin } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        { 
            icon: Mail, 
            label: 'Email', 
            value: 'Bouita203@gmail.com', 
            href: 'mailto:Bouita203@gmail.com' 
        },
        { 
            icon: Linkedin, 
            label: 'LinkedIn', 
            value: 'yassir-bouita-50173828a', 
            href: 'https://linkedin.com/in/yassir-bouita-50173828a' 
        },
        { 
            icon: Github, 
            label: 'GitHub', 
            value: 'github.com/YassirB808', 
            href: 'https://github.com/YassirB808' 
        }
    ];

    return (
        <section id="contact" className="py-24 bg-slate-950 -mt-px">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md mb-6">
                        <h2 className="text-[9px] uppercase tracking-widest font-bold text-blue-400 uppercase">Get In Touch</h2>
                    </div>
                    <h3 className="text-4xl font-bold text-white leading-tight">Let's Connect</h3>
                    <p className="mt-4 text-slate-400 max-w-lg mx-auto">
                        I am currently looking for new opportunities and collaborations. Feel free to reach out through any of these channels.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6 mb-24">
                    {contactInfo.map((item, idx) => (
                        <motion.a
                            key={idx}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="flex items-center gap-4 bg-slate-900/60 border border-slate-800 p-5 rounded-2xl transition-all hover:border-blue-500/30 hover:bg-slate-900 group shadow-lg flex-1 min-w-[280px] max-w-[320px]"
                        >
                            <div className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600/10 transition-colors shadow-sm">
                                <item.icon size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                                <p className="text-[9px] uppercase font-bold text-slate-500 tracking-wider mb-0.5">{item.label}</p>
                                <p className="text-xs font-semibold text-slate-300 group-hover:text-blue-400 transition-colors truncate max-w-[180px]">{item.value}</p>
                            </div>
                            <ExternalLink size={12} className="ml-auto text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-4 text-slate-500 mb-24 font-semibold italic text-sm">
                    <MapPin size={16} className="text-blue-500" />
                    <span>Rabat, Morocco</span>
                </div>

                {/* Footer */}
                <footer className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-[10px]">YB</div>
                        <span className="font-bold text-slate-400 text-sm">Yassir Bouita &copy; {new Date().getFullYear()}</span>
                    </div>
                    
                    <div className="flex gap-8">
                        {['LinkedIn', 'GitHub'].map((social) => (
                            <a 
                                key={social} 
                                href={social === 'LinkedIn' ? 'https://linkedin.com/in/yassir-bouita-50173828a' : 'https://github.com/YassirB808'} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-blue-400 transition-colors"
                            >
                                {social}
                            </a>
                        ))}
                    </div>

                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-600">
                        Built with React & Tailwind
                    </p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
