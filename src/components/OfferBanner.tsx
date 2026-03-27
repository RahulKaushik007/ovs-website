import { motion } from 'motion/react';

export default function OfferBanner() {
  return (
    <section className="py-12 px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-2xl mx-auto prism-gradient rounded-[2rem] p-16 relative overflow-hidden flex flex-col items-center text-center"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        
        <span className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4">Summer Stunner deal</span>
        <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-8 leading-none">
          Buy 1 Get 1 free*
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 text-white/90 text-lg font-medium mb-10 max-w-4xl">
          <span className="px-4 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">Special offer</span>
          <span className="px-4 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">Flat 50% Off on photochromic lenses*</span>
          <span className="px-4 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">Upto 30% discounts on Sunglasses</span>
        </div>
        <button className="bg-white text-primary px-12 py-4 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all shadow-xl">
          Shop The Offer
        </button>
      </motion.div>
    </section>
  );
}
