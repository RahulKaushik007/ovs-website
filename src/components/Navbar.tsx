import { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import brandLogo from '../assets/brand-logo/logo4.jpeg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [activeLink, setActiveLink] = useState('Frames');

  const navLinks = [
    { name: 'Frames', href: '#' },
    { name: 'Eye Test', href: '#booking-form' },
    { name: 'About', href: '#' },
    { name: 'Store Locator', href: 'https://www.google.com/maps/place/Oculur+Vision+Solutions/@22.08865,82.1362496,17z/data=!3m1!4b1!4m6!3m5!1s0x3a280b58f4c4baa9:0xd639a821ed0b4bda!8m2!3d22.08865!4d82.1362496!16s%2Fg%2F11wvd38b_c?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D' },
  ];

  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/70 glass-nav shadow-[0_20px_40px_rgba(28,27,27,0.06)]' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex-1 flex items-center gap-3 cursor-pointer group">
          {/* The 4th logo (Aperture/Eye color ring) is selected. It has no harsh black/white boxes, making it universally adapt to the glass navbar over any background */}
          <img 
            src={brandLogo} 
            alt="Oculur Logo" 
            className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300 bg-white"
          />
          <div className="text-xl md:text-2xl font-black tracking-tighter text-zinc-900 leading-none translate-y-[1px] md:translate-y-[2px]">
            OCULUR
            <span className="hidden xl:inline text-zinc-500 font-semibold tracking-tight ml-2 text-lg">
              VISION SOLUTIONS
            </span>
          </div>
        </div>
        
        {/* Desktop Links (Centered) */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : undefined}
              rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
              onClick={() => setActiveLink(link.name)}
              className={`uppercase tracking-widest text-xs font-bold transition-all duration-300 hover:scale-105 py-1 ${
                activeLink === link.name 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-zinc-600 hover:text-zinc-900 border-b-2 border-transparent'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex-1 flex justify-end items-center gap-8">
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+919770511381" className="flex items-center gap-2 text-zinc-600 hover:text-primary transition-colors cursor-pointer">
              <Phone className="w-4 h-4" />
              <span className="text-xs font-bold tracking-widest">+91 9770511381</span>
            </a>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/oculur.vision.solutions?igsh=cXVtYnZraXJoMmhr" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-600 hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-zinc-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden p-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`text-lg font-bold uppercase tracking-widest transition-colors ${
                  activeLink === link.name ? 'text-primary' : 'text-zinc-900'
                }`}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
