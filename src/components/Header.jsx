import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: Github, href: 'https://github.com/YassirB808', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/yassir-bouita-50173828a', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:Bouita203@gmail.com', label: 'Email' },
    ];

    const standardTransition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] };

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                isScrolled ? 'py-3 bg-slate-950/90 backdrop-blur-md shadow-xl' : 'py-5 bg-transparent'
            }`}
        >
            <nav className="container mx-auto px-6 flex justify-between items-center">
                <motion.a 
                    href="#home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={standardTransition}
                    className="group flex items-center gap-3"
                >
                    <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20">YB</div>
                    <span className="text-lg font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">Yassir Bouita</span>
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-6 border-r border-slate-800 pr-8 mr-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors relative group/link"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-blue-500 group-hover/link:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>
                    
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ y: -2 }}
                                className="text-slate-400 hover:text-white transition-colors p-1"
                                aria-label={social.label}
                            >
                                <social.icon size={18} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="lg:hidden text-slate-300 hover:text-white transition-colors p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="lg:hidden fixed inset-0 top-0 h-screen bg-slate-950 z-[110]"
                    >
                        <div className="flex flex-col h-full p-8 pt-24 gap-8">
                            <button 
                                className="absolute top-6 right-6 text-slate-300 p-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X size={32} />
                            </button>

                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-3xl font-black uppercase tracking-widest text-slate-300 hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            
                            <div className="mt-auto border-t border-slate-800 pt-8 flex gap-8">
                                {socialLinks.map((social, idx) => (
                                    <motion.a 
                                        key={social.label} 
                                        href={social.href}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + idx * 0.1 }}
                                        className="text-slate-400 hover:text-blue-400"
                                    >
                                        <social.icon size={28} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
