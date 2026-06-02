import { motion } from 'framer-motion';
import { Shield, Award, Heart, Target } from 'lucide-react';
import { VegBadge } from '../components/ui';

const values = [
  { icon: Shield, title: 'Hygiene', desc: 'Cleanest kitchens, freshest ingredients. We maintain the highest standards of cleanliness and food safety at every branch.' },
  { icon: Award, title: 'Quality', desc: 'Never compromising on taste or standards. Every dish is prepared with premium ingredients and traditional recipes.' },
  { icon: Heart, title: 'Customer Satisfaction', desc: 'Your smile is our success. We go the extra mile to ensure every visit is a memorable experience.' },
];

export default function About() {
  return (
    <div className="font-lato">
      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] min-h-[250px] sm:min-h-[320px] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80" alt="About Lakshmi Groups" className="absolute inset-0 w-full h-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70" />
        <div className="relative z-10 text-center px-3 sm:px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <VegBadge size="md" />
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 sm:mt-4 leading-tight">Our Story</h1>
          </motion.div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-8 sm:py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-maroon mb-4 sm:mb-6 leading-tight">Our Journey</h2>
              <div className="space-y-3 sm:space-y-5 font-lato text-brown/80 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>Since 1995, Lakshmi Groups has been Salem's most trusted pure vegetarian food brand. What started as a humble sweet stall has grown into a full food empire with 6 branches across Salem, serving thousands of families daily with authentic South Indian taste.</p>
                <p>Our founder's vision was simple — to provide the most authentic, pure, and hygienic vegetarian food to the people of Salem. Over three decades, that vision has never changed.</p>
                <p>From a single sweet stall to restaurants, bakeries, juice shops, ice cream parlors, coffee powder stores, event halls, and catering services — Lakshmi Groups has become a complete pure vegetarian food ecosystem for Salem's families.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-3 sm:space-y-5">
              {[
                { year: '1995', event: 'Founded as a sweet stall in Salem', color: 'bg-gold' },
                { year: '2000', event: 'Opened first restaurant & bakery', color: 'bg-maroon' },
                { year: '2008', event: 'Expanded to 3 branches across Salem', color: 'bg-veggreen' },
                { year: '2015', event: 'Launched catering and events division', color: 'bg-gold' },
                { year: '2020', event: '6 branches, 1000+ daily customers', color: 'bg-maroon' },
                { year: '2024', event: "Salem's most trusted pure veg brand", color: 'bg-veggreen' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-2 sm:gap-4">
                  <div className={`w-10 sm:w-12 h-10 sm:h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <span className={`font-playfair font-bold text-xs sm:text-sm ${item.color === 'bg-maroon' || item.color === 'bg-veggreen' ? 'text-white' : 'text-maroon'}`}>{item.year}</span>
                  </div>
                  <div className="flex-1 pt-2 sm:pt-2.5 border-b border-brown/10 pb-2 sm:pb-3">
                    <p className="font-lato text-brown font-bold text-xs sm:text-sm">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-8 sm:py-16 md:py-24" style={{ background: '#FFF8E7' }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
            <h2 className="section-heading">Our Values</h2>
            <p className="section-subtext">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 text-center group hover:-translate-y-1"
              >
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-maroon/10 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-5 group-hover:bg-maroon transition-colors duration-300">
                  <val.icon className="w-6 sm:w-8 h-6 sm:h-8 text-maroon group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-playfair font-bold text-maroon text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">{val.title}</h3>
                <p className="font-lato text-brown/75 text-xs sm:text-sm md:text-base leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-8 sm:py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Target className="w-10 sm:w-12 h-10 sm:h-12 text-gold mx-auto mb-4 sm:mb-5" />
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-maroon mb-4 sm:mb-6">Our Vision</h2>
            <blockquote className="font-playfair text-base sm:text-lg md:text-xl lg:text-2xl text-brown/80 italic leading-relaxed border-l-4 border-gold pl-4 sm:pl-6 text-left max-w-2xl mx-auto">
              "To become the largest trusted premium pure vegetarian food brand in Tamil Nadu"
            </blockquote>
            <p className="font-lato text-brown/70 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
              Building on three decades of trust, we continue to expand our footprint while never compromising on the values that made us Salem's favorite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pure Veg Promise */}
      <section className="py-14 md:py-20" style={{ background: '#2E7D32' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="veg-symbol" style={{ borderColor: 'white', width: 20, height: 20 }} />
              <span className="font-lato font-bold text-white/80 tracking-widest text-sm uppercase">Our Promise</span>
              <span className="veg-symbol" style={{ borderColor: 'white', width: 20, height: 20 }} />
            </div>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              We are proudly 100% Pure Vegetarian.
            </h2>
            <p className="font-lato text-white/85 text-xl md:text-2xl font-bold mb-3">No eggs. No meat. No compromise.</p>
            <p className="font-lato text-white/70 text-lg">Serving pure food since 1995.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
