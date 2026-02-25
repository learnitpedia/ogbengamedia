import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const instagramPosts = [
  { id: 1, image: 'https://picsum.photos/seed/ig1/400/400', likes: '1.2k', comments: '45' },
  { id: 2, image: 'https://picsum.photos/seed/ig2/400/400', likes: '850', comments: '32' },
  { id: 3, image: 'https://picsum.photos/seed/ig3/400/400', likes: '2.1k', comments: '89' },
  { id: 4, image: 'https://picsum.photos/seed/ig4/400/400', likes: '1.5k', comments: '56' },
  { id: 5, image: 'https://picsum.photos/seed/ig5/400/400', likes: '920', comments: '28' },
  { id: 6, image: 'https://picsum.photos/seed/ig6/400/400', likes: '1.8k', comments: '64' },
];

export default function InstagramPreview() {
  return (
    <section className="py-24 px-6 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <span className="text-emerald-500 uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Social Feed
            </span>
            <h2 className="text-4xl font-serif text-zinc-900">
              Follow Our <span className="italic">Journey</span>
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 border border-black/10 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-500 uppercase tracking-widest text-xs font-bold text-zinc-900"
          >
            <Instagram className="w-4 h-4" />
            @ogbengamedia
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square group overflow-hidden rounded-xl border border-white/5"
            >
              <img
                src={post.image}
                alt="Instagram Post"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white text-sm font-bold">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 fill-white" />
                  {post.likes}
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  {post.comments}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
