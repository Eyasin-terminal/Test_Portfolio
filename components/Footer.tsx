
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-16 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-slate-600 text-xs uppercase tracking-[0.3em] font-medium mb-4">
          &copy; {new Date().getFullYear()} Eyasin Arafath. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 text-slate-500">
          <a href="#" className="hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fab fa-github"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
