import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { branches, primaryPhone, primaryEmail, hotelsEmail } from '../data/branches';

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <footer ref={ref} className="bg-brown-dark text-white/90" style={{ background: '#2E1A06' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-10 sm:py-14 md:py-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <img src="/image.png" alt="Lakshmi Groups Logo" className="h-8 sm:h-10 w-auto" />
              <div>
                <div className="text-white/60 text-xs font-lato">Salem, Tamil Nadu</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-veggreen/20 border border-veggreen/40 rounded-xl px-3 sm:px-4 py-2 sm:py-3 mb-4 sm:mb-5 w-fit">
              <span className="veg-symbol" />
              <span className="text-veggreen-light font-lato font-bold text-xs sm:text-sm">100% Pure Vegetarian</span>
            </div>
            <p className="text-white/60 font-lato text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Salem's most trusted pure vegetarian food brand since 1995. Serving authentic South Indian taste across 6 branches.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a href="#" className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-white/10 hover:bg-gold hover:text-maroon flex items-center justify-center transition-all duration-200">
                <Facebook className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </a>
              <a href="#" className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-white/10 hover:bg-gold hover:text-maroon flex items-center justify-center transition-all duration-200">
                <Instagram className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-playfair font-bold text-gold text-base sm:text-lg mb-3 sm:mb-5">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/menu', label: 'Our Menu' },
                { to: '/divisions', label: 'Divisions' },
                { to: '/branches', label: 'Branches' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/70 hover:text-gold font-lato text-xs sm:text-sm transition-colors duration-200 hover:pl-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-bold text-gold text-base sm:text-lg mb-3 sm:mb-5">Contact Us</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/70 font-lato text-xs sm:text-sm">Salem, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold flex-shrink-0" />
                <a href={`tel:${primaryPhone.replace(/\D/g, '')}`} className="text-white/70 hover:text-gold font-lato text-xs sm:text-sm transition-colors">{primaryPhone}</a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold flex-shrink-0" />
                <a href={`mailto:${primaryEmail}`} className="text-white/70 hover:text-gold font-lato text-xs sm:text-sm transition-colors break-all">{primaryEmail}</a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold flex-shrink-0" />
                <a href={`mailto:${hotelsEmail}`} className="text-white/70 hover:text-gold font-lato text-xs sm:text-sm transition-colors break-all">{hotelsEmail}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-bold text-gold text-base sm:text-lg mb-3 sm:mb-5">Our Branches</h4>
            <ul className="space-y-2 sm:space-y-3">
              {branches.map((b, i) => (
                <li key={i} className="border-b border-white/10 pb-2 sm:pb-3 last:border-0 last:pb-0">
                  <div className="flex items-start gap-1.5 sm:gap-2">
                    <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white/80 font-lato text-xs font-bold leading-snug">{b.name}</div>
                      <div className="text-white/50 font-lato text-xs">{b.address}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2">
            <span className="veg-symbol" />
            <p className="text-white/50 font-lato text-xs sm:text-sm">© 2024 Lakshmi Groups Salem. All rights reserved.</p>
          </div>
          <p className="text-white/40 font-lato text-xs">Proudly 100% Pure Vegetarian Since 1995</p>
        </div>
      </div>
    </footer>
  );
}
