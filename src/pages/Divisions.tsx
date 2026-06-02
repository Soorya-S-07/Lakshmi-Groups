import { motion } from 'framer-motion';
import { UtensilsCrossed, Cookie, Candy, Droplets, Coffee, IceCream, PartyPopper, Truck } from 'lucide-react';
import { VegBadge } from '../components/ui';

const divisions = [
  { icon: UtensilsCrossed, title: 'Restaurants & Hotels', desc: 'Authentic South Indian meals served fresh daily. Our restaurants are the heart of Lakshmi Groups — serving steaming idlis, crispy dosais, aromatic biryanis, and full meals that keep customers coming back for decades.', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80' },
  { icon: Cookie, title: 'Bakeries', desc: 'Fresh baked goods every single morning. Our bakeries produce a wide range of breads, cakes, pastries, and snacks — all freshly baked and delivered to our branches at dawn.', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80' },
  { icon: Candy, title: 'Sweet Stalls', desc: 'Traditional sweets for every occasion. From Mysore Pak and Ladoo to Halwa and Barfi — our sweets are crafted using age-old recipes with pure ghee and premium ingredients.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80' },
  { icon: Droplets, title: 'Juice Stalls', desc: 'Fresh squeezed juices and cool drinks. Seasonal fruits, fresh sugarcane, cool shakes and mocktails — all prepared hygienically and served instantly.', img: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=900&q=80' },
  { icon: Coffee, title: 'Coffee Powder', desc: 'Premium aromatic coffee powder blends. Our signature coffee powder blend is roasted and ground in-house using select coffee beans — a Salem favourite for home brewing.', img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900&q=80' },
  { icon: IceCream, title: 'Ice Cream Shops', desc: 'Delicious cool desserts for all ages. Handcrafted ice creams, sundaes, kulfi, and dessert platters — pure vegetarian and made with love.', img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=900&q=80' },
  { icon: PartyPopper, title: 'Party & Events Halls', desc: 'Make your celebrations unforgettable. Our elegantly decorated event halls can host weddings, receptions, birthday parties, corporate events, and more — with our in-house catering team.', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80' },
  { icon: Truck, title: 'Outdoor & Indoor Catering', desc: 'Full catering service at your venue. We bring the complete Lakshmi Groups experience to your home, office, or event hall — from setup to service, everything handled professionally.', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=900&q=80' },
];

export default function Divisions() {
  return (
    <div className="font-lato">
      {/* Header */}
      <section className="bg-maroon pt-32 pb-12 sm:pb-16 text-center px-3 sm:px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <VegBadge size="md" />
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 mb-2 sm:mb-3">Our Divisions</h1>
          <p className="font-lato text-white/75 text-sm sm:text-base md:text-lg max-w-xl mx-auto px-2">One group, multiple ways to serve Salem</p>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="py-8 sm:py-12 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {divisions.map((div, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.12 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img src={div.img} alt={div.title} className="w-full h-full object-cover card-img-zoom" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 flex items-center gap-2 sm:gap-3">
                    <div className="w-9 sm:w-11 h-9 sm:h-11 bg-gold rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                      <div.icon className="w-5 sm:w-6 h-5 sm:h-6 text-maroon" />
                    </div>
                    <h2 className="font-playfair font-bold text-white text-base sm:text-lg md:text-xl leading-tight">{div.title}</h2>
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <p className="font-lato text-brown/80 text-xs sm:text-sm md:text-base leading-relaxed">{div.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
