export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
}

export const categories: Category[] = [
  { id: 'flowers', name: 'Flowers', icon: 'Flower2', image: '/images/product-flowers.jpg' },
  { id: 'chocolates', name: 'Chocolates', icon: 'Candy', image: '/images/product-chocolates.jpg' },
  { id: 'toys', name: 'Toys & Plush', icon: 'Heart', image: '/images/product-teddy.jpg' },
  { id: 'mugs', name: 'Mugs & Cups', icon: 'Coffee', image: '/images/product-mug.jpg' },
  { id: 'candles', name: 'Candles', icon: 'Flame', image: '/images/product-candles.jpg' },
  { id: 'jewelry', name: 'Jewelry', icon: 'Gem', image: '/images/product-jewelry.jpg' },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Rose Bouquet',
    description: 'A stunning arrangement of 24 fresh red roses with eucalyptus leaves, wrapped in premium kraft paper. Perfect for expressing love and appreciation.',
    price: 2499,
    originalPrice: 3200,
    image: '/images/product-flowers.jpg',
    category: 'flowers',
    rating: 4.8,
    reviews: 128,
    inStock: true,
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Belgian Chocolate Box',
    description: 'Assorted Belgian chocolates in an elegant gift box. Contains 36 pieces of milk, dark, and white chocolate with various fillings.',
    price: 1899,
    originalPrice: 2500,
    image: '/images/product-chocolates.jpg',
    category: 'chocolates',
    rating: 4.9,
    reviews: 256,
    inStock: true,
    badge: 'Popular',
  },
  {
    id: 3,
    name: 'Giant Teddy Bear',
    description: 'Super soft 3-feet tall teddy bear with a cute red bow. Made with premium plush material, perfect for hugs and comfort.',
    price: 3299,
    originalPrice: 4500,
    image: '/images/product-teddy.jpg',
    category: 'toys',
    rating: 4.7,
    reviews: 89,
    inStock: true,
  },
  {
    id: 4,
    name: 'Personalized Ceramic Mug',
    description: 'High-quality ceramic mug with custom name or message printing. Microwave and dishwasher safe. 350ml capacity.',
    price: 799,
    originalPrice: 1200,
    image: '/images/product-mug.jpg',
    category: 'mugs',
    rating: 4.6,
    reviews: 342,
    inStock: true,
    badge: 'Hot Deal',
  },
  {
    id: 5,
    name: 'Aromatherapy Candle Set',
    description: 'Set of 4 scented soy candles in glass jars. Scents: Lavender, Vanilla, Rose, and Sandalwood. Burn time: 40 hours each.',
    price: 1599,
    originalPrice: 2200,
    image: '/images/product-candles.jpg',
    category: 'candles',
    rating: 4.5,
    reviews: 167,
    inStock: true,
  },
  {
    id: 6,
    name: 'Silver Heart Necklace',
    description: 'Elegant sterling silver heart pendant necklace with cubic zirconia stones. Comes in a beautiful velvet gift box.',
    price: 4599,
    originalPrice: 6000,
    image: '/images/product-jewelry.jpg',
    category: 'jewelry',
    rating: 4.9,
    reviews: 98,
    inStock: true,
    badge: 'Premium',
  },
  {
    id: 7,
    name: 'Wooden Photo Frame',
    description: 'Handcrafted rustic wooden photo frame with engraved message option. Fits 5x7 inch photos. Perfect for memories.',
    price: 999,
    originalPrice: 1500,
    image: '/images/product-frame.jpg',
    category: 'mugs',
    rating: 4.4,
    reviews: 76,
    inStock: true,
  },
  {
    id: 8,
    name: 'Luxury Gift Hamper',
    description: 'Curated gift hamper with wine, chocolates, cookies, and a scented candle. Beautifully arranged in a wicker basket.',
    price: 5499,
    originalPrice: 7500,
    image: '/images/product-hamper.jpg',
    category: 'chocolates',
    rating: 4.8,
    reviews: 45,
    inStock: true,
    badge: 'New',
  },
  {
    id: 9,
    name: 'Classic Leather Watch',
    description: 'Minimalist analog watch with genuine leather strap and stainless steel case. Water-resistant up to 30 meters.',
    price: 3999,
    originalPrice: 5500,
    image: '/images/product-watch.jpg',
    category: 'jewelry',
    rating: 4.6,
    reviews: 112,
    inStock: true,
  },
  {
    id: 10,
    name: 'Mixed Flower Basket',
    description: 'Colorful mixed flower basket with lilies, carnations, and gerberas. Freshly arranged and delivered with care.',
    price: 1899,
    originalPrice: 2600,
    image: '/images/product-flowers.jpg',
    category: 'flowers',
    rating: 4.7,
    reviews: 203,
    inStock: true,
  },
  {
    id: 11,
    name: 'Dark Chocolate Truffles',
    description: 'Handmade dark chocolate truffles with cocoa powder dusting. Rich, creamy, and utterly indulgent. 24 pieces.',
    price: 1299,
    originalPrice: 1800,
    image: '/images/product-chocolates.jpg',
    category: 'chocolates',
    rating: 4.8,
    reviews: 178,
    inStock: true,
  },
  {
    id: 12,
    name: 'Scented Candle Duo',
    description: 'Pair of large jar candles in Jasmine and Ocean Breeze scents. Made with natural soy wax and essential oils.',
    price: 1199,
    originalPrice: 1700,
    image: '/images/product-candles.jpg',
    category: 'candles',
    rating: 4.5,
    reviews: 134,
    inStock: true,
  },
];

export const userProfile = {
  id: 1,
  name: 'Rahim Ahmed',
  email: 'rahim.ahmed@email.com',
  phone: '+880 1712-345678',
  avatar: 'RA',
  address: 'House 42, Road 7, Dhanmondi, Dhaka 1209',
  orders: 12,
  wishlist: 8,
  memberSince: '2023-06-15',
};
