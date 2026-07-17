import { useState } from 'react';
import { Navigate } from 'react-router-dom';

// Simple demo admin redirect / placeholder
export default function Admin() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Panel</h1>
      <p className="text-gray-500 mb-6">This is a demo. Full admin panel files are available in the source.</p>
      <a href="/" className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl">Back to Shop</a>
    </div>
  );
}
