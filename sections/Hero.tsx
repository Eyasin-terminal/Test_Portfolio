
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-10 -left-20 w-[600px] h-[600px] bg-brand-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-float-medium"></div>
        <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-slate-200/60 rounded-full mix-blend-multiply filter blur-3xl animate-float-fast"></div>
        <div className="absolute inset-0 bg-grain pointer-events-none"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-16">
        <div className="space-y-2 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <p className="font-sans text-xs md:text-sm tracking-[0.4em] text-slate-500 uppercase font-semibold">The Portfolio of</p>
        </div>
        
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[9.5rem] font-bold text-slate-900 leading-[0.85] tracking-tight mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
          Eyasin <br className="md:hidden" />
          <span className="relative inline-block mt-4 md:mt-0">
            Arafath
            <svg className="absolute w-full h-3 -bottom-2 left-0 text-brand-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="2" fill="none" />
            </svg>
          </span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <span className="hidden md:block h-[1px] w-20 bg-slate-300"></span>
          <p className="text-2xl md:text-4xl text-slate-700 font-serif italic font-light">
            Business Intelligence Analyst
          </p>
          <span className="hidden md:block h-[1px] w-20 bg-slate-300"></span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
          <a href="#projects" className="group relative px-10 py-4 bg-slate-900 text-white overflow-hidden rounded-full transition-all hover:shadow-2xl hover:scale-105">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-brand-600 rounded-full group-hover:w-64 group-hover:h-64 -ml-4 -mt-4"></span>
            <span className="relative font-medium tracking-widest text-xs uppercase">View Work</span>
          </a>
          <a href="#contact" className="px-10 py-4 bg-transparent border border-slate-300 text-slate-900 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-slate-900 hover:text-white transition-all duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
