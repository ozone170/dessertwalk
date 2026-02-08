const express = require('express');
const Item = require('../models/Item');
const { verifyAdmin } = require('../middleware/auth');

const router = express.Router();

// Get all items with optional filters
router.get('/', async (req, res) => {
  try {
    console.log('Fetching items with query:', req.query);
    const { category, featured } = req.query;
    let filter = {};
    
    if (category) {
      filter.categoryId = category;
    }
    
    if (featured === 'true') {
      filter.isFeatured = true;
    }

    console.log('Items filter:', filter);
    const items = await Item.find(filter).populate('categoryId', 'name slug');
    console.log('Items found:', items.length);
    res.json(items);
  } catch (error) {
    console.error('Items route error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create item
router.post('/', verifyAdmin, async (req, res) => {
  try {
    const { name, description, categoryId, imageUrl, isFeatured } = req.body;
    const item = new Item({ name, description, categoryId, imageUrl, isFeatured });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update item
router.put('/:id', verifyAdmin, async (req, res) => {
  try {
    const { name, description, categoryId, imageUrl, isFeatured } = req.body;
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { name, description, categoryId, imageUrl, isFeatured },
      { new: true }
    );
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete item
router.delete('/:id', verifyAdmin, async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;