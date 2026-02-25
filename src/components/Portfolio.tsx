import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Branding', 'Products'];

const portfolioItems = [
  { id: 1, category: 'Weddings', image: 'https://picsum.photos/seed/wedding1/800/1000', title: 'The Royal Wedding' },
  { id: 2, category: 'Portraits', image: 'https://picsum.photos/seed/portrait1/800/600', title: 'Golden Hour' },
  { id: 3, category: 'Events', image: 'https://picsum.photos/seed/event1/800/1200', title: 'Corporate Gala' },
  { id: 4, category: 'Branding', image: 'https://picsum.photos/seed/brand1/800/800', title: 'Modern Identity' },
  { id: 5, category: 'Products', image: 'https://picsum.photos/seed/prod1/800/1000', title: 'Luxury Watch' },
  { id: 6, category: 'Weddings', image: 'https://picsum.photos/seed/wedding2/800/800', title: 'Beach Vows' },
  { id: 7, category: 'Portraits', image: 'https://picsum.photos/seed/portrait2/800/1200', title: 'Urban Style' },
  { id: 8, category: 'Events', image: 'https://picsum.photos/seed/event2/800/800', title: 'Music Festival' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#fdfcfb] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-emerald-500 uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Our Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900">
              Visual <span className="italic">Masterpieces</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-zinc-100 text-zinc-500 hover:text-zinc-900 border border-emerald-500/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer break-inside-avoid rounded-2xl overflow-hidden border border-emerald-500/10 shadow-sm hover:shadow-2xl transition-shadow"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-emerald-600 text-[10px] uppercase tracking-widest mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-serif text-zinc-900 mb-4">{item.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-zinc-900/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-emerald-500 transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
