import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const carouselImages = [
  {
    url: 'https://picsum.photos/seed/wedding-hero/1920/1080',
    alt: 'Wedding Photography'
  },
  {
    url: 'https://picsum.photos/seed/portrait-hero/1920/1080',
    alt: 'Portrait Photography'
  },
  {
    url: 'https://picsum.photos/seed/event-hero/1920/1080',
    alt: 'Event Coverage'
  }
];

export default function Hero() {
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex items-center bg-[#fdfcfb] transition-colors duration-300 pt-20">
      {/* Background: Faded Family Moment */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-white/90 z-10" />
        <img
          src="https://picsum.photos/seed/family-moment/1920/1080?blur=5"
          alt="Family Moment Background"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-20">
        {/* Left Side: Circular Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-start order-2 lg:order-1"
        >
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-8 border-white shadow-2xl shadow-emerald-500/10">
            <img
              src="https://drive.google.com/thumbnail?id=1gaQjQaLIHUtq2Qz5BRtYNTIALAyROZTY&sz=w1000"
              alt="Emmanuel Adeyi"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-emerald-500/5 rounded-full blur-3xl -z-10" />
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          style={{ opacity }}
          className="text-center lg:text-left order-1 lg:order-2"
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-emerald-600 uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
              Creative Media Agency
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] text-zinc-800">
              Preserving <span className="italic">Moments</span>. <br />
              Creating <span className="text-emerald-600 italic">Stories</span>.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-zinc-600 text-lg md:text-xl mb-12 max-w-xl leading-relaxed mx-auto lg:mx-0"
          >
            We don't just take pictures; we capture the soul of every moment, brand, and celebration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
          >
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all duration-300 uppercase tracking-widest text-xs font-bold shadow-xl shadow-emerald-600/20 text-center"
            >
              View Portfolio
            </a>
            <a
              href="#booking"
              className="w-full sm:w-auto px-10 py-5 border border-emerald-600/20 hover:border-emerald-600 hover:text-emerald-600 text-zinc-800 rounded-full transition-all duration-300 uppercase tracking-widest text-xs font-bold backdrop-blur-sm text-center"
            >
              Book a Session
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-zinc-400 dark:text-zinc-500"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
