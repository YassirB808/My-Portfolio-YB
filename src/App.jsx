import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Download, FileText } from 'lucide-react';
import resumeEng from './assets/Bouita_Yassir_CV_ENG.pdf';
import resumeFr from './assets/Bouita_Yassir_CV_Fr.pdf';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-blue-500/30">
      <Header />
      <main className="bg-slate-950">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Languages />
        <Skills />
        <Contact />
      </main>

      {/* Simplified Footer */}
      <footer className="py-12 border-t border-slate-900 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-8">
            {/* Resume Section */}
            <div className="flex flex-col items-center gap-4">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.footer.download}</h4>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={resumeEng}
                  download="Bouita_Yassir_CV_ENG.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/20 rounded-lg text-xs font-bold transition-all"
                >
                  <FileText size={14} /> {t.footer.enCv} <Download size={14} />
                </a>
                <a
                  href={resumeFr}
                  download="Bouita_Yassir_CV_Fr.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-800 text-slate-300 border border-slate-700 rounded-lg text-xs font-bold transition-all"
                >
                  <FileText size={14} /> {t.footer.frCv} <Download size={14} />
                </a>
              </div>
            </div>

            {/* Brand & Links */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-black text-white text-sm">YB</div>
              <p className="text-slate-400 text-sm font-medium">Yassir Bouita © 2026</p>
              
              <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
                <a href="https://linkedin.com/in/yassir-bouita-50173828a" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                <a href="https://github.com/YassirB808" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
              </div>
              
              <p className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">{t.footer.built}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
