
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', isHash: true },
    { name: 'About', path: '/#about', isHash: true },
    { name: 'Work', path: '/#work', isHash: true },
    { name: 'Projects', path: '/#projects', isHash: true },
    { name: 'Articles', path: '/articles', isHash: false },
    { name: 'Contact', path: '/#contact', isHash: true },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <img 
              src="https://ui-avatars.com/api/?name=Eyasin+Arafath&background=0f172a&color=fff&size=128" 
              alt="Logo" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-slate-200 shadow-sm group-hover:border-brand-500 transition-all duration-300"
            />
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              link.isHash && location.pathname === '/' ? (
                <a 
                  key={link.name} 
                  href={link.path.replace('/', '')} 
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${isActive(link.path) ? 'text-brand-600 font-bold' : 'text-slate-500 hover:text-brand-600'}`}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${isActive(link.path) ? 'text-brand-600 font-bold' : 'text-slate-500 hover:text-brand-600'}`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white border-b border-slate-100 transition-all duration-300 ${isOpen ? 'top-full opacity-100 visible' : '-top-[500px] opacity-0 invisible'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.path) ? 'text-brand-600 bg-slate-50 font-bold' : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
