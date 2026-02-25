import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { MessageSquare, Calendar, User, Mail, Phone, Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

export default function Booking() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert('Thank you! We will get back to you soon.');
  };

  return (
    <section id="booking" className="py-24 px-6 bg-[#fdfcfb] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-600 uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-zinc-900">
              Ready to Start Your <br />
              <span className="italic text-emerald-600">Visual Journey?</span>
            </h2>
            <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
              Whether it's a wedding, a brand refresh, or a custom gift, we're here to bring your vision to life. Fill out the form or reach out via WhatsApp for a quick consultation.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-emerald-500/10 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/10 flex items-center justify-center text-emerald-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Email Us</p>
                  <p className="text-zinc-900 font-medium">hello@ogbengamedia.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-emerald-500/10 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/10 flex items-center justify-center text-emerald-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Call Us</p>
                  <p className="text-zinc-900 font-medium">+234 903 917 2776</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/2349039172776"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-lg shadow-green-500/20"
            >
              <MessageSquare className="w-5 h-5" />
              Quick WhatsApp Booking
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-white border border-emerald-500/10 backdrop-blur-xl shadow-xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      {...register('name', { required: true })}
                      placeholder="John Doe"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-4 pl-12 pr-4 text-zinc-900 focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      {...register('email', { required: true })}
                      placeholder="john@example.com"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-4 pl-12 pr-4 text-zinc-900 focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-2">Service Needed</label>
                  <select
                    {...register('service', { required: true })}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-4 px-4 text-zinc-900 focus:border-emerald-500 outline-none transition-all appearance-none"
                  >
                    <option value="">Select Service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Studio Portrait</option>
                    <option value="branding">Branding & Design</option>
                    <option value="printing">Printing Services</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-2">Event Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="date"
                      {...register('date')}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-4 pl-12 pr-4 text-zinc-900 focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-2">Your Message</label>
                <textarea
                  {...register('message', { required: true })}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-4 px-4 text-zinc-900 focus:border-emerald-500 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-all duration-300 uppercase tracking-[0.2em] text-sm font-bold flex items-center justify-center gap-3 group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
