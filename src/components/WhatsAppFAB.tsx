import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppFAB() {
  return (
    <motion.a 
      href="https://wa.me/919770511381"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-3 cursor-pointer"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="font-bold hidden md:inline">Chat with an Expert</span>
    </motion.a>
  );
}
