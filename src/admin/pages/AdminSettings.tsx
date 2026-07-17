import { useState } from 'react';
import { Store, Truck, CreditCard, Save } from 'lucide-react';

export default function AdminSettings() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center"><Store className="w-5 h-5 text-red-600" /></div>
          <div><h2 className="font-bold text-gray-900">Store Settings</h2><p className="text-xs text-gray-400">Manage your store information</p></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Store Name</label><input type="text" defaultValue="Chirkut Gift Shop" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label><input type="email" defaultValue="hello@chirkutgifts.com" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label><input type="text" defaultValue="+880 1712-345678" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Currency</label><select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none"><option>BDT (৳)</option><option>USD ($)</option></select></div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center"><Truck className="w-5 h-5 text-blue-600" /></div>
          <div><h2 className="font-bold text-gray-900">Delivery Settings</h2></div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div><p className="text-sm font-semibold">Free Delivery Threshold</p><p className="text-xs text-gray-400">Orders above this amount get free delivery</p></div>
            <input type="number" defaultValue={2000} className="w-24 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-right outline-none" />
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div><p className="text-sm font-semibold">Standard Delivery Fee</p></div>
            <input type="number" defaultValue={120} className="w-24 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-right outline-none" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center"><CreditCard className="w-5 h-5 text-emerald-600" /></div>
          <div><h2 className="font-bold text-gray-900">Payment Methods</h2></div>
        </div>
        <div className="space-y-3">
          {['Cash on Delivery (COD)', 'bKash', 'Nagad', 'Credit/Debit Card'].map((method) => (
            <label key={method} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer">
              <span className="text-sm font-medium text-gray-700">{method}</span>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 text-red-600" />
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button onClick={handleSave} className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-all ${
          saved ? 'bg-emerald-500 text-white' : 'bg-red-600 text-white hover:bg-red-700 shadow-lg'
        }`}>
          <Save className="w-4 h-4" /> {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}
