import { motion } from 'framer-motion';
import { MapPin, Phone, Navigation } from 'lucide-react';
import { VegBadge } from '../components/ui';
import { branches } from '../data/branches';

export default function Branches() {
  return (
    <div className="font-lato">
      {/* Header */}
      <section className="bg-maroon pt-32 pb-12 sm:pb-16 text-center px-3 sm:px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <VegBadge size="md" />
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 mb-2 sm:mb-3">Find Us Near You</h1>
          <p className="font-lato text-white/75 text-sm sm:text-base md:text-lg max-w-xl mx-auto px-2">6 branches across Salem serving you daily</p>
        </motion.div>
      </section>

      {/* Cards */}
      <section className="py-8 sm:py-12 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
            {branches.map((branch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group hover:-translate-y-1"
              >
                <div className="bg-maroon/5 px-4 sm:px-6 py-3 sm:py-4 border-b border-maroon/10">
                  <div className="flex items-center justify-between">
                    <span className="font-playfair font-bold text-gold text-2xl sm:text-3xl opacity-40">{branch.number}</span>
                    <div className="w-8 sm:w-9 h-8 sm:h-9 bg-maroon rounded-xl flex items-center justify-center">
                      <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold" />
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="font-playfair font-bold text-maroon text-base sm:text-lg leading-snug mb-2">{branch.name}</h3>
                  <div className="flex items-start gap-2 text-brown/70 mb-3 sm:mb-4">
                    <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="font-lato text-xs sm:text-sm">{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-brown/70 mb-4 sm:mb-6">
                    <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold flex-shrink-0" />
                    <span className="font-lato text-xs sm:text-sm font-bold">{branch.phone}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a href={`tel:${branch.raw}`} className="flex-1 flex items-center justify-center gap-2 bg-maroon text-white py-2 sm:py-2.5 rounded-xl font-lato font-bold text-xs sm:text-sm hover:bg-maroon-600 hover:shadow-warm transition-all duration-200 hover:scale-105 active:scale-95">
                      <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> Call
                    </a>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(branch.name + ', ' + branch.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border-2 border-gold text-gold py-2 sm:py-2.5 rounded-xl font-lato font-bold text-xs sm:text-sm hover:bg-gold hover:text-maroon hover:shadow-gold transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                      <Navigation className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> Directions
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-warm-lg border border-maroon/10"
          >
            <div className="bg-maroon px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3">
              <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-gold" />
              <h3 className="font-playfair font-bold text-white text-base sm:text-lg">Salem, Tamil Nadu</h3>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62464.99278891963!2d78.11254559999999!3d11.6643419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1e797481633%3A0x5e1b3e54b4ced20c!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lakshmi Groups Salem Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
