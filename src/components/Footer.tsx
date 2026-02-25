import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 pt-24 pb-12 px-6 border-t border-emerald-500/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <a href="#" className="flex flex-col">
              <span className="text-3xl font-serif text-emerald-500 leading-none">O'GBENGA</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400">Media</span>
            </a>
            <p className="text-zinc-600 leading-relaxed">
              Premium creative media brand specializing in photography, branding, printing, and customized gifts. Preserving your most precious moments.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Instagram, href: 'https://instagram.com/ogbengamedia' },
                { Icon: Facebook, href: 'https://facebook.com/ogbengamedia' },
                { Icon: Twitter, href: 'https://twitter.com/ogbengamedia' }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-emerald-500/10 flex items-center justify-center text-zinc-500 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-zinc-900 font-serif text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Booking'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-zinc-500 hover:text-emerald-500 transition-colors text-sm uppercase tracking-widest">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-900 font-serif text-lg mb-8">Our Services</h4>
            <ul className="space-y-4">
              {['Photography', 'Branding', 'Printing', 'Custom Gifts', 'Event Coverage'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-zinc-500 hover:text-emerald-500 transition-colors text-sm uppercase tracking-widest">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-900 font-serif text-lg mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-zinc-600 text-sm leading-relaxed">
                  123 Creative Avenue, <br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-zinc-600 text-sm">+234 903 917 2776</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-zinc-600 text-sm">hello@ogbengamedia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-emerald-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-600 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} O'Gbenga Media. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-[10px] uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-[10px] uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
