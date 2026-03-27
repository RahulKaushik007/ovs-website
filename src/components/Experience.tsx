import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="flex-1 space-y-8">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">The Experience</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-ink leading-[1.1] md:leading-[0.9]">
              Walk into a world of clarity, quality & variety.
            </h2>
            <p className="text-lg md:text-xl text-secondary leading-relaxed">
              Your vision is our legacy. Discover a wide world of frames, lenses, sunglasses, and expert care designed to fit your lifestyle and your family's requirements perfectly. 
              We understand your vision needs and provide personalized optical solutions with quality you can trust and affordability you'll love. 
              Timeless style meets modern precision: Premium eyewear and seamless service for every generation.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img 
                className="rounded-2xl h-64 w-full object-cover shadow-sm" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwNjL_pjX98m7NQPCz2CWVoMZuOG9AvlsuRRirm66Y7HifgOzxsdqPni0Ipp0WWaMPBBNbbfFnCFwgWLc5oJF2jyIu2K6FZ4pBcQr4n8wDORft6uCPauw8P2cPU6nd-5BAssrnjY29DibrgYnGKkltlK79rZvlJq73_H4kehG1nKmn9J-MPC1d_-8mapl1FdYcsDw9KMO9Skpm1mjczaruv57kWkybM2JDlu0TGw9CzoJSyAANGmhgbua50T7LpP37VAqUrh4ppzFY" 
                alt="Showroom"
              />
              <img 
                className="rounded-2xl h-64 w-full object-cover shadow-sm" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYiDTssVzTsT0KSTvRB2nlW7Xv0Vt7D_H9ibUa_4UUgInjyEWgumM4LDPv3t1HBATnzxlo2ngw_byJybEiYoG7wecj8_Jd-sn7OzO6dZalL99xC4ZjWkfE-4N-XmY_qUB_hlwoTdZjRpO3NnOgaOREgo9rEzZVEv5CwXIETO-ZJ5yCskAZsOexVyskLwGKEabipbSLIAdiRt9VzCuWxplpf2yJu6eFtv_Yic_1HzsPIozU8RSH36P5agc97ASWu1kgs5ISg0Lbzqrd" 
                alt="Display"
              />
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            <div className="space-y-4 pt-12">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl w-full h-80 object-cover shadow-lg" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz_z5RWycxf9OkNH--mtxvoIpMk6lLNqbY5WwMiw4QHEOPY82rk88jNCMONA8nHhGcNS76ZcL9-KD9ez6DZW3pYBxaCx3xNj80oRtUAE3SDEYYIKmM0RaaoCEKxraYH4K_fBL-3u9N7RPf6TF_mZZuzM21kxsVyLa3w2_7SDaZGh2gwcg8QgOhfzLdetUY0w3R1r4iJSM1f1UconAdqw9mdGqpoHAswTJe_t8ui69k96NK8gzPd8ZVO9WL5xvxPP8y3mTh_R6HM2bg" 
                alt="Customer"
              />
              <motion.img 
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl w-full h-64 object-cover shadow-lg" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkCjArD_IHFXJQ35jozF4BcCfTls3jaGFwluirs9Vf97VdG2dK3zEMXZm3KCtWe2g6yPgGhFFMAg97p9nRPrx7Y-WbiQNhLn9N5XqiVRXYmp7I_fKEZt6GD6zBkk0ZhAE3BuYH8FUleIE889oOlbtqU3EJHcMdFBcozYHu1b_0KOUIM8tXrHks058xN43-oKpbNi5j2XCOb3ijWHIfRPz9MzNUOGwM5f4gmKgZFr9e6fIqrJZENncEGoGqF4MWUUG6g30B_E255gga" 
                alt="Optometrist"
              />
            </div>
            <div className="space-y-4">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl w-full h-64 object-cover shadow-lg" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsxbrrMqT4knC3gJ-REzwm_lhsT47RO_ja5c1XtXBYjToEmqT55ds4CdRIqSSghJjwyA910wQUw6bY_RuEihRlbesv58N2Kon8MyhmwbZKhZmjyJqG9JknoNmhJv5tnuErYCOCyCMl1lOaJonAx3lRvtSYcpYmKQ2wrANMxDbImV4U6uvCOtprKUAzE-stXnOpl29etaxfZyJzIZlWwIrFCjPXme_irLrE8FRxYgPEIl2m__UlrVC2mDecJz7qJgGsWnd1izdeIRGj" 
                alt="Street style"
              />
              <motion.img 
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl w-full h-80 object-cover shadow-lg" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS7oFGRwztWMYO57b_XA11RpupMHJDtpQ-sqasTNeoyEDnpWSAOFG_t1Ss-8JA97Xqe3Ml8CDA7elwGHYBK7SOiBMHlICDTNhYojX7xwC1zMEV9ZUpJ4U4bDFxX49XMbyAFLw-G7C-1WXbHSVqC6t90e-SF6sS2m6zpLuWp741S7c7Yb9rOPB-BLJbusJbQMcgUCgrPJLH5of4ZYhu2NAx8M3ojJqJxe16WPCzmBKsZILeZMdhIUd41SyjtV7COJ040qq5lu7ANnOn" 
                alt="Happy moment"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
