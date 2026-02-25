import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fdfcfb] transition-colors duration-300"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-serif text-emerald-500 tracking-widest">
          O'GBENGA
        </h1>
        <p className="text-center text-zinc-500 tracking-[0.5em] text-xs uppercase mt-2">
          Media
        </p>
      </motion.div>
      
      <div className="w-48 h-[1px] bg-zinc-800 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-emerald-500"
          initial={{ x: "-100%" }}
          animate={{ x: `${progress - 100}%` }}
        />
      </div>
      <span className="mt-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
        {progress}%
      </span>
    </motion.div>
  );
}
