import { motion } from 'framer-motion';
import type { Category } from '../types';

interface Props {
  categories: Category[];
  onSelectCategory: (id: string | null) => void;
  selectedCategory: string | null;
}

export default function CategorySection({ categories, onSelectCategory, selectedCategory }: Props) {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Shop by Category</h2>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          <button
            onClick={() => onSelectCategory(null)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              !selectedCategory ? 'bg-red-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-red-300'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat.id ? 'bg-red-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-red-300'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
