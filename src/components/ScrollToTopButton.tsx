'use client';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

const isBrowser = () => typeof window !== 'undefined'; // The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonVisibility = () => {
    if (window.scrollY > 980) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleButtonVisibility);
    return () => {
      window.removeEventListener('scroll', handleButtonVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed right-3 bottom-3 z-50 hidden cursor-pointer rounded-full border-2 border-gray-300 bg-white p-3 sm:block"
          onClick={scrollToTop}
        >
          <ArrowUpIcon className="size-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
