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

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  address: string;
  orders: number;
  wishlist: number;
  memberSince: string;
}
