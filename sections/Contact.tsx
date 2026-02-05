
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-20 items-start">
          <div className="md:col-span-5 relative md:sticky md:top-32">
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-brand-600 uppercase mb-8 flex items-center">
              <span className="w-10 h-[1px] bg-brand-600 mr-4"></span> Contact
            </h2>
            <h3 className="text-5xl font-serif text-slate-900 leading-[1.1] font-medium mb-10">
              Let's Start a <br/> Conversation
            </h3>
            <p className="text-slate-500 font-light text-xl mb-12 max-w-sm leading-relaxed italic">
              Ready to optimize your operations? I'm currently open to new projects and strategic analysis opportunities.
            </p>

            <div className="space-y-10 mb-16">
              <a 
                href="#" 
                className="group inline-flex items-center text-2xl font-serif italic text-slate-900 hover:text-brand-600 transition-colors decoration-brand-100 underline underline-offset-8 decoration-2"
              >
                Download Resume 
                <i className="fas fa-download ml-4 text-xs opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-y-1"></i>
              </a>
              
              <div className="flex space-x-8">
                <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors text-3xl">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors text-3xl">
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:eyasin.113t@gmail.com" className="text-slate-400 hover:text-brand-600 transition-colors text-3xl">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            
            <div className="hidden md:block absolute -right-10 top-0 w-[1px] h-full bg-slate-200"></div>
          </div>

          <div className="md:col-span-7 pt-4 md:pl-16">
            <form action="#" method="POST" className="space-y-14">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input type="text" id="name" name="name" 
                         className="peer w-full bg-transparent border-b border-slate-300 py-4 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors placeholder-transparent text-lg" 
                         placeholder="Name" required />
                  <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] text-slate-400 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-slate-900 uppercase tracking-[0.2em] font-bold">
                    Name
                  </label>
                </div>
                <div className="relative group">
                  <input type="email" id="email" name="email" 
                         className="peer w-full bg-transparent border-b border-slate-300 py-4 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors placeholder-transparent text-lg" 
                         placeholder="Email" required />
                  <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] text-slate-400 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-slate-900 uppercase tracking-[0.2em] font-bold">
                    Email
                  </label>
                </div>
              </div>
              
              <div className="relative group">
                <textarea id="message" name="message" rows={5} 
                          className="peer w-full bg-transparent border-b border-slate-300 py-4 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors placeholder-transparent resize-none text-lg" 
                          placeholder="Message" required></textarea>
                <label htmlFor="message" className="absolute left-0 -top-4 text-[10px] text-slate-400 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-slate-900 uppercase tracking-[0.2em] font-bold">
                  Message
                </label>
              </div>

              <div className="pt-8">
                <button type="submit" className="group relative px-14 py-6 bg-slate-900 text-white font-bold tracking-[0.3em] text-[10px] uppercase overflow-hidden hover:bg-brand-600 transition-colors duration-500 rounded-lg shadow-lg">
                  <span className="relative z-10">Send Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
