import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink, MapPin, Send, Check, Copy, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [copied, setCopied] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const emailAddress = 'Bouita203@gmail.com';

    const handleCopyEmail = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const emailSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
        const emailBody = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );

        // Open mailto link
        window.location.href = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 600);
    };

    const resetForm = () => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
    };

    const contactInfo = [
        { 
            icon: Mail, 
            label: t.contact.labels.email, 
            value: emailAddress, 
            href: `mailto:${emailAddress}`,
            canCopy: true
        },
        { 
            icon: Linkedin, 
            label: t.contact.labels.linkedin, 
            value: 'yassir-bouita-50173828a', 
            href: 'https://linkedin.com/in/yassir-bouita-50173828a' 
        },
        { 
            icon: Github, 
            label: t.contact.labels.github, 
            value: 'github.com/YassirB808', 
            href: 'https://github.com/YassirB808' 
        }
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

    return (
        <section id="contact" className="py-24 bg-slate-950 -mt-px relative overflow-hidden">
            {/* Background glow accents */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div 
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md mb-6 shadow-sm">
                        <h2 className="text-[9px] uppercase tracking-widest font-bold text-blue-400">{t.contact.badge}</h2>
                    </motion.div>
                    <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white leading-tight">{t.contact.title}</motion.h3>
                    <motion.p variants={fadeInUp} className="mt-4 text-slate-400 max-w-xl mx-auto font-medium text-base">
                        {t.contact.desc}
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* Left: Contact Info & Channels */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={standardTransition}
                        className="lg:col-span-5 flex flex-col gap-6"
                    >
                        <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl shadow-xl">
                            <h4 className="text-xl font-bold text-white mb-2">{t.contact.directConnect || "Direct Channels"}</h4>
                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                Feel free to connect directly via email or LinkedIn. I am prompt in answering professional inquiries.
                            </p>

                            <div className="space-y-4">
                                {contactInfo.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-4 bg-slate-950 border border-slate-800 p-4 rounded-xl hover:border-blue-500/30 transition-all duration-300 group"
                                    >
                                        <div className="w-11 h-11 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600/10 transition-colors duration-300 flex-shrink-0">
                                            <item.icon size={18} className="text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-[9px] uppercase font-bold text-slate-500 tracking-wider mb-0.5">{item.label}</p>
                                            <a 
                                                href={item.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-xs font-semibold text-slate-300 hover:text-blue-400 transition-colors truncate block"
                                            >
                                                {item.value}
                                            </a>
                                        </div>

                                        {item.canCopy ? (
                                            <button
                                                type="button"
                                                onClick={handleCopyEmail}
                                                className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center gap-1 text-[10px] font-bold"
                                                title="Copy email to clipboard"
                                                aria-label="Copy email address"
                                            >
                                                {copied ? (
                                                    <>
                                                        <Check size={14} className="text-emerald-400" />
                                                        <span className="text-emerald-400 hidden sm:inline">{t.contact.copied}</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy size={14} />
                                                        <span className="hidden sm:inline">{t.contact.copyEmail}</span>
                                                    </>
                                                )}
                                            </button>
                                        ) : (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={item.label}
                                                className="p-2 text-slate-500 hover:text-blue-400 transition-colors"
                                            >
                                                <ExternalLink size={14} />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3 text-slate-400 text-sm">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.contact.location || "Location"}</p>
                                    <p className="font-semibold text-slate-200 text-xs">Rabat, Morocco</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={standardTransition}
                        className="lg:col-span-7"
                    >
                        <div className="bg-slate-900/60 border border-slate-800 p-8 sm:p-10 rounded-2xl shadow-xl">
                            <h4 className="text-xl font-bold text-white mb-2">{t.contact.formTitle}</h4>
                            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                                {t.contact.formSubtitle}
                            </p>

                            {submitted ? (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-8 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center space-y-4"
                                >
                                    <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto text-blue-400">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h5 className="text-lg font-bold text-white">{t.contact.successTitle}</h5>
                                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                                        {t.contact.successDesc}
                                    </p>
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="mt-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold uppercase tracking-widest transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                                {t.contact.nameLabel} <span className="text-blue-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder={t.contact.namePlaceholder}
                                                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                                {t.contact.emailLabel} <span className="text-blue-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder={t.contact.emailPlaceholder}
                                                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                            {t.contact.subjectLabel} <span className="text-blue-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder={t.contact.subjectPlaceholder}
                                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                            {t.contact.messageLabel} <span className="text-blue-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder={t.contact.messagePlaceholder}
                                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20 transition-all cursor-pointer"
                                    >
                                        {isSubmitting ? (
                                            <span>{t.contact.sendingBtn}</span>
                                        ) : (
                                            <>
                                                <span>{t.contact.sendBtn}</span>
                                                <Send size={15} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
