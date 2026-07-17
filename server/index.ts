import express from 'express';
import cors from 'cors';
import { products, categories, userProfile } from './data.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Simulate network delay for realistic loading
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Get all products
app.get('/api/products', async (_req, res) => {
  await delay(600);
  res.json({ success: true, data: products });
});

// Get single product
app.get('/api/products/:id', async (req, res) => {
  await delay(400);
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    res.status(404).json({ success: false, message: 'Product not found' });
    return;
  }
  res.json({ success: true, data: product });
});

// Get products by category
app.get('/api/categories/:categoryId/products', async (req, res) => {
  await delay(500);
  const filtered = products.filter((p) => p.category === req.params.categoryId);
  res.json({ success: true, data: filtered });
});

// Get all categories
app.get('/api/categories', async (_req, res) => {
  await delay(300);
  res.json({ success: true, data: categories });
});

// Get user profile
app.get('/api/profile', async (_req, res) => {
  await delay(400);
  res.json({ success: true, data: userProfile });
});

// Search products
app.get('/api/search', async (req, res) => {
  await delay(500);
  const query = (req.query.q as string)?.toLowerCase() || '';
  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
  );
  res.json({ success: true, data: filtered });
});

app.listen(PORT, () => {
  console.log(`Chirkut Gift Shop API running on port ${PORT}`);
});
