import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Rahim Ahmed', text: 'Amazing quality gifts and super fast delivery. Highly recommended!', rating: 5 },
  { name: 'Sadia Islam', text: 'The personalized mug was perfect. My friend loved it!', rating: 5 },
  { name: 'Karim Khan', text: 'Great packaging and the flowers were so fresh. Will order again.', rating: 4 },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 text-center mb-8">What Our Customers Say</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <Quote className="w-8 h-8 text-red-200 mb-3" />
              <p className="text-sm text-gray-600 mb-4">{t.text}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900 text-sm">{t.name}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
