import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import cors from 'cors';
import { products, categories, userProfile } from '../server/data.js';

const app = express();

app.use(cors());
app.use(express.json());

// Get all products
app.get('/api/products', (_req, res) => {
  res.json({ success: true, data: products });
});

// Get single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    res.status(404).json({ success: false, message: 'Product not found' });
    return;
  }
  res.json({ success: true, data: product });
});

// Get products by category
app.get('/api/categories/:categoryId/products', (req, res) => {
  const filtered = products.filter((p) => p.category === req.params.categoryId);
  res.json({ success: true, data: filtered });
});

// Get all categories
app.get('/api/categories', (_req, res) => {
  res.json({ success: true, data: categories });
});

// Get user profile
app.get('/api/profile', (_req, res) => {
  res.json({ success: true, data: userProfile });
});

// Search products
app.get('/api/search', (req, res) => {
  const query = (req.query.q as string)?.toLowerCase() || '';
  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
  );
  res.json({ success: true, data: filtered });
});

export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req, res);
}
