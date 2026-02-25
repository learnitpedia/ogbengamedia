import { motion } from 'motion/react';

const stats = [
  { label: 'Years of Experience', value: '8+' },
  { label: 'Projects Completed', value: '500+' },
  { label: 'Happy Clients', value: '300+' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#fdfcfb] transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-emerald-500/10">
            <img
              src="https://drive.google.com/thumbnail?id=1gaQjQaLIHUtq2Qz5BRtYNTIALAyROZTY&sz=w1000"
              alt="Emmanuel Adeyi - Founder"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-600/10 rounded-2xl -z-10 blur-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-emerald-500 uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight text-zinc-800">
            Crafting Excellence in <br />
            <span className="italic">Visual Communication</span>
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed mb-8">
            O'Gbenga Media is a premier creative agency founded by Emmanuel Adeyi. We believe that every moment has a story, and every brand has a soul. Our mission is to capture those fleeting moments and transform them into timeless visual narratives through photography, branding, and high-quality printing.
          </p>
          <div className="grid grid-cols-3 gap-8 mb-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-serif text-emerald-500 mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="p-6 border-l-2 border-emerald-600 bg-emerald-600/5 rounded-r-xl">
            <p className="text-zinc-700 italic">
              "To be the leading voice in visual storytelling, where creativity meets precision to leave a lasting impact on every client we serve."
            </p>
            <span className="block mt-2 text-xs uppercase tracking-widest text-emerald-500 font-bold">
              — Our Mission
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
