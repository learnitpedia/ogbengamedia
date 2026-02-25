import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState } from 'react';
import { Menu, X, Instagram, Facebook, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Booking', href: '#booking' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    [
      'rgba(253, 252, 251, 0)', 
      'rgba(253, 252, 251, 0.95)'
    ]
  );
  
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    [
      '1px solid rgba(16, 185, 129, 0)', 
      '1px solid rgba(16, 185, 129, 0.1)'
    ]
  );

  const textColor = useTransform(
    scrollY,
    [0, 100],
    [
      'rgba(39, 39, 42, 1)', 
      'rgba(63, 63, 70, 1)'
    ]
  );

  return (
    <motion.nav
      style={{ backgroundColor, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex flex-col">
          <span className="text-2xl font-serif text-emerald-500 leading-none">O'GBENGA</span>
          <span className="text-[8px] uppercase tracking-[0.4em] text-zinc-400">Media</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              style={{ color: textColor }}
              className="text-sm font-medium hover:text-emerald-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </motion.a>
          ))}
          
          <div className="flex items-center gap-6 ml-4 pl-4 border-l border-zinc-500/20">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-zinc-500/10 transition-colors text-zinc-400 hover:text-emerald-500"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-4">
              <Instagram className="w-4 h-4 text-zinc-400 hover:text-emerald-500 cursor-pointer transition-colors" />
              <Facebook className="w-4 h-4 text-zinc-400 hover:text-emerald-500 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-zinc-400"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            className="text-zinc-400 dark:text-zinc-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-[#fdfcfb] border-b border-emerald-500/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-zinc-800 hover:text-emerald-500 transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
