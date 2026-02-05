
import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onToggle: (id: string | null) => void;
  isOpen: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onToggle, isOpen }) => {
  return (
    <div className="project-card w-80 md:w-96 aspect-square snap-center flex-shrink-0 group relative bg-slate-50 rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-2xl hover:border-brand-200 hover:-translate-y-3 transition-all duration-500">
      <div className="p-10 flex flex-col h-full justify-between relative z-10">
        <div className="flex justify-between items-start">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-600 border border-brand-100 bg-white px-4 py-1.5 rounded-full">
            {project.tag}
          </span>
          <i className={`${project.iconClass} text-slate-200 text-2xl group-hover:text-brand-400 transition-colors`}></i>
        </div>

        <div className="my-auto">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 leading-tight group-hover:text-brand-800 transition-colors">
            {project.title}
          </h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-6">{project.client}</p>
        </div>

        <div>
          <button 
            onClick={() => onToggle(project.id)} 
            className="cursor-pointer group/btn inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 border-b-2 border-slate-200 hover:border-brand-600 pb-2 transition-all"
          >
            Explore Case Study <i className="fas fa-chevron-right ml-3 group-hover/btn:translate-x-2 transition-transform"></i>
          </button>
        </div>
      </div>

      <div className={`absolute inset-0 z-20 bg-slate-900/95 text-white p-10 flex flex-col justify-center transition-transform duration-700 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <button 
          onClick={() => onToggle(null)} 
          className="absolute top-8 right-8 text-slate-400 hover:text-white transition-colors p-2"
        >
          <i className="fas fa-times text-xl"></i>
        </button>
        <h4 className="text-xl font-serif font-bold mb-6 text-brand-400 italic">Project Overview</h4>
        <p className="text-base text-slate-300 leading-relaxed mb-10 font-light">
          {project.description}
        </p>
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full text-center bg-white text-slate-900 font-bold uppercase tracking-[0.2em] text-[10px] py-5 rounded-xl hover:bg-brand-50 transition-colors"
        >
          View Technical Specs
        </a>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(progress);
    }
  };

  return (
    <section id="projects" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-slate-100 pb-10">
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-brand-600 uppercase mb-6 flex items-center">
              <span className="w-10 h-[1px] bg-brand-600 mr-4"></span> Selected Works
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold text-slate-900 font-serif">Portfolio.</h3>
          </div>
          <div className="hidden md:flex text-slate-400 text-[10px] uppercase tracking-[0.3em] items-center gap-4 animate-pulse">
            <span>Scroll Gallery</span> <i className="fas fa-arrow-right"></i>
          </div>
        </div>

        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-16 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide items-stretch"
        >
          {PROJECTS.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isOpen={activeProjectId === project.id}
              onToggle={setActiveProjectId}
            />
          ))}
        </div>
        
        <div className="flex justify-center items-center gap-12 mt-4">
          <div className="relative w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
             <div 
               className="absolute top-0 left-0 h-full bg-slate-900 transition-all duration-200 ease-out"
               style={{ width: `${Math.min(100, scrollProgress * 100)}%` }}
             ></div>
          </div>
          <div className="flex gap-4">
            {PROJECTS.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-2 h-2 rounded-full transition-all duration-500 ${Math.round(scrollProgress * (PROJECTS.length - 1)) === idx ? 'bg-slate-900 w-6' : 'bg-slate-200'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
