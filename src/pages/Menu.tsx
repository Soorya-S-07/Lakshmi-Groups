import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VegBadge, VegDot } from '../components/ui';

type MenuItem = string;

interface Category {
  name: string;
  img: string;
  items: MenuItem[];
}

interface Tab {
  id: string;
  label: string;
  categories: Category[];
}

const tabs: Tab[] = [
  {
    id: 'breakfast',
    label: 'Breakfast',
    categories: [
      { name: 'Breakfast Specials', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80', items: ['Kesari', 'Idli (2 pcs)', 'Mini Sambar Idli', 'Pongal', 'Poori Set', 'Idiyappam', 'Vadai (2 pcs)', 'Sambar Vadai Set', 'Curd Vadai', 'Medhu Vadai'] },
      { name: 'Dosai Varieties', img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80', items: ['Plain Dosai', 'Masala Dosai', 'Ragi Dosai', 'Wheat Dosai', 'Rava Roast', 'Paper Roast', 'Ghee Roast', 'Podi Roast', 'Onion Roast', 'Ghee Podi Roast', 'Ghee Masala Roast', 'Mundhri Rava', 'Butter Masala Roast', 'Ghee Onion Roast', 'Ghee Rava', 'Ghee Mundhri Rava', 'Onion Rava'] },
      { name: 'Uttapam Varieties', img: 'https://images.unsplash.com/photo-1630409351217-bc4fa6422075?w=600&q=80', items: ['Uttapam', 'Onion Uttapam', 'Mundhri Uttapam', 'Podi Uttapam', 'Onion Podi Uttapam'] },
    ],
  },
  {
    id: 'lunch',
    label: 'Lunch',
    categories: [
      { name: 'Idli Specials', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80', items: ['Idli Fry', 'Chilli Idli', 'Pepper Idli', 'Mini Sambar Idli'] },
      { name: 'Starters', img: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&q=80', items: ['Chilli Gobi', 'Gobi Manchurian', 'Mushroom Manchurian', 'Paneer Manchurian', 'Chilli Paneer', 'Chilli Mushroom', 'Dragon Gobi', 'Dragon Mushroom', 'Mushroom Pepper Fry', 'Paneer Hot Pepper', 'Mushroom Hot Pepper', 'Gobi Hot Pepper'] },
      { name: 'Indian Breads', img: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=600&q=80', items: ['Chapathi', 'Parotta', 'Chilly Parotta', 'Kaima Parotta', 'Ghee Parotta', 'Chilli Kothu Parotta', 'Mushroom Kothu Parotta', 'Paneer Kothu Parotta', 'Parotta Fry', 'Pulka'] },
      { name: 'Rice Varieties', img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80', items: ['Sambar Rice', 'Mushroom Dum Biryani', 'Curd Rice', 'Veg Fried Rice', 'Mushroom Fried Rice', 'Paneer Fried Rice', 'Schezwan Fried Rice', 'Shanghai Fried Rice', 'Veg Pulao', 'Cashew Pulao', 'Ghee Rice', 'Peas Pulao', 'Veg Biryani'] },
      { name: 'Noodles', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80', items: ['Veg Noodles', 'Paneer Noodles', 'Mushroom Noodles', 'Schezwan Noodles', 'Shanghai Noodles'] },
      { name: 'Snacks', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80', items: ['Samosa (2 pieces)'] },
    ],
  },
  {
    id: 'dinner',
    label: 'Dinner',
    categories: [
      { name: 'Starters', img: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&q=80', items: ['Gobi Manchurian', 'Mushroom Manchurian', 'Paneer Manchurian', 'Chilli Mushroom', 'Chilli Paneer', 'Chilli Gobi', 'Dragon Gobi', 'Dragon Mushroom', 'Dragon Paneer', 'Mushroom Pepper Fry', 'Mushroom Hot Pepper', 'Gobi Hot Pepper', 'Paneer Hot Pepper'] },
      { name: 'Dosai Varieties', img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80', items: ['Plain Dosai', 'Rava Roast', 'Paper Roast', 'Ghee Roast', 'Podi Roast', 'Mundhri Rava', 'Ghee Podi Roast', 'Onion Roast', 'Ghee Masala Roast', 'Masala Dosai', 'Butter Masala Roast', 'Ghee Onion Roast', 'Ghee Rava', 'Ghee Mundhri Rava', 'Ragi Dosai', 'Wheat Dosai', 'Plain Masala Dosai', 'Ghee Plain'] },
      { name: 'Uttapam', img: 'https://images.unsplash.com/photo-1630409351217-bc4fa6422075?w=600&q=80', items: ['Uttapam', 'Onion Uttapam', 'Mundhri Uttapam', 'Podi Uttapam', 'Onion Podi Uttapam'] },
      { name: 'Noodles & Fried Rice', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80', items: ['Veg Noodles', 'Paneer Noodles', 'Mushroom Noodles', 'Schezwan Noodles', 'Shanghai Noodles', 'Veg Fried Rice', 'Mushroom Fried Rice', 'Paneer Fried Rice', 'Schezwan Fried Rice', 'Shanghai Fried Rice', 'Veg Pulao', 'Cashew Pulao'] },
      { name: 'Indian Breads', img: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=600&q=80', items: ['Chapathi', 'Parotta', 'Chilly Parotta', 'Kaima Parotta', 'Ghee Parotta', 'Chole Puri'] },
      { name: 'Gravies', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80', items: ['Lakshmi Special Gravy', 'Gobi Masala', 'Paneer Butter Masala', 'Mushroom Masala', 'Mix Veg Curry', 'Kadai Gobi Masala', 'Kadai Veg Masala', 'Kaju Masala', 'Channa Masala', 'Cashew Paneer Masala', 'Cashew Mushroom Masala', 'Kadai Paneer Masala'] },
    ],
  },
];

function CategoryCard({ category, catIndex }: { category: Category; catIndex: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: catIndex * 0.08 }}
      className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      <div className="relative h-40 sm:h-44 overflow-hidden group">
        <img src={category.img} alt={category.name} className="w-full h-full object-cover card-img-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
          <h3 className="font-playfair font-bold text-white text-base sm:text-lg">{category.name}</h3>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="veg-symbol" style={{ borderColor: 'white', width: 12, height: 12 }} />
            <span className="font-lato text-white/80 text-xs">Pure Vegetarian</span>
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-4 md:p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-2 sm:gap-x-3">
          {category.items.map((item, j) => (
            <div key={j} className="flex items-center gap-2">
              <VegDot />
              <span className="font-lato text-brown text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('breakfast');
  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <div className="font-lato">
      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[45vh] min-h-[250px] sm:min-h-[280px] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1800&q=80" alt="Our Menu" className="absolute inset-0 w-full h-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70" />
        <div className="relative z-10 text-center px-3 sm:px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <VegBadge size="md" />
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 sm:mt-4 mb-2 leading-tight">Our Menu</h1>
            <p className="font-lato text-white/80 text-sm sm:text-base md:text-lg">100% Pure Vegetarian — Fresh Daily</p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 sm:py-12 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 mb-8 sm:mb-12 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 md:px-10 py-2 sm:py-3 rounded-full font-lato font-bold text-xs sm:text-sm md:text-base whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-maroon text-white shadow-warm'
                    : 'bg-white text-brown border-2 border-brown/20 hover:border-maroon/40 hover:text-maroon'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {currentTab.categories.map((cat, i) => (
                  <CategoryCard key={cat.name} category={cat} catIndex={i} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
