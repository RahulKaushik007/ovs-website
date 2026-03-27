import { motion } from 'motion/react';

const categories = [
  {
    title: "Eyeglasses",
    subtitle: "Clarity in every frame.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUZk4g4b1VtH2HwtYJAwYe-k_hFqegEHSLs2dn_GPra0BvD7riZKGPsJNjfFV2wph79iEVwa9VBwcW-0O6GueFqLeGKCeAj1qeYi9sEf7YyhkIFR3F50MhpKyWumEUtGtFlwLAPeiFls-iuttn2N6vNVQAQlTaK59MLjJNGoZ3fhh7Yft1aIpldiHLp3ZTbe9EBK35X_s7JXQo8oTZQpbm0LXoHJqhyhMJ6esiuIGernYdl9I-VLmo0Cy-4tQux0peBfacZDvfqHhu"
  },
  {
    title: "Sunglasses",
    subtitle: "Style under the sun.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsb6iX35JROvrNu1yCMFBUifT2-6sEaKGwIl6YNGLG8HnGy-JnR1-mlmCZXQ83epLDrIcH2qzECwV-LyDmWSoxQ2tMu1tVxcIgzJ3v6ty0I7tiw4uT-xSZs1xPRbFn2R8C_x6IAfS9psh_iK14964vCyqnvv1obnopy1C5MGMZB-hnv5JvWKEMajlAwRbIy81y-tVwf9B3QFYTBg2XoBK1_kpFS7HKGcQO7SIiDqTIXfJzMd7xLW5JeeXciYZUTvDAWxbVLLNExm9g"
  },
  {
    title: "UV Blue Light",
    subtitle: "Digital eye protection.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaC5SgSwPFlS8ihCubQhFa04PGiSDdST9ysTjLL-ZLEjpb6LKK1ngxnsrFpPkERiNZSScHHDk6yJnOtWiAxHv3E9sUHldsPV-65OSgYmce25BuEOYPlpa8Ma-24wIeXmv02uXnb3ErjzMwXkLIAu9jbhbulFeVywety5rDs26BuOs41LT6NQuJLiSRrfMAuE98c4YN_-6KwqkBW6VB0nmuUTY9QWLesnMArVitgkWzEaD5m15c_SCR70UtQOz8MOqDNbhAaoje5FZD"
  }
];

export default function Collection() {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Collection</h2>
          <a href="#" className="text-primary font-bold border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-[600px] cursor-pointer"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={cat.image}
                alt={cat.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <h3 className="text-3xl font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-white/80">{cat.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
