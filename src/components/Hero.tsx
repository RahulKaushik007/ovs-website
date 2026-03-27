import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[720px] md:min-h-[820px] w-full flex items-start overflow-hidden pt-24 md:pt-28 pb-16">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5V5SioaQtUpRZHHcBcbqNV9nARUj9hO8U7Z1vWiVABl6b0LMLgeyZIGiSSt3-1zVM4tP71Nhh6lZ8ioiZqSljjvEcBDZFm1TtMh_U0DoFVM8zQjcHiBldLYLTnPYLguYXwfiME7AXjz0uoVYKepXy5YkEjMh5ohOAvkl0dW2UtlnlqVkPkY8lrrnc4O_zZ_WHaBw7feinigWxxmsWUaCWHw5_2HKwEBslnZzjAe1Hha22aQA1mNUS6EiuMHCZbbpxow4Y_a3vAz60"
          alt="Stylish individual wearing premium eyewear"
        />
        {/* More contrast improves readability and gives a more premium feel */}
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block backdrop-blur-md bg-black/10 p-6 rounded-2xl mb-4"
          >
            <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
              See better.<br />Look better.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* 
            <button className="prism-gradient text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl">
              Explore Frames
            </button>
            <button className="bg-white text-ink px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 backdrop-blur-md">
              Book Eye Test
            </button> 
            */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="mt-6 md:mt-12 relative overflow-visible"
            >
              {/* Premium ambient glow melting the text cleanly into the background */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[150%] bg-[#60a5fa]/15 blur-[60px] md:blur-[100px] rounded-[100%] pointer-events-none z-0"></div>
              
              <div className="relative z-10 text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] tracking-tight leading-[1.05] drop-shadow-2xl px-6 md:px-0">
                <span className="font-light text-white/95">Expert Care,</span>
                <br />
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#bfdbfe] to-white bg-[length:200%_auto] animate-shimmer">
                  Infinite Style.
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
