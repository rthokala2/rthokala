import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled
  ? 'bg-slate-900/70 backdrop-blur-xl border-b border-white/10 shadow-2xl'
  : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <NavLink
  to="/"
  className="flex items-center gap-3"
>
  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,.6)]">
    <span className="text-white text-xl font-bold">R</span>
    <span className="text-white text-xl font-bold">T</span>
  </div>

</NavLink>
          </div>
          
         <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2">

  {navItems.map((item) => (
    <NavLink
      key={item.path}
      to={item.path}
      className={({ isActive }) =>
        `relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-r from-purple-600 via-pink-500 to-violet-600 text-white shadow-[0_0_25px_rgba(168,85,247,.6)]"
            : "text-gray-300 hover:text-white hover:bg-white/10"
        }`
      }
    >
      {item.label}
    </NavLink>
  ))}

</div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white transition-transform duration-300 hover:scale-110"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-slate-900/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-purple-300 bg-white/10'
                      : 'text-gray-300 hover:text-purple-300 hover:bg-white/10'
                                      }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;