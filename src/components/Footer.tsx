import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
        <div className="space-y-6">
          <div className="text-2xl font-bold text-zinc-900">OCULUR VISION SOLUTIONS</div>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Decades of expertise, a world of styles. We understand your vision needs and provide tailored optical solutions with quality you can trust and affordability you’ll love.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/oculur.vision.solutions?igsh=cXVtYnZraXJoMmhr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="uppercase font-bold text-xs tracking-widest text-zinc-900">Quick Links</h4>
          <ul className="space-y-4">
            {['Privacy Policy', 'Terms of Service', 'Shipping', 'Returns'].map((link) => (
              <li key={link}>
                <a href="#" className="text-zinc-500 hover:text-primary transition-all duration-300 hover:translate-x-1 block">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="uppercase font-bold text-xs tracking-widest text-zinc-900">Support</h4>
          <ul className="space-y-4">
            {[
              { name: 'Contact Us', href: '#' },
              { name: 'Store Locator', href: 'https://www.google.com/maps/place/Oculur+Vision+Solutions/@22.08865,82.1362496,17z/data=!3m1!4b1!4m6!3m5!1s0x3a280b58f4c4baa9:0xd639a821ed0b4bda!8m2!3d22.08865!4d82.1362496!16s%2Fg%2F11wvd38b_c?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D' },
              { name: 'FAQs', href: '#' },
              { name: 'Book Exam', href: '#' }
            ].map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  target={link.href.startsWith('http') ? "_blank" : undefined}
                  rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-zinc-500 hover:text-primary transition-all duration-300 hover:translate-x-1 block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="uppercase font-bold text-xs tracking-widest text-zinc-900">Career</h4>
          <p className="text-zinc-500 text-sm">Join our team of experts. Submit your CV to explore exciting opportunities with us.</p>
          <div className="space-y-3">
            <label className="cursor-pointer flex items-center justify-center w-full bg-white border border-dashed border-outline-variant rounded-xl px-4 py-6 text-sm hover:border-primary hover:bg-zinc-100/50 transition-all group">
              <div className="text-center">
                <span className="block text-zinc-900 font-bold mb-1 group-hover:text-primary transition-colors">Submit CV</span>
                <span className="block text-xs text-zinc-500">PDF or Word (Max 5MB)</span>
              </div>
              <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
            </label>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-8 mt-20 pt-10 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-500 text-sm">© 2026 OCULUR VISION SOLUTIONS. All rights reserved.</p>
        <div className="flex gap-4">
          <img 
            className="h-6 grayscale opacity-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuALCwAf3jS4cZPi_UgqHEcOiZ9-lvwMaOefzS7e6ioau-08nbJpKB1tWvTgy3xIWEUcZW64IWnX42LXnay_Am0e3Lx6HgiE-So4INeJhJ9Q2TpUa2JtOB4_rjavPezsI0dvQVfljRruxusR657vZYhhTULDQlidZBUYxzo86GhyCDJhSOaODLl-wiT_rxs_erVgAGGZtXHKZwzHt6dxGp7gHgx-mCevrvplCnfUpb0F6hh8VCH1SCQ44SPPFPf-_TQrqR_d0wCrPh17" 
            alt="Payment methods"
          />
        </div>
      </div>
    </footer>
  );
}
