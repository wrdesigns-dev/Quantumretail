import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

export function FloatingBackButton() {
  const location = useLocation();
  
  // Only show on Our Story and Craftsmanship pages
  const shouldShow = location.pathname === '/our-story' || location.pathname === '/craftsmanship';

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/70 backdrop-blur-[30px] border border-[#c0c0c0] rounded-full shadow-lg shadow-black/5 hover:bg-white/90 hover:border-neutral-400 transition-all duration-300"
          >
            <span className="text-sm tracking-[0.2em] uppercase text-neutral-700 group-hover:text-neutral-900 transition-colors">
              ← Return to Gallery
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
