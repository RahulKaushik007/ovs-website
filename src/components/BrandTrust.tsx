import { ShieldCheck, Stethoscope, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function BrandTrust() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Precision Vision</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight mb-8">
            Crafting a clearer perspective for the modern eye.
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            At OCULUR VISION SOLUTIONS, we blend high-end fashion with clinical excellence. 
            Our commitment goes beyond aesthetics; we ensure your visual health is treated 
            with the same precision as the artisanal frames we curate. Your vision is our legacy. 
            Discover a wide world of frames lenses, sunglasses and expert care designed to fit 
            your lifestyle and your family’s requirements perfectly. We understand your vision 
            needs and provide personalised optical solutions with quality you can trust and 
            affordability you’ll love. Timeless style meets modern precision: Premium eyewear 
            and seamless service for every generation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-zinc-50 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-zinc-100"
          >
            <ShieldCheck className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold text-xl mb-2 text-ink">Premium Quality</h3>
            <p className="text-sm text-secondary">Hand-picked materials from the world's finest artisans.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-8 bg-zinc-50 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-zinc-100"
          >
            <Stethoscope className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold text-xl mb-2 text-ink">Expert Care</h3>
            <p className="text-sm text-secondary">Clinical grade eye exams by certified specialists.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 bg-zinc-50 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-zinc-100"
          >
            <Award className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold text-xl mb-2 text-ink">100% Satisfaction</h3>
            <p className="text-sm text-secondary">Guaranteed precise vision alignment and flawless fit.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="p-8 bg-zinc-50 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-zinc-100"
          >
            <Users className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold text-xl mb-2 text-ink">For Everyone</h3>
            <p className="text-sm text-secondary">A highly curated range serving all budgets and lifestyles.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
