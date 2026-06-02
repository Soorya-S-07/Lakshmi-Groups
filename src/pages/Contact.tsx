import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { VegBadge } from '../components/ui';
import { branchAddresses, primaryPhone, primaryEmail, hotelsEmail } from '../data/branches';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', branch: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', branch: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="font-lato">
      {/* Header */}
      <section className="bg-maroon pt-32 pb-12 sm:pb-16 text-center px-3 sm:px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <VegBadge size="md" />
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 mb-2 sm:mb-3">Get In Touch</h1>
          <p className="font-lato text-white/75 text-sm sm:text-base md:text-lg max-w-xl mx-auto px-2">We'd love to hear from you — visit us, call us, or drop a message</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-maroon mb-6 sm:mb-8">Contact Information</h2>

              <div className="space-y-3 sm:space-y-5">
                {[
                  { icon: MapPin, label: 'Address', lines: ['Salem, Tamil Nadu, India'], link: null },
                  { icon: Phone, label: 'Phone', lines: [primaryPhone], link: `tel:${primaryPhone.replace(/\D/g, '')}` },
                  { icon: Mail, label: 'Email (Sweets)', lines: [primaryEmail], link: `mailto:${primaryEmail}` },
                  { icon: Mail, label: 'Email (Hotels)', lines: [hotelsEmail], link: `mailto:${hotelsEmail}` },
                  { icon: MessageCircle, label: 'WhatsApp', lines: [primaryPhone], link: `https://wa.me/${primaryPhone.replace(/\D/g, '')}` },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 sm:gap-4 bg-white rounded-xl p-3 sm:p-5 shadow-card">
                    <div className="w-10 sm:w-11 h-10 sm:h-11 bg-maroon/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 sm:w-5 h-4 sm:h-5 text-maroon" />
                    </div>
                    <div>
                      <div className="font-lato text-xs text-brown/60 uppercase tracking-wide font-bold mb-1">{item.label}</div>
                      {item.lines.map((line, j) =>
                        item.link ? (
                          <a key={j} href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="font-lato font-bold text-maroon hover:text-maroon-600 transition-colors text-base block">
                            {line}
                          </a>
                        ) : (
                          <p key={j} className="font-lato font-bold text-brown text-base">{line}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="mt-6 sm:mt-8 bg-maroon/5 border border-maroon/15 rounded-2xl p-4 sm:p-6">
                <h3 className="font-playfair font-bold text-maroon text-lg sm:text-xl mb-3 sm:mb-4">Opening Hours</h3>
                <div className="space-y-2">
                  {[
                    { day: 'Monday – Friday', time: '7:00 AM – 10:00 PM' },
                    { day: 'Saturday – Sunday', time: '6:30 AM – 11:00 PM' },
                    { day: 'Festivals & Holidays', time: 'Extended hours' },
                  ].map((h, i) => (
                    <div key={i} className="flex justify-between items-center py-1.5 border-b border-maroon/10 last:border-0">
                      <span className="font-lato text-brown/80 text-sm">{h.day}</span>
                      <span className="font-lato font-bold text-maroon text-sm">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Branch Info Note */}
              <div className="mt-6 sm:mt-8 bg-gold/5 border border-gold/20 rounded-2xl p-4 sm:p-5">
                <p className="font-lato text-brown text-xs sm:text-sm leading-relaxed">
                  <span className="font-bold text-maroon">Each branch has its own phone number.</span> For general inquiries, use the main number above. For branch-specific info, visit our Branches page.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-white rounded-2xl shadow-warm-lg p-5 sm:p-8 md:p-10 border border-gold/10">
                <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-maroon mb-1 sm:mb-2">Send a Message</h2>
                <p className="font-lato text-brown/60 mb-6 sm:mb-8 text-xs sm:text-sm">We'll get back to you within 24 hours.</p>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-veggreen mx-auto mb-4" />
                    <h3 className="font-playfair font-bold text-maroon text-2xl mb-2">Message Sent!</h3>
                    <p className="font-lato text-brown/70">Thank you for reaching out. We'll contact you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div>
                      <label className="block font-lato font-bold text-brown/80 text-xs sm:text-sm mb-1.5">Full Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" className="w-full border-2 border-brown/15 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 font-lato text-sm sm:text-base text-brown focus:border-maroon focus:outline-none transition-colors placeholder-brown/30" />
                    </div>
                    <div>
                      <label className="block font-lato font-bold text-brown/80 text-xs sm:text-sm mb-1.5">Phone Number *</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className="w-full border-2 border-brown/15 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 font-lato text-sm sm:text-base text-brown focus:border-maroon focus:outline-none transition-colors placeholder-brown/30" />
                    </div>
                    <div>
                      <label className="block font-lato font-bold text-brown/80 text-xs sm:text-sm mb-1.5">Email</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="w-full border-2 border-brown/15 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 font-lato text-sm sm:text-base text-brown focus:border-maroon focus:outline-none transition-colors placeholder-brown/30" />
                    </div>
                    <div>
                      <label className="block font-lato font-bold text-brown/80 text-xs sm:text-sm mb-1.5">Preferred Branch</label>
                      <select name="branch" value={form.branch} onChange={handleChange} className="w-full border-2 border-brown/15 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 font-lato text-sm sm:text-base text-brown focus:border-maroon focus:outline-none transition-colors bg-white appearance-none">
                        <option value="">Select a branch</option>
                        {branchAddresses.map((b, i) => (
                          <option key={i} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-lato font-bold text-brown/80 text-xs sm:text-sm mb-1.5">Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required placeholder="How can we help you? (orders, catering, events...)" rows={4} className="w-full border-2 border-brown/15 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 font-lato text-sm sm:text-base text-brown focus:border-maroon focus:outline-none transition-colors resize-none placeholder-brown/30" />
                    </div>
                    <button type="submit" className="w-full bg-maroon text-white py-3 sm:py-4 rounded-xl font-lato font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-maroon-600 hover:shadow-warm-lg transition-all duration-300 hover:scale-105 active:scale-95">
                      <Send className="w-4 sm:w-5 h-4 sm:h-5" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-14 rounded-2xl overflow-hidden shadow-warm-lg border border-maroon/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62464.99278891963!2d78.11254559999999!3d11.6643419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1e797481633%3A0x5e1b3e54b4ced20c!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salem Tamil Nadu Map"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
