import { useState } from 'react';
import { Search, Filter, Eye, Truck, CheckCircle, XCircle, Clock } from 'lucide-react';

const orders = [
  { id: '#ORD-001', customer: 'Rahim Ahmed', items: 3, total: 5497, status: 'Delivered', date: '2024-01-15', payment: 'COD' },
  { id: '#ORD-002', customer: 'Sadia Islam', items: 1, total: 1899, status: 'Processing', date: '2024-01-15', payment: 'Bkash' },
  { id: '#ORD-003', customer: 'Karim Khan', items: 2, total: 4898, status: 'Shipped', date: '2024-01-14', payment: 'Nagad' },
  { id: '#ORD-004', customer: 'Fatima Begum', items: 1, total: 799, status: 'Pending', date: '2024-01-14', payment: 'COD' },
  { id: '#ORD-005', customer: 'Hasan Ali', items: 4, total: 7896, status: 'Delivered', date: '2024-01-13', payment: 'Card' },
];

const statusConfig: Record<string, { icon: any; color: string; bg: string }> = {
  Delivered: { icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
  Processing: { icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
  Shipped: { icon: Truck, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
  Pending: { icon: Clock, color: 'text-red-600', bg: 'bg-red-50 border-red-200' },
  Cancelled: { icon: XCircle, color: 'text-gray-600', bg: 'bg-gray-100 border-gray-200' },
};

export default function AdminOrders() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = orders.filter((o) => {
    const matchesSearch = o.customer.toLowerCase().includes(search.toLowerCase()) || o.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || o.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search orders..."
            className="pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-red-300 outline-none w-64" />
        </div>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-red-300 outline-none">
          <option value="all">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-400 border-b border-gray-50 bg-gray-50/50">
              <th className="px-5 py-3 font-medium">Order ID</th>
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-5 py-3 font-medium">Total</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((order) => {
              const cfg = statusConfig[order.status] || statusConfig.Pending;
              const StatusIcon = cfg.icon;
              return (
                <tr key={order.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                  <td className="px-5 py-3.5 text-sm font-bold">{order.id}</td>
                  <td className="px-5 py-3.5 text-sm">{order.customer}</td>
                  <td className="px-5 py-3.5 text-sm font-bold">৳{order.total.toLocaleString()}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-full border ${cfg.bg}`}>
                      <StatusIcon className={`w-3 h-3 ${cfg.color}`} /> {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-gray-500">{order.date}</td>
                  <td className="px-5 py-3.5"><button className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50"><Eye className="w-4 h-4" /></button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
