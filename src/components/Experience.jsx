import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, Building2, School } from 'lucide-react';

import ddsLogo from '../assets/digital_data_service.png';
import inseaLogo from '../assets/INSEA_logo.png';
import inptLogo from '../assets/Logo_inpt.PNG';
import fsrLogo from '../assets/fsr_logo.jpg';

const Experience = () => {
  const education = [
    {
      type: 'edu',
      title: "M.Sc. in IT and Intelligent Systems",
      institution: 'National Institute of Statistics and Applied Economics (INSEA)',
      location: 'Rabat, Morocco',
      period: '2025 - Ongoing',
      logo: inseaLogo,
      isImage: true,
      description: 'Focused on IT, Intelligent Systems, and smart system design.'
    }
  ];

  const experiences = [
    {
      type: 'work',
      title: 'Frontend and UI Design Intern',
      company: 'Digital Data Service',
      location: 'Rabat, Morocco',
      period: 'Aug 2025 - Sep 2025',
      logo: ddsLogo,
      isImage: true,
      description: 'Built the frontend architecture for Archix-Base using React, focusing on scalability and performance. Delivered key functionalities including the user dashboard, complex navigation, secure authentication, and document management.',
      tags: ['React', 'UI/UX', 'Architecture', 'Dashboard']
    }
  ];

  const pastEducation = [
    {
      type: 'edu',
      title: "1st Year Master's in IoT and Big Data",
      institution: 'National Institute of Posts and Telecommunications (INPT)',
      location: 'Rabat, Morocco',
      period: '2024 - 2025',
      logo: inptLogo,
      isImage: true,
      description: 'Specialized in IoT, Big Data analytics, cloud systems, and data engineering.'
    },
    {
      type: 'edu',
      title: 'B.Sc. in Electronics, IT and Robotics',
      institution: 'Faculty of Sciences of Rabat (FSR)',
      location: 'Rabat, Morocco',
      period: '2021 - 2024',
      logo: fsrLogo,
      isImage: true,
      description: 'Specialized in embedded systems, Arduino, sensor electronics, full-stack dev, and 3D modeling.'
    }
  ];

  const timelineItems = [...education, ...experiences, ...pastEducation];

  const standardTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };
  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: standardTransition
  };

  return (
    <section id="experience" className="py-24 bg-slate-950 -mt-px">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md mb-6 shadow-sm">
            <h2 className="text-[9px] uppercase tracking-widest font-bold text-blue-400 uppercase">My Journey</h2>
          </motion.div>
          <motion.h3 variants={fadeInUp} transition={{ ...standardTransition, delay: 0.05 }} className="text-4xl md:text-5xl font-bold text-white leading-tight">Career & Education</motion.h3>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-slate-800 rounded-full"></div>

          <div className="space-y-16">
            {timelineItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ ...standardTransition, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Point */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-8 h-8 bg-slate-950 border border-slate-700 rounded-full z-10 flex items-center justify-center shadow-lg group">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  {item.type === 'work' ? <Briefcase size={14} className="text-blue-500 relative z-10" /> : <GraduationCap size={14} className="text-blue-500 relative z-10" />}
                </div>

                {/* Content Card */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-slate-900/40 border border-slate-800/60 p-6 md:p-8 rounded-2xl shadow-xl group hover:border-blue-500/30 transition-colors duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex items-start gap-5 mb-6 relative z-10">
                        <div className="w-16 h-16 rounded-xl bg-white border border-slate-800 flex items-center justify-center font-bold text-slate-900 text-[10px] uppercase shadow-sm flex-shrink-0 group-hover:shadow-md transition-all overflow-hidden p-2">
                            <img src={item.logo} alt={item.institution || item.company} className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <span className="flex items-center gap-1 text-[9px] font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-md uppercase tracking-widest mb-2 w-fit">
                                <Calendar size={10} /> {item.period}
                            </span>
                            <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">{item.title}</h4>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-4 relative z-10">
                      <p className="text-slate-300 font-bold text-xs tracking-tight flex items-center gap-2 italic">
                        {item.type === 'work' ? item.company : item.institution}
                      </p>
                      <span className="flex items-center gap-1 text-[10px] font-medium text-slate-500 tracking-wide">
                        <MapPin size={10} /> {item.location}
                      </span>
                    </div>
                    
                    <p className="text-slate-400 leading-relaxed mb-6 text-sm relative z-10">
                      {item.description}
                    </p>

                    {item.tags && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800 relative z-10">
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[9px] font-bold text-slate-500 uppercase tracking-widest bg-slate-950 px-2 py-1 rounded-md border border-slate-800 shadow-sm group-hover:border-blue-500/20 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
