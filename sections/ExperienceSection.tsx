
import React from 'react';
import { WORK_HISTORY } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 relative md:sticky md:top-32">
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-brand-600 uppercase mb-8 flex items-center">
              <span className="w-10 h-[1px] bg-brand-600 mr-4"></span> Experience
            </h2>
            <h3 className="text-5xl font-serif text-slate-900 leading-[1.1] font-medium mb-8">
              Professional <br /> Journey
            </h3>
            <p className="text-slate-500 font-light text-xl max-w-sm leading-relaxed italic">
              A chronological perspective on my work in business intelligence, supply chain, and data strategy.
            </p>
            <div className="hidden md:block absolute -right-8 top-0 w-[1px] h-full bg-slate-200"></div>
          </div>

          <div className="md:col-span-7 pt-4 md:pl-12 space-y-20">
            {WORK_HISTORY.map((job) => (
              <div key={job.id} className="group relative pb-12 border-l border-slate-200 pl-10 md:pl-12 last:border-0 last:pb-0">
                <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white border-2 rounded-full transition-all duration-500 ${job.current ? 'border-brand-600 scale-125' : 'border-slate-300 group-hover:border-brand-600'}`}></div>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                  <h4 className="text-3xl font-serif text-slate-900 group-hover:text-brand-700 transition-colors">{job.company}</h4>
                  <span className={`text-[10px] font-bold tracking-widest uppercase mt-3 sm:mt-0 px-4 py-1.5 rounded-full ${job.current ? 'bg-brand-50 text-brand-600' : 'bg-slate-100 text-slate-500'}`}>
                    {job.period}
                  </span>
                </div>
                
                <p className="text-xl font-medium text-slate-700 mb-6">{job.role}</p>
                
                <p className="text-slate-600 font-light leading-relaxed text-lg">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
