import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { VegBadge, VegDot } from '../components/ui';

const divisions = [
  { title: 'Restaurants & Hotels', desc: 'Authentic South Indian meals served fresh daily', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80' },
  { title: 'Bakeries', desc: 'Fresh baked goods straight from the oven every morning', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80' },
  { title: 'Sweet Stalls', desc: 'Traditional sweets made with pure ingredients', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
  { title: 'Juice Stalls', desc: 'Fresh fruit juices and cool beverages', img: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&q=80' },
  { title: 'Coffee Powder', desc: 'Premium blend aromatic coffee powder', img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80' },
  { title: 'Ice Cream Shops', desc: 'Cool desserts and sundaes for everyone', img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&q=80' },
  { title: 'Party & Events Halls', desc: 'Perfect venue for all your celebrations', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80' },
  { title: 'Outdoor & Indoor Catering', desc: 'We bring the feast to your doorstep', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80' },
];

const reviews = [
  { name: 'Rajesh Kumar', text: 'Best idli sambar in Salem. Been coming here for 15 years. Quality never drops!', stars: 5, initial: 'R' },
  { name: 'Priya Sundaram', text: 'Their sweets are absolutely divine. Perfect for festivals and celebrations.', stars: 5, initial: 'P' },
  { name: 'Murugan S', text: 'Excellent food, clean environment, very reasonable prices. Highly recommended!', stars: 5, initial: 'M' },
];

function DivisionCard({ division, index }: { division: typeof divisions[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="group card-base overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={division.img} alt={division.title} className="w-full h-full object-cover card-img-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-playfair font-bold text-maroon text-lg mb-1">{division.title}</h3>
        <p className="font-lato text-brown text-sm opacity-80">{division.desc}</p>
      </div>
    </motion.div>
  );
}

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gold/10"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(review.stars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-gold text-gold" />
        ))}
      </div>
      <p className="font-lato text-brown/80 text-base italic leading-relaxed mb-5">"{review.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center font-playfair font-bold text-maroon text-lg">
          {review.initial}
        </div>
        <div>
          <div className="font-lato font-bold text-maroon text-sm">{review.name}</div>
          <div className="font-lato text-xs text-brown/60">Verified Customer</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const trustRef = useRef(null);
  const trustInView = useInView(trustRef, { once: true });

  return (
    <div className="font-lato">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="ken-burns w-full h-full">
            <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1800&q=80" alt="Lakshmi Groups food" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-5">
            <VegBadge size="md" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 leading-tight px-2"
          >
            Salem's Most Trusted <span className="text-gold">Pure Veg</span> Taste Since 1995
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-lato text-white/85 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-3"
          >
            Authentic South Indian Food, Sweets, Bakery & More — <span className="text-gold font-bold">6 Branches Across Salem</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-3"
          >
            <Link to="/menu" className="w-full sm:w-auto bg-maroon hover:bg-maroon-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-lato font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-warm-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              Explore Menu <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/branches" className="w-full sm:w-auto border-2 border-gold text-gold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-lato font-bold text-sm sm:text-base transition-all duration-300 hover:bg-gold hover:text-maroon hover:shadow-gold hover:scale-105 active:scale-95 text-center">
              Find Our Branches
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section ref={trustRef} className="bg-maroon py-5 md:py-6 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center flex-wrap gap-6 md:gap-10">
            {[
              { label: 'Est.', display: '1995' },
              { label: 'Google Rating', display: '4.3' },
              { label: 'Happy Customers', display: '1100+' },
              { label: 'Branches in Salem', display: '6' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={trustInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="flex items-center gap-3 text-white"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <div className="text-center">
                  <div className="font-playfair font-bold text-2xl md:text-3xl text-gold">{item.display}</div>
                  <div className="font-lato text-white/70 text-xs tracking-wide uppercase">{item.label}</div>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={trustInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 text-white"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              <div className="flex items-center gap-2">
                <span className="veg-symbol" />
                <span className="font-lato font-bold text-white text-sm tracking-wide">100% Pure Vegetarian</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-12 sm:py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-12">
            <h2 className="section-heading">Everything We Serve</h2>
            <p className="section-subtext">From wholesome meals to sweet celebrations — all under one trusted name</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {divisions.map((div, i) => (
              <DivisionCard key={i} division={div} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/divisions" className="inline-flex items-center gap-2 text-maroon font-lato font-bold hover:text-maroon-600 transition-colors group">
              Explore All Divisions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-warm-lg">
                <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80" alt="Lakshmi Groups kitchen" className="w-full h-80 md:h-96 object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-gold rounded-2xl px-6 py-4 shadow-gold">
                <div className="font-playfair font-bold text-maroon text-3xl">25+</div>
                <div className="font-lato text-maroon/80 text-sm font-bold">Years of Trust</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <VegBadge size="sm" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-maroon mt-4 mb-5 leading-tight">25+ Years of Authentic Taste</h2>
              <p className="font-lato text-brown/80 text-lg leading-relaxed mb-4">
                Since 1995 Lakshmi Groups has been Salem's most beloved pure vegetarian food destination. From humble beginnings to 6 thriving branches, our commitment to quality, hygiene and authentic taste has never wavered.
              </p>
              <p className="font-lato text-brown/70 text-base leading-relaxed mb-8">
                Every dish we serve is a testament to our passion for traditional South Indian flavors, crafted with the freshest ingredients and love.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 bg-maroon text-white px-7 py-3.5 rounded-full font-lato font-bold hover:bg-maroon-600 hover:shadow-warm-lg hover:scale-105 transition-all duration-300 group">
                Read Our Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="section-heading">What Salem Says About Us</h2>
            <p className="section-subtext">Thousands of happy families — their words say it best</p>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
              <span className="font-lato font-bold text-maroon ml-2 text-lg">4.3</span>
              <span className="font-lato text-brown/60 ml-1">on Google</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ReviewCard key={i} review={r} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-maroon py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-2 mb-5">
              <VegDot />
              <span className="font-lato text-gold/80 text-sm font-bold tracking-widest uppercase">Since 1995</span>
            </div>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gold mb-5 leading-tight">
              Ready to Experience the<br />Taste of Tradition?
            </h2>
            <p className="font-lato text-white/75 text-lg mb-8 max-w-xl mx-auto">
              Visit any of our 6 branches or get in touch for catering and event inquiries.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-maroon px-10 py-4 rounded-full font-lato font-bold text-lg transition-all duration-300 hover:shadow-gold hover:scale-105 active:scale-95">
              Contact Us Today <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
