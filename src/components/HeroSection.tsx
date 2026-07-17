import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap, Percent, Truck, Gift, Clock } from 'lucide-react';

const banners = [
  { id: 1, title: 'Flash Sale', subtitle: 'Up to 50% off on selected gifts. Limited time only!', cta: 'Shop Now', bg: 'from-red-700 via-red-600 to-rose-500', icon: Zap, badge: 'HOT' },
  { id: 2, title: 'New Arrivals', subtitle: 'Check out our latest collection of premium gifts.', cta: 'Explore', bg: 'from-amber-600 via-amber-500 to-orange-400', icon: Gift, badge: 'NEW' },
  { id: 3, title: 'Free Delivery', subtitle: 'Free shipping on all orders above ৳2,000. No code needed!', cta: 'Order Now', bg: 'from-emerald-700 via-emerald-600 to-teal-500', icon: Truck, badge: 'FREE' },
  { id: 4, title: 'Weekend Special', subtitle: 'Extra 20% off on flowers & chocolates this weekend.', cta: 'Grab Deal', bg: 'from-purple-700 via-purple-600 to-violet-500', icon: Percent, badge: '-20%' },
  { id: 5, title: 'Midnight Delivery', subtitle: 'Surprise your loved ones at midnight. Same day delivery!', cta: 'Book Now', bg: 'from-slate-800 via-slate-700 to-gray-600', icon: Clock, badge: '24/7' },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % banners.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const banner = banners[current];
  const Icon = banner.icon;

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="relative rounded-2xl overflow-hidden h-[200px] sm:h-[240px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={banner.id}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-0 bg-gradient-to-r ${banner.bg}`}
            >
              <div className="relative h-full flex items-center p-6 sm:p-10">
                <div className="flex-1">
                  <span className="px-2.5 py-0.5 bg-white/20 text-white text-[11px] font-bold rounded-full">{banner.badge}</span>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2 mt-2">{banner.title}</h1>
                  <p className="text-white/80 text-sm mb-4 max-w-sm">{banner.subtitle}</p>
                  <button className="px-5 py-2.5 bg-white text-gray-900 font-bold rounded-xl text-sm hover:bg-gray-100 transition-colors">{banner.cta}</button>
                </div>
                <div className="hidden sm:flex w-24 h-24 bg-white/10 rounded-full items-center justify-center">
                  <Icon className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30"><ChevronLeft className="w-5 h-5" /></button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30"><ChevronRight className="w-5 h-5" /></button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {banners.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-4' : 'bg-white/40'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
