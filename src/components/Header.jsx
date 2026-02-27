import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';

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

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                isScrolled ? 'py-3 bg-slate-950/80 backdrop-blur-md shadow-xl' : 'py-6 bg-transparent'
            }`}
        >
            <nav className="container mx-auto px-6 flex justify-between items-center">
                <motion.a 
                    href="#home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="group flex items-center gap-2"
                >
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white group-hover:rotate-6 transition-transform">YB</div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Yassir Bouita</span>
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, idx) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                        </motion.a>
                    ))}
                    <motion.a
                        href="https://github.com/YassirB808"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600/10 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all"
                    >
                        GitHub <ExternalLink size={14} />
                    </motion.a>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-slate-300 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
