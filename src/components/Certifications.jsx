import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ibmLogo from '../assets/ibm.png';
import microsoftLogo from '../assets/microsoft.png';
import datacampLogo from '../assets/datacamp.png';

const Certifications = () => {
  const { t } = useLanguage();

  const certificationsData = [
    {
      title: "Introduction to Data Engineering",
      issuer: "IBM",
      logo: ibmLogo,
      link: "https://www.coursera.org/account/accomplishments/verify/V9ZP1XZ9UJEM",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Career Essentials in Data Analysis",
      issuer: "Microsoft and LinkedIn",
      logo: microsoftLogo,
      link: "https://www.linkedin.com/learning/certificates/4319b29b6d0bdc955e092301e4af8bdfb356d552f9bf4340d181f1c4c6a42f4c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BpLchdLh%2FQvCYoF9j7V0yJw%3D%3D",
      color: "from-green-500 to-emerald-700"
    },
    {
      title: "Data Literacy",
      issuer: "DataCamp",
      logo: datacampLogo,
      link: "https://www.datacamp.com/skill-verification/DL0034622550197",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "AI Fundamentals",
      issuer: "DataCamp",
      logo: datacampLogo,
      link: "https://www.datacamp.com/skill-verification/AIF0028944455055",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const cardHover = {
    y: -5,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  };

  return (
    <section id="certifications" className="py-24 bg-slate-950 -mt-px border-t border-slate-900">
      <div className="container mx-auto px-6">
        <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md mb-6 shadow-sm">
            <h2 className="text-[9px] uppercase tracking-widest font-bold text-blue-400">{t.certifications.badge}</h2>
          </motion.div>
          <motion.h3 variants={fadeInUp} transition={{ delay: 0.05 }} className="text-4xl md:text-5xl font-bold text-white leading-tight">{t.certifications.title}</motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }
                }
              }}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              whileHover={cardHover}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-colors duration-300 shadow-xl"
            >
              <div className={`h-24 bg-gradient-to-br ${cert.color} opacity-10 group-hover:opacity-20 transition-all duration-500 flex items-center justify-center p-6`}>
                <img 
                  src={cert.logo} 
                  alt={cert.issuer} 
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight duration-300 line-clamp-2">{cert.title}</h4>
                </div>
                
                <p className="text-slate-400 text-xs font-semibold mb-4 uppercase tracking-wider">{cert.issuer}</p>

                <div className="flex justify-between items-center mt-auto">
                    <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 text-blue-400">
                        <Award size={16} />
                    </div>
                    <motion.a 
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-slate-400 hover:text-white bg-slate-950 p-2 rounded-lg border border-slate-800 hover:border-blue-500/30 transition-all flex items-center gap-2 text-xs"
                    >
                      {t.certifications.verify} <ExternalLink size={14} />
                    </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
