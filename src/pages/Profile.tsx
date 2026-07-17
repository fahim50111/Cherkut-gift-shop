import { useProfile } from '../hooks/useProducts';
import Spinner from '../components/Spinner';
import { User, Mail, Phone, MapPin, Package, Heart } from 'lucide-react';

export default function Profile() {
  const { profile, loading } = useProfile();

  if (loading) return <div className="flex justify-center py-24"><Spinner className="w-10 h-10" /></div>;
  if (!profile) return <div className="text-center py-24 text-gray-500">Profile not found</div>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">{profile.avatar}</div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">{profile.name}</h1>
            <p className="text-sm text-gray-500">Member since {profile.memberSince}</p>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3 text-gray-600"><Mail className="w-4 h-4" /> {profile.email}</div>
          <div className="flex items-center gap-3 text-gray-600"><Phone className="w-4 h-4" /> {profile.phone}</div>
          <div className="flex items-center gap-3 text-gray-600"><MapPin className="w-4 h-4" /> {profile.address}</div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <Package className="w-5 h-5 text-red-600 mx-auto mb-1" />
            <p className="text-xl font-bold">{profile.orders}</p>
            <p className="text-xs text-gray-500">Orders</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <Heart className="w-5 h-5 text-red-600 mx-auto mb-1" />
            <p className="text-xl font-bold">{profile.wishlist}</p>
            <p className="text-xs text-gray-500">Wishlist</p>
          </div>
        </div>
      </div>
    </div>
  );
}
