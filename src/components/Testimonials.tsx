import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Bride',
    image: 'https://i.pravatar.cc/150?u=sarah',
    content: "Emmanuel captured our wedding so beautifully. Every photo tells a story and brings back the emotions of that day. Truly a master of his craft!",
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CEO, TechFlow',
    image: 'https://i.pravatar.cc/150?u=michael',
    content: "The branding and product photography O'Gbenga Media provided for our launch was exceptional. They understood our vision perfectly.",
    rating: 5,
  },
  {
    name: 'Aisha Bello',
    role: 'Fashion Designer',
    image: 'https://i.pravatar.cc/150?u=aisha',
    content: "I've worked with many photographers, but the attention to detail and creative direction here is on another level. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-zinc-50 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-600 uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-900">
            What Our <span className="italic">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-10 rounded-3xl bg-white border border-emerald-500/10 flex flex-col shadow-sm hover:shadow-xl transition-all"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-emerald-600/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                ))}
              </div>

              <p className="text-zinc-600 leading-relaxed mb-8 flex-grow italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-600/20"
                />
                <div>
                  <h4 className="font-serif text-zinc-900">{t.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
