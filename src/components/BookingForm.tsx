import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: 'Morning (10 AM - 1 PM)'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page reload
    
    // Simulate API call and success
    setIsSubmitted(true);
    
    // Clear form explicitly (though the success overlay covers it)
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: 'Morning (10 AM - 1 PM)'
    });
    
    // Optionally auto-close the success modal after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="booking-form" className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Book Your Free Eye Checkup</h2>
          <p className="text-secondary">Our certified optometrists are here to help you see the world clearly.</p>
        </div>
        
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-50 p-8 md:p-12 rounded-[2rem] shadow-sm relative overflow-hidden"
        >
          <AnimatePresence>
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
                exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                className="absolute inset-0 z-20 bg-zinc-50/90 flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-extrabold text-zinc-900 mb-2">Appointment Scheduled!</h3>
                <p className="text-zinc-600 text-lg mb-8 max-w-sm">
                  We've received your request and will contact you shortly to confirm your booking slot.
                </p>
                <button 
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all shadow-md"
                >
                  Book Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-2 relative z-10">
            <label className="text-xs font-bold uppercase tracking-widest text-outline">Full Name</label>
            <input 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 transition-all placeholder:text-outline-variant" 
              placeholder="John Doe" 
              type="text"
            />
          </div>
          <div className="space-y-2 relative z-10">
            <label className="text-xs font-bold uppercase tracking-widest text-outline">Phone Number</label>
            <input 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 transition-all placeholder:text-outline-variant" 
              placeholder="+91 00000 00000" 
              type="tel"
            />
          </div>
          <div className="space-y-2 relative z-10">
            <label className="text-xs font-bold uppercase tracking-widest text-outline">Preferred Date</label>
            <input 
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 transition-all" 
              type="date"
            />
          </div>
          <div className="space-y-2 relative z-10">
            <label className="text-xs font-bold uppercase tracking-widest text-outline">Preferred Time</label>
            <select 
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 transition-all"
            >
              <option>Morning (10 AM - 1 PM)</option>
              <option>Afternoon (1 PM - 5 PM)</option>
              <option>Evening (5 PM - 8 PM)</option>
            </select>
          </div>
          <div className="md:col-span-2 pt-8 relative z-10">
            <button 
              className="w-full prism-gradient text-white py-5 rounded-full font-bold text-lg hover:scale-[1.01] active:scale-95 transition-all shadow-lg" 
              type="submit"
            >
              Schedule Appointment
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
