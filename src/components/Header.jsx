import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, FileText, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import resumeEng from '../assets/Bouita_Yassir_CV_ENG.pdf';
import resumeFr from '../assets/Bouita_Yassir_CV_Fr.pdf';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { language, changeLanguage, t } = useLanguage();

    const currentResume = language === 'fr' ? resumeFr : resumeEng;
    const currentResumeName = language === 'fr' ? 'Bouita_Yassir_CV_Fr.pdf' : 'Bouita_Yassir_CV_ENG.pdf';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ['home', 'about', 'experience', 'projects', 'certifications', 'languages', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 180;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll and handle Escape key when mobile menu is open
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsMobileMenuOpen(false);
        };

        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: t.nav.home, href: '#home', id: 'home' },
        { name: t.nav.about, href: '#about', id: 'about' },
        { name: t.nav.experience, href: '#experience', id: 'experience' },
        { name: t.nav.projects, href: '#projects', id: 'projects' },
        { name: t.nav.certifications, href: '#certifications', id: 'certifications' },
        { name: t.nav.languages, href: '#languages', id: 'languages' },
        { name: t.nav.skills, href: '#skills', id: 'skills' },
        { name: t.nav.contact, href: '#contact', id: 'contact' },
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
                isScrolled ? 'py-3 bg-slate-950/90 backdrop-blur-md shadow-xl border-b border-slate-900/80' : 'py-5 bg-transparent'
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
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    <div className="flex items-center gap-4 xl:gap-6 border-r border-slate-800 pr-6 mr-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-[11px] font-black uppercase tracking-widest transition-colors relative py-1 group/link ${
                                        isActive ? 'text-blue-400' : 'text-slate-400 hover:text-blue-400'
                                    }`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all duration-300 ${
                                        isActive ? 'w-full' : 'w-0 group-hover/link:w-full'
                                    }`}></span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Language Switcher */}
                    <div className="flex items-center bg-slate-900/50 border border-slate-800 rounded-lg p-1">
                        <button 
                            type="button"
                            onClick={() => changeLanguage('en')}
                            className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                                language === 'en' 
                                ? 'bg-blue-600 text-white shadow-lg' 
                                : 'text-slate-500 hover:text-slate-300'
                            }`}
                        >
                            EN
                        </button>
                        <button 
                            type="button"
                            onClick={() => changeLanguage('fr')}
                            className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                                language === 'fr' 
                                ? 'bg-blue-600 text-white shadow-lg' 
                                : 'text-slate-500 hover:text-slate-300'
                            }`}
                        >
                            FR
                        </button>
                    </div>

                    {/* Quick Resume Link */}
                    <a
                        href={currentResume}
                        download={currentResumeName}
                        className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/20 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all"
                        title="Download CV"
                    >
                        <FileText size={12} />
                        <span>CV</span>
                        <Download size={11} />
                    </a>
                    
                    <div className="flex items-center gap-3">
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

                {/* Mobile Menu Toggle & Language bar */}
                <div className="flex items-center gap-3 lg:hidden">
                    <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
                        <button 
                            type="button"
                            onClick={() => changeLanguage('en')}
                            className={`px-2.5 py-1 rounded text-[9px] font-black transition-all ${
                                language === 'en' ? 'bg-blue-600 text-white' : 'text-slate-500'
                            }`}
                        >
                            EN
                        </button>
                        <button 
                            type="button"
                            onClick={() => changeLanguage('fr')}
                            className={`px-2.5 py-1 rounded text-[9px] font-black transition-all ${
                                language === 'fr' ? 'bg-blue-600 text-white' : 'text-slate-500'
                            }`}
                        >
                            FR
                        </button>
                    </div>
                    <button 
                        type="button"
                        className="text-slate-300 hover:text-white transition-colors p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="lg:hidden fixed inset-0 top-0 h-screen bg-slate-950/98 backdrop-blur-xl z-[110] overflow-y-auto"
                    >
                        <div className="flex flex-col min-h-full p-8 pt-20 gap-6">
                            <button 
                                type="button"
                                className="absolute top-6 right-6 text-slate-300 hover:text-white p-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={28} />
                            </button>

                            <div className="flex flex-col gap-4">
                                {navLinks.map((link, idx) => {
                                    const isActive = activeSection === link.id;
                                    return (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 + idx * 0.03 }}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`text-2xl font-black uppercase tracking-wider transition-colors ${
                                                isActive ? 'text-blue-400' : 'text-slate-300 hover:text-blue-400'
                                            }`}
                                        >
                                            {link.name}
                                        </motion.a>
                                    );
                                })}
                            </div>

                            {/* Mobile CV Download button */}
                            <motion.a
                                href={currentResume}
                                download={currentResumeName}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35 }}
                                className="flex items-center justify-center gap-2 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold uppercase tracking-widest mt-4"
                            >
                                <FileText size={16} />
                                <span>{t.footer.download}</span>
                                <Download size={14} />
                            </motion.a>
                            
                            <div className="mt-auto border-t border-slate-800 pt-6 flex justify-between items-center">
                                <div className="flex gap-6">
                                    {socialLinks.map((social) => (
                                        <a 
                                            key={social.label} 
                                            href={social.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={social.label}
                                            className="text-slate-400 hover:text-blue-400 transition-colors"
                                        >
                                            <social.icon size={24} />
                                        </a>
                                    ))}
                                </div>

                                <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-1">
                                    <button 
                                        type="button"
                                        onClick={() => changeLanguage('en')}
                                        className={`px-3 py-1 rounded text-xs font-bold ${
                                            language === 'en' ? 'bg-blue-600 text-white' : 'text-slate-500'
                                        }`}
                                    >
                                        EN
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={() => changeLanguage('fr')}
                                        className={`px-3 py-1 rounded text-xs font-bold ${
                                            language === 'fr' ? 'bg-blue-600 text-white' : 'text-slate-500'
                                        }`}
                                    >
                                        FR
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
