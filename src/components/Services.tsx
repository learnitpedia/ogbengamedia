import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Camera, Palette, Printer, Gift, Users, Heart, ShoppingBag, Image, X, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    description: 'Capturing the romance and joy of your special day with cinematic elegance.',
    details: 'Our wedding photography service is designed to capture the essence of your love story. We provide full-day coverage, from preparation to the final dance, ensuring every precious moment is preserved.',
    features: ['Full Day Coverage', 'High-Resolution Digital Gallery', 'Professional Photo Editing', 'Optional Wedding Album'],
    image: 'https://picsum.photos/seed/wedding-detail/800/600'
  },
  {
    icon: Users,
    title: 'Studio Portraits',
    description: 'Professional studio sessions designed to bring out your best self.',
    details: 'Whether for professional headshots or personal keepsakes, our studio sessions offer a controlled environment with expert lighting to highlight your personality.',
    features: ['Professional Lighting', 'Multiple Outfit Changes', 'Instant Preview', 'Retouched Digital Files'],
    image: 'https://picsum.photos/seed/studio-detail/800/600'
  },
  {
    icon: Camera,
    title: 'Outdoor Photography',
    description: 'Natural light photography in stunning locations for a fresh, organic feel.',
    details: 'We utilize the beauty of natural light and scenic locations to create organic, vibrant images that feel authentic and full of life.',
    features: ['Location Scouting', 'Natural Light Expertise', 'Candid & Posed Shots', 'Flexible Scheduling'],
    image: 'https://picsum.photos/seed/outdoor-detail/800/600'
  },
  {
    icon: Image,
    title: 'Events',
    description: 'Comprehensive coverage for corporate events, parties, and celebrations.',
    details: 'From corporate conferences to intimate birthday parties, we provide professional coverage that captures the atmosphere and key moments of your event.',
    features: ['Event Highlights', 'Fast Turnaround', 'Group Photos', 'Candid Moments'],
    image: 'https://picsum.photos/seed/event-detail/800/600'
  },
  {
    icon: ShoppingBag,
    title: 'Product Photography',
    description: 'High-end visuals for your products that drive sales and brand appeal.',
    details: 'We create compelling product imagery that showcases your items in the best light, perfect for e-commerce, social media, and marketing materials.',
    features: ['Clean Backgrounds', 'Lifestyle Staging', 'Macro Details', 'E-commerce Ready'],
    image: 'https://picsum.photos/seed/product-detail/800/600'
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative branding, logos, and marketing materials for your business.',
    details: 'Our design team works with you to create a cohesive visual identity that resonates with your audience and elevates your brand presence.',
    features: ['Logo Design', 'Brand Guidelines', 'Marketing Collateral', 'Social Media Graphics'],
    image: 'https://picsum.photos/seed/design-detail/800/600'
  },
  {
    icon: Printer,
    title: 'Printing Services',
    description: 'Premium quality prints on various materials with precision and care.',
    details: 'We offer high-quality printing solutions for everything from business cards to large-scale banners, ensuring your physical materials look as good as your digital ones.',
    features: ['Large Format Printing', 'Business Stationery', 'Custom Finishes', 'Quick Turnaround'],
    image: 'https://picsum.photos/seed/print-detail/800/600'
  },
  {
    icon: Gift,
    title: 'Gift Customization',
    description: 'Unique, personalized gifts that make every occasion memorable.',
    details: 'Transform your photos and designs into personalized gifts. We offer a wide range of customizable items that make perfect presents for any occasion.',
    features: ['Custom Photo Gifts', 'Personalized Branding', 'High-Quality Materials', 'Bulk Orders Available'],
    image: 'https://picsum.photos/seed/gift-detail/800/600'
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 px-6 bg-zinc-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-500 uppercase tracking-[0.3em] text-xs font-semibold mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-zinc-900"
          >
            Our Creative <span className="italic">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-emerald-500/10 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-emerald-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 text-emerald-500">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif mb-4 text-zinc-900 group-hover:text-emerald-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <button 
                onClick={() => setSelectedService(service)}
                className="text-[10px] uppercase tracking-widest font-bold text-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-2"
              >
                Learn More <span className="text-lg">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-zinc-900/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden border border-emerald-500/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-zinc-100 text-zinc-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                onClick={() => setSelectedService(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-full">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600/10 flex items-center justify-center text-emerald-500">
                      <selectedService.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-serif text-zinc-900">{selectedService.title}</h3>
                  </div>
                  
                  <p className="text-zinc-600 leading-relaxed mb-8">
                    {selectedService.details}
                  </p>

                  <div className="space-y-4 mb-10">
                    <h4 className="text-xs uppercase tracking-widest text-emerald-500 font-bold">What's Included</h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {selectedService.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-zinc-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="#booking"
                    onClick={() => setSelectedService(null)}
                    className="inline-block w-full text-center py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-all duration-300 uppercase tracking-widest text-xs font-bold"
                  >
                    Book This Service
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
