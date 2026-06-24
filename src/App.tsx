import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MASSAGES, GALLERY, TESTIMONIALS } from './data';
import { MapPin, Instagram, Facebook, Phone, MessageCircle, Mail, ChevronRight, Star, Heart } from 'lucide-react';

const WhatsAppNumber = "8273319994";
const WhatsAppLink = `https://wa.me/${WhatsAppNumber}?text=Hello%20Eeva%20Wellness%20SPA%2C%20I%20would%20like%20to%20book%20an%20appointment.`;
const EmailAddress = "aanchalrawat661@gmail.com";

const Nav = () => (
  <nav className="fixed w-full z-50 glass-panel border-b border-white/40 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
    <a href="#home" className="font-serif text-2xl font-bold tracking-widest text-[#3b2b2c]">
      Eeva<span className="text-[#d4a3a6]">.</span>
    </a>
    <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[#3b2b2c]/80">
      <a href="#about" className="hover:text-[#d4a3a6] transition-colors">Story</a>
      <a href="#services" className="hover:text-[#d4a3a6] transition-colors">Services</a>
      <a href="#gallery" className="hover:text-[#d4a3a6] transition-colors">Gallery</a>
      <a href="#testimonials" className="hover:text-[#d4a3a6] transition-colors">Reviews</a>
    </div>
    <a 
      href="#booking"
      className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#d4a3a6] to-[#f3cdd0] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-[#d4a3a6]/40 hover:shadow-[#d4a3a6]/60"
    >
      Book Now
    </a>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#fff5f7]">
    <div className="absolute inset-0 z-0">
      <motion.img 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop" 
        alt="Luxury spa background" 
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff5f7]/60 via-white/40 to-[#fff5f7]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#d4a3a6]/20 to-transparent mix-blend-overlay"></div>
    </div>
    
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <span className="uppercase tracking-[0.4em] text-[#d4a3a6] text-xs font-bold mb-6 block drop-shadow-sm">Welcome to Luxury</span>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium mb-6 text-[#3b2b2c] drop-shadow-sm leading-none">
          Eeva Wellness
        </h1>
        <p className="text-xl md:text-3xl text-[#3b2b2c]/80 font-light italic mb-12 font-serif">
          Relax &bull; Refresh &bull; Rejuvenate
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#d4a3a6] to-[#e8a2a8] text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl shadow-[#d4a3a6]/50"
          >
            Book Appointment
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={WhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 glass-panel text-[#3b2b2c] px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-xl"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            WhatsApp Reservation
          </motion.a>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-[#3b2b2c]/70 text-sm font-medium tracking-wider">
          <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#d4a3a6]" /> 📱 {WhatsAppNumber}</div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-[#d4a3a6]"></div>
          <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#d4a3a6]" /> 📧 {EmailAddress}</div>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 relative overflow-hidden bg-[#fff5f7]">
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="text-[#d4a3a6] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Our Philosophy</div>
          <h2 className="font-serif text-5xl md:text-6xl mb-8 text-[#3b2b2c] leading-tight">A Sanctuary of<br/>Holistic Healing</h2>
          <div className="h-px w-24 bg-[#d4a3a6] mb-8"></div>
          <p className="text-[#3b2b2c]/80 text-lg font-light leading-relaxed mb-6">
            At Eeva Wellness SPA, we believe true wellness transcends the physical. Our ultra-modern sanctuary is deeply rooted in feminine elegance, blending ancient healing traditions with premium luxury to create a space where body, mind, and spirit find perfect harmony.
          </p>
          <p className="text-[#3b2b2c]/80 text-lg font-light leading-relaxed mb-10">
            Step into an ambient atmosphere of soft glow lighting, the aroma of rare orchids, and our unparalleled commitment to your rejuvenation. This is your personal escape.
          </p>
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop" alt="Spa Detail" className="w-48 h-32 object-cover rounded-[1.5rem] shadow-lg border border-white/50" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#d4a3a6]/30 to-transparent blur-3xl rounded-full translate-x-10 translate-y-10 mix-blend-multiply"></div>
          <div className="relative p-3 glass-panel rounded-[2rem]">
            <img 
              src="https://images.unsplash.com/photo-1608280731175-b27bdafc222e?q=80&w=1000&auto=format&fit=crop" 
              alt="Luxury spa interior"
              className="rounded-[1.5rem] w-full h-[600px] object-cover"
            />
          </div>
          
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-3xl shadow-2xl border border-white/60"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/60 p-4 rounded-full text-[#d4a3a6]">
                <Heart className="w-8 h-8" fill="currentColor" />
              </div>
              <div>
                <p className="font-serif text-2xl text-[#3b2b2c]">Premium Care</p>
                <p className="text-[10px] uppercase tracking-widest text-[#3b2b2c]/60 font-bold">5 Star Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="text-center mb-24">
      <h2 className="font-serif text-5xl md:text-6xl mb-6 text-[#3b2b2c]">Premium Massages</h2>
      <div className="h-px w-32 bg-[#d4a3a6] mx-auto mb-6"></div>
      <p className="text-[#3b2b2c]/70 max-w-2xl mx-auto text-lg font-light">
        A bespoke collection of ultra-luxury therapies designed to heal, nourish, and revitalize.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {MASSAGES.map((massage, index) => (
        <motion.div 
          key={massage.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
          className="group glass-panel rounded-[2rem] overflow-hidden neon-glow flex flex-col cursor-pointer"
        >
          <div className="relative h-64 overflow-hidden p-2 rounded-[2rem]">
            <div className="absolute inset-0 bg-[#3b2b2c]/20 group-hover:bg-transparent transition-colors z-10 duration-500 rounded-[2rem]"></div>
            <img 
              src={massage.image} 
              alt={massage.title} 
              className="w-full h-full object-cover rounded-[1.5rem] group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-sm text-[#d4a3a6] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
              {massage.duration}
            </div>
          </div>
          
          <div className="p-8 flex flex-col flex-grow relative bg-gradient-to-b from-transparent to-white/30">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.floor(massage.rating) ? 'text-[#d4a3a6] fill-[#d4a3a6]' : 'text-gray-300'}`} />
              ))}
            </div>
            <h3 className="font-serif text-2xl font-medium mb-3 text-[#3b2b2c] group-hover:text-[#d4a3a6] transition-colors">{massage.title}</h3>
            <p className="text-[#3b2b2c]/70 font-light text-sm mb-6 flex-grow leading-relaxed">
              {massage.description}
            </p>
            
            <div className="flex flex-col gap-2 mb-6 border-y border-[#d4a3a6]/20 py-4">
                {massage.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#3b2b2c]/80 uppercase tracking-widest font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a3a6]"></span>{benefit}
                  </div>
                ))}
            </div>

            <div className="flex items-end justify-between mt-auto">
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#3b2b2c]/50 mb-1">Starting from</p>
                <span className="font-serif font-medium text-2xl text-[#d4a3a6]">{massage.price.split(' / ')[0]}</span>
              </div>
              <a href="#booking" className="flex items-center gap-2 bg-[#fff5f7] border border-[#d4a3a6]/50 text-[#d4a3a6] px-5 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold group-hover:bg-[#d4a3a6] group-hover:text-white group-hover:border-transparent transition-all">
                Reserve <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const GallerySection = () => (
  <section id="gallery" className="py-32 px-4 md:px-6 bg-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-l from-[#fff5f7] to-transparent bg-[length:100%_100%]"></div>
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-serif text-5xl md:text-6xl mb-6 text-[#3b2b2c]">Spa Visuals</h2>
        <div className="h-px w-24 bg-[#d4a3a6] mx-auto"></div>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto space-y-6 relative z-10">
        {GALLERY.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity:0, y: 20 }}
              whileInView={{opacity:1, y: 0}}
              viewport={{once:true}}
              transition={{delay: (i%3)*0.1, duration: 0.8}}
              className="break-inside-avoid shadow-2xl shadow-[#d4a3a6]/20 rounded-[2.5rem] overflow-hidden group cursor-pointer border-4 border-white"
            >
              <div className="relative">
                  <div className="absolute inset-0 bg-[#d4a3a6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-multiply"></div>
                  <img src={img} alt="Gallery" className="w-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              </div>
            </motion.div>
        ))}
      </div>
  </section>
);

const TestimonialSection = () => (
  <section id="testimonials" className="py-32 bg-[#fff5f7] relative overflow-hidden">
      <div className="absolute -left-40 top-20 w-96 h-96 bg-[#d4a3a6]/20 rounded-full blur-[120px]"></div>
      <div className="absolute -right-40 bottom-20 w-96 h-96 bg-[#d4a3a6]/20 rounded-full blur-[120px]"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-[#3b2b2c]">Client Reverie</h2>
          <div className="h-px w-24 bg-[#d4a3a6] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="glass-panel p-10 rounded-[2.5rem] relative neon-glow">
                  <div className="text-[#d4a3a6] opacity-30 mb-8 transform -translate-x-2">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L16.41 14.594C16.894 13.25 17.5 12.394 18.232 12.023C18.964 11.653 20.089 11.468 21.607 11.468V4H13.625V11.238L11.536 21H14.017ZM4.875 21L7.268 14.594C7.752 13.25 8.357 12.394 9.09 12.023C9.82 11.653 10.946 11.468 12.464 11.468V4H4.482V11.238L2.393 21H4.875Z"/></svg>
                  </div>
                  <p className="text-[#3b2b2c]/80 font-light text-lg leading-relaxed mb-8 italic flex-grow">
                    "{t.review}"
                  </p>
                  <div className="flex items-center justify-between border-t border-[#d4a3a6]/30 pt-6">
                    <h4 className="font-serif text-xl md:text-2xl text-[#3b2b2c]">{t.name}</h4>
                    <div className="flex gap-1 bg-white/50 px-3 py-1.5 rounded-full">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 text-[#d4a3a6] fill-[#d4a3a6]" />
                      ))}
                    </div>
                  </div>
              </div>
            ))}
        </div>
      </div>
  </section>
);

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({ name: '', phone: '', service: '', date: '', time: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-32 relative overflow-hidden bg-white">
      <div className="absolute right-0 top-0 opacity-[0.03] pointer-events-none mx-auto w-full h-full flex justify-end z-0">
        <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop" alt="Spa bg" className="h-full w-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-5/12">
          <div className="text-[#d4a3a6] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Reservations</div>
          <h2 className="font-serif text-5xl md:text-6xl mb-8 text-[#3b2b2c]">Reserve Your Escape</h2>
          <div className="h-px w-24 bg-[#d4a3a6] mb-8"></div>
          <p className="text-[#3b2b2c]/70 text-lg font-light leading-relaxed mb-10">
            Secure your moment of tranquility. Select your preferred luxury service, and our wellness concierges will perfectly orchestrate your visit.
          </p>

          <div className="space-y-8 glass-panel p-10 rounded-[2.5rem]">
              <div className="flex gap-4 items-start">
                  <div className="bg-white/80 p-4 rounded-full text-[#d4a3a6] shadow-sm">
                      <MapPin className="w-5 h-5" />
                  </div>
                  <div className="pt-1">
                      <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold text-[#3b2b2c] mb-1">Sanctuary Location</h4>
                      <p className="text-[#3b2b2c]/70 font-serif italic text-lg leading-snug">Regenta Orko's, Haridwar Rishikesh Highway</p>
                  </div>
              </div>
              <div className="flex gap-4 items-start border-t border-[#d4a3a6]/20 pt-8">
                  <div className="bg-white/80 p-4 rounded-full text-[#25D366] shadow-sm border border-green-100">
                      <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="pt-1">
                      <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold text-[#3b2b2c] mb-1">WhatsApp Fast Booking</h4>
                      <a href={WhatsAppLink} target="_blank" rel="noreferrer" className="text-[#3b2b2c] font-serif italic text-xl hover:text-[#d4a3a6] transition-colors">+91 {WhatsAppNumber}</a>
                  </div>
              </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12">
          <div className="glass-panel rounded-[3rem] p-8 md:p-14 shadow-2xl neon-glow bg-gradient-to-br from-white/60 to-white/30 border border-white">
            {formSubmitted ? (
                <motion.div 
                  initial={{ opacity:0, scale:0.95 }}
                  animate={{ opacity:1, scale:1 }}
                  className="flex flex-col items-center justify-center text-center py-24"
                >
                  <div className="w-24 h-24 bg-[#fff5f7] text-[#d4a3a6] rounded-full flex items-center justify-center mb-8 shadow-inner border border-[#d4a3a6]/20">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="font-serif text-4xl mt-2 text-[#3b2b2c] mb-4">Request Elegantized</h3>
                  <p className="text-[#3b2b2c]/80 font-light text-lg px-6 leading-relaxed">Thank you. Our wellness concierge will message you shortly via WhatsApp to secure your appointment.</p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b2b2c]/60 mb-2 pl-4">Full Name</label>
                          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-white/70 border border-white focus:border-[#d4a3a6] outline-none rounded-2xl py-4 px-6 text-[#3b2b2c] transition-all shadow-sm focus:shadow-md" placeholder="Your beautiful name" />
                      </div>
                      <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b2b2c]/60 mb-2 pl-4">Phone Number</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full bg-white/70 border border-white focus:border-[#d4a3a6] outline-none rounded-2xl py-4 px-6 text-[#3b2b2c] transition-all shadow-sm focus:shadow-md" placeholder="WhatsApp preferred" />
                      </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b2b2c]/60 mb-2 pl-4">Desire Service</label>
                          <select name="service" value={formData.service} onChange={handleInputChange} required className="w-full bg-white/70 border border-white focus:border-[#d4a3a6] outline-none rounded-2xl py-4 px-6 text-[#3b2b2c] transition-all shadow-sm focus:shadow-md appearance-none">
                              <option value="">-- Select Treatment --</option>
                              {MASSAGES.map(m => <option key={m.id} value={m.title}>{m.title}</option>)}
                          </select>
                      </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b2b2c]/60 mb-2 pl-4">Perfect Date</label>
                          <input type="date" name="date" value={formData.date} onChange={handleInputChange} required className="w-full bg-white/70 border border-white focus:border-[#d4a3a6] outline-none rounded-2xl py-4 px-6 text-[#3b2b2c]/70 transition-all shadow-sm focus:shadow-md" />
                      </div>
                      <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b2b2c]/60 mb-2 pl-4">Perfect Time</label>
                          <input type="time" name="time" value={formData.time} onChange={handleInputChange} required className="w-full bg-white/70 border border-white focus:border-[#d4a3a6] outline-none rounded-2xl py-4 px-6 text-[#3b2b2c]/70 transition-all shadow-sm focus:shadow-md" />
                      </div>
                  </div>

                  <button type="submit" className="w-full mt-6 bg-gradient-to-r from-[#d4a3a6] to-[#e8a2a8] text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[11px] hover:shadow-xl hover:shadow-[#d4a3a6]/40 transition-all hover:-translate-y-1">
                      Confirm Reservation Securely
                  </button>
                </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#fff5f7] border-t border-[#d4a3a6]/20 py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute left-1/2 bottom-20 -translate-x-1/2 w-full max-w-6xl opacity-[0.02] pointer-events-none text-center font-serif text-[12vw] leading-none whitespace-nowrap">
        EEVA SPA
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 relative z-10">
        <div className="md:col-span-12 lg:col-span-5">
          <div className="font-serif text-3xl font-bold tracking-widest text-[#3b2b2c] mb-6">Eeva<span className="text-[#d4a3a6]">.</span></div>
          <p className="text-[#3b2b2c]/70 font-light text-lg leading-relaxed mb-10 max-w-sm">
              A contemporary sanctuary for holistic wellness, bringing you the world's most luxurious massage therapies in an idyllic serene setting.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[#d4a3a6] hover:bg-[#d4a3a6] hover:text-white transition-all shadow-sm"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[#d4a3a6] hover:bg-[#d4a3a6] hover:text-white transition-all shadow-sm"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div className="md:col-span-4 lg:col-span-3">
          <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-[#3b2b2c] mb-8">Contact & Visit</h4>
          <div className="space-y-6 text-sm text-[#3b2b2c]/80 font-light">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#d4a3a6] shrink-0 mt-0.5" />
                <p className="leading-relaxed">Regenta Orko's, Haridwar Rishikesh Highway, Motichur, Haridwar</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#d4a3a6] shrink-0" />
                <p>+91 {WhatsAppNumber}</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#d4a3a6] shrink-0" />
                <p>{EmailAddress}</p>
              </div>
          </div>
        </div>
        
        <div className="md:col-span-4 lg:col-span-2">
          <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-[#3b2b2c] mb-8">Spa Timings</h4>
          <ul className="space-y-4 text-sm text-[#3b2b2c]/80 font-light">
              <li className="flex flex-col gap-1 border-b border-[#d4a3a6]/20 pb-3">
                <span className="font-medium">Monday - Friday</span> 
                <span className="text-[#3b2b2c]/60">9:00 AM - 9:00 PM</span>
              </li>
              <li className="flex flex-col gap-1 border-b border-[#d4a3a6]/20 pb-3">
                <span className="font-medium">Saturday</span> 
                <span className="text-[#3b2b2c]/60">10:00 AM - 10:00 PM</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-medium">Sunday</span> 
                <span className="text-[#3b2b2c]/60">10:00 AM - 8:00 PM</span>
              </li>
          </ul>
        </div>

        <div className="md:col-span-4 lg:col-span-2">
          <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-[#3b2b2c] mb-8">Location Map</h4>
          <div className="w-full aspect-square rounded-[2rem] glass-panel relative overflow-hidden flex items-center justify-center group cursor-pointer border border-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d4a3a6]/20 to-transparent"></div>
              <div className="text-center relative z-10">
                <MapPin className="w-8 h-8 text-[#d4a3a6] mx-auto mb-3 opacity-60 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#3b2b2c]/70 block px-4">View on Google Maps</span>
              </div>
          </div>
        </div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-[#d4a3a6]/20 text-center text-[10px] tracking-[0.2em] uppercase font-bold text-[#3b2b2c]/50 relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <span>&copy; {new Date().getFullYear()} Eeva Wellness SPA. Curated for Luxury.</span>
        <span className="hidden sm:inline">•</span>
        <a href="#" className="hover:text-[#d4a3a6] transition-colors">Privacy Policy</a>
      </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#fff5f7] font-sans text-[#3b2b2c] selection:bg-[#d4a3a6] selection:text-white pb-0">
      <Nav />
      <Hero />
      <About />
      <Services />
      <GallerySection />
      <TestimonialSection />
      <BookingSection />
      <Footer />
    </div>
  );
}
