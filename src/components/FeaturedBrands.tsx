import { motion } from 'motion/react';

import rayBanLogo from '../assets/featured-brands/logo1.jpg';
import zeissLogo from '../assets/featured-brands/logo2.jpg';
import essilorLogo from '../assets/featured-brands/logo3.png';
import luxotticaLogo from '../assets/featured-brands/logo4.png';
import frenchConnectionLogo from '../assets/featured-brands/logo5.png';
import kodakLensLogo from '../assets/featured-brands/logo6.png';
import stepperLogo from '../assets/featured-brands/stepper.png';
import tommyHilfigerLogo from '../assets/featured-brands/tommy-hilfiger.png';
import velocityLogo from '../assets/featured-brands/velocity.png';
import vogueLogo from '../assets/featured-brands/vogue.png';

const brands = [
  { name: "Ray-Ban", logo: rayBanLogo },
  { name: "Vogue", logo: vogueLogo },
  { name: "Tommy Hilfiger", logo: tommyHilfigerLogo },
  { name: "Zeiss", logo: zeissLogo },
  { name: "Essilor", logo: essilorLogo },
  { name: "Luxottica", logo: luxotticaLogo },
  { name: "French Connection", logo: frenchConnectionLogo },
  { name: "Kodak Lens", logo: kodakLensLogo },
  { name: "Stepper", logo: stepperLogo },
  { name: "Velocity", logo: velocityLogo }
];

// Duplicate for seamless loop
const marqueeBrands = [...brands, ...brands, ...brands];

export default function FeaturedBrands() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Radial gradient background reflecting the dark blue to brightish center image */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(30, 64, 130, 0.5) 0%, rgba(3, 7, 18, 1) 60%, rgba(3, 7, 18, 1) 100%)"
        }}
      />

      <div className="max-w-screen-2xl mx-auto px-8 text-center mb-16 relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#60a5fa] font-bold uppercase tracking-widest text-sm mb-4 block"
        >
          Curated Excellence
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 text-white"
        >
          Featured Brands
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
        >
          Explore our collection of premium designer eyewear from world-renowned brands.
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden py-10 md:py-14 z-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div 
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-8 md:gap-20 items-center whitespace-nowrap"
        >
          {marqueeBrands.map((brand, idx) => (
            <div 
              key={`${brand.name}-${idx}`}
              className="group relative flex items-center justify-center w-48 h-24 md:w-64 md:h-36 px-4 md:px-6 bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-[0_0_20px_rgba(255,255,255,0.15)] md:shadow-none transition-all duration-500 md:hover:scale-110 md:hover:bg-white md:hover:rounded-3xl md:hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] md:hover:z-20 cursor-pointer"
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="max-w-full max-h-[4rem] md:max-h-[6.5rem] object-contain opacity-100 md:opacity-50 grayscale-0 md:grayscale invert-0 md:invert brightness-100 md:brightness-125 mix-blend-normal md:mix-blend-lighten transition-all duration-500 md:group-hover:opacity-100 md:group-hover:grayscale-0 md:group-hover:invert-0 md:group-hover:brightness-100 md:group-hover:mix-blend-normal md:group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
