import { motion } from 'framer-motion';

const monthlyData = [
  { month: 'Jan', sales: 45000 }, { month: 'Feb', sales: 52000 }, { month: 'Mar', sales: 48000 },
  { month: 'Apr', sales: 61000 }, { month: 'May', sales: 55000 }, { month: 'Jun', sales: 72000 },
];

const maxSales = Math.max(...monthlyData.map(d => d.sales));

export default function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h2 className="font-bold text-gray-900 mb-6">Monthly Sales</h2>
        <div className="flex items-end gap-3 h-48">
          {monthlyData.map((d, i) => (
            <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(d.sales / maxSales) * 100}%` }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="w-full bg-gradient-to-t from-red-600 to-red-400 rounded-t-lg min-h-[4px]"
              />
              <span className="text-[10px] text-gray-400 font-medium">{d.month}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Avg. Order Value</p>
          <p className="text-2xl font-bold text-gray-900">৳3,245</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Conversion Rate</p>
          <p className="text-2xl font-bold text-gray-900">4.8%</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Return Rate</p>
          <p className="text-2xl font-bold text-gray-900">1.2%</p>
        </div>
      </div>
    </div>
  );
}
