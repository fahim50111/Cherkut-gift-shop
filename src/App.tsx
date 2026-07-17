import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToastProvider from './components/ToastProvider';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';
import ProductDetail from './pages/ProductDetail';
import Admin from './pages/Admin';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-1 pb-16 sm:pb-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </main>
            <Footer />
            <ToastProvider />
            <ScrollToTop />
          </div>
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
