import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../admin/components/AdminLayout';
import AdminDashboard from '../admin/pages/AdminDashboard';
import AdminProducts from '../admin/pages/AdminProducts';
import AdminOrders from '../admin/pages/AdminOrders';
import AdminCustomers from '../admin/pages/AdminCustomers';
import AdminAnalytics from '../admin/pages/AdminAnalytics';
import AdminSettings from '../admin/pages/AdminSettings';
import AdminLogin from '../admin/pages/AdminLogin';

export default function Admin() {
  // For demo: simple check. In real app use auth context.
  const isLoggedIn = true; // Change to false to show login

  if (!isLoggedIn) {
    return <AdminLogin />;
  }

  return (
    <AdminLayout>
      <Routes>
        <Route index element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="customers" element={<AdminCustomers />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="login" element={<AdminLogin />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </AdminLayout>
  );
}
