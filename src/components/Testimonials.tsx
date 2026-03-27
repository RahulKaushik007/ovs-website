import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { fetchGoogleReviews, Review } from '../services/reviewService';

const staticTestimonials: Review[] = [
  {
    text: "Very helpful staff and best n genuine products & pricing also very gud.",
    author: "Rahul Panjwani",
    role: "Local Guide",
    initials: "RP",
    color: "bg-purple-100",
    rating: 5
  },
  {
    text: "Good collection, reasonable price and owner is polite and educated so is the staff humble and helpful.",
    author: "Akarsh Pathak",
    role: "Verified Customer",
    initials: "AP",
    color: "bg-blue-100",
    rating: 5
  },
  {
    text: "Very good environment and friendly behaviour of employees feel like it's own shop ... After all satisfied experience ☺️",
    author: "Yashwant Singh",
    role: "Verified Customer",
    initials: "YS",
    color: "bg-indigo-100",
    rating: 4
  },
  {
    text: "Great experience! The staff was helpful and the service was quick. Highly recommend this shop. 👍",
    author: "Gaurav Tiwari",
    role: "Verified Customer",
    initials: "GT",
    color: "bg-emerald-100",
    rating: 5
  },
  {
    text: "Very nice opticals store. Reasonable and very budget friendly. Must visit.",
    author: "Ankur Sharma",
    role: "Verified Customer",
    initials: "AS",
    color: "bg-amber-100",
    rating: 4
  },
  {
    text: "Excellent service and wide variety if stocks, Too Good, must visite for spectacles and sunglasses.",
    author: "M S",
    role: "Verified Customer",
    initials: "MS",
    color: "bg-rose-100",
    rating: 5
  },
  {
    text: "Excellent collection, friendly staff, good price.",
    author: "Ranjana Sharma",
    role: "Verified Customer",
    initials: "RS",
    color: "bg-cyan-100",
    rating: 5
  },
  {
    text: "It was a great experience, the behavior of both the owner and the staff is very good.",
    author: "Rakesh Chauhan",
    role: "Verified Customer",
    initials: "RC",
    color: "bg-purple-100",
    rating: 4
  },
  {
    text: "Best service great products at very reasonable price.",
    author: "Apurv Sadafade",
    role: "Local Guide",
    initials: "AS",
    color: "bg-blue-100",
    rating: 5
  },
  {
    text: "Good quality of stocks and good staff behaviour.",
    author: "Chandramani Shrivas",
    role: "Verified Customer",
    initials: "CS",
    color: "bg-indigo-100",
    rating: 5
  },
  {
    text: "Good person in right shop for all oculur our requirements available in one shop. Mere ankho ka test ache se inhone kar ke right suggestions diya.",
    author: "Mukesh Mishra",
    role: "Verified Customer",
    initials: "MM",
    color: "bg-emerald-100",
    rating: 5
  },
  {
    text: "Very Nice Shop, Excellent Product And Service. Good Thing Is Owners Are Very Corporative.",
    author: "Uday Sahu",
    role: "Verified Customer",
    initials: "US",
    color: "bg-amber-100",
    rating: 4
  },
  {
    text: "A complete optical solutions shop. With great great experience at oculur! Friendly staff, a great selection of frames, and quick service. Highly recommend!",
    author: "Swapnil Pandey",
    role: "Verified Customer",
    initials: "SP",
    color: "bg-rose-100",
    rating: 5
  },
  {
    text: "Very attractive optical shop, very good variety of glasses also akash bhai give us very good discount. Thankyou oculur optical for your service 👍",
    author: "Ajay",
    role: "Local Guide",
    initials: "AJ",
    color: "bg-cyan-100",
    rating: 5
  },
  {
    text: "Excellent service, wide range of variety, Good Ambience. Must try for any types of spectacles.",
    author: "Aman Sharma",
    role: "Verified Customer",
    initials: "AS",
    color: "bg-purple-100",
    rating: 5
  }
];

export default function Testimonials() {
  // Use the stored reviews directly for instant loading
  const marqueeReviews = [...staticTestimonials, ...staticTestimonials];

  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-8 mb-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-ink">Customer Testimonials</h2>
          <p className="text-xl text-secondary">What our customers say about us</p>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-8 whitespace-nowrap py-4"
        >
          {marqueeReviews.map((t, idx) => (
            <div 
              key={`${t.author}-${idx}`}
              className="inline-block w-[350px] md:w-[450px] bg-zinc-50 p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow whitespace-normal shrink-0"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < t.rating ? 'text-amber-400 fill-current' : 'text-zinc-300 fill-current'}`} 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg italic text-secondary mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-primary font-bold`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold">{t.author}</h4>
                  <p className="text-xs text-outline font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
