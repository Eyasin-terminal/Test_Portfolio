
import React from 'react';
import { ARTICLES } from '../constants';

const ArticlesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <header className="relative py-20 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-10 -right-20 w-[400px] h-[400px] bg-brand-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
          <div className="absolute inset-0 bg-grain pointer-events-none"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 mb-6">Writings</h1>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto italic">
            Thoughts on data, economics, and bridging the gap between numbers and strategy.
          </p>
        </div>
      </header>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {ARTICLES.map((article) => (
            <article 
              key={article.id} 
              className="group relative bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 mb-10 hover:shadow-lg transition-all duration-300 hover:border-brand-200"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    {article.title}
                  </a>
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 shrink-0 border-b border-slate-100 pb-1">
                  {article.date}
                </span>
              </div>
              <p className="text-slate-600 font-light leading-relaxed mb-8">
                {article.summary}
              </p>
              <div className="flex items-center text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                Read Article <i className="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"></i>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
