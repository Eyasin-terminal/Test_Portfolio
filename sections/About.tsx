
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 relative">
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-brand-600 uppercase mb-8 flex items-center">
              <span className="w-10 h-[1px] bg-brand-600 mr-4"></span> About Me
            </h2>
            <blockquote className="text-4xl md:text-6xl font-serif text-slate-900 leading-[1.1] font-medium">
              "I bridge the gap between <br/>
              <span className="italic text-brand-700 font-serif">Sales</span> and <br/>
              <span className="italic text-brand-700 font-serif">Marketing</span>."
            </blockquote>
            <div className="hidden md:block absolute -right-8 top-0 w-[1px] h-full bg-slate-100"></div>
          </div>

          <div className="md:col-span-7 space-y-16 pt-4 md:pl-12">
            <div>
              <p className="text-2xl text-slate-600 font-light leading-relaxed mb-8 italic">
                I use data analysis to fix operational friction so you stop losing leads.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl font-light">
                In a world where data is abundant but insights are scarce, my goal is to translate complex metrics into actionable business strategies. My approach combines technical analysis with business acumen to drive measurable growth.
              </p>
            </div>

            <div className="relative">
              <h3 className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-8 border-b border-slate-100 pb-3 inline-block">
                Academic Background
              </h3>
              
              <div className="group">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h4 className="text-3xl font-serif text-slate-900 group-hover:text-brand-700 transition-colors">BSS (Hon’s) in Economics</h4>
                  <span className="text-xs font-bold tracking-widest text-slate-400 mt-2 sm:mt-0 uppercase">Class of 2026</span>
                </div>
                <p className="text-xl text-slate-600 mb-6 font-light">Bangladesh University of Professionals</p>
                
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-brand-50 text-brand-700 border border-brand-100">
                    8th Semester
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                  <span className="text-xs text-slate-400 italic">Major in Macroeconomics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
