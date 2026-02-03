const express = require('express');
const Category = require('../models/Category');
const { verifyAdmin } = require('../middleware/auth');

const router = express.Router();

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create category
router.post('/', verifyAdmin, async (req, res) => {
  try {
    const { name, slug } = req.body;
    const category = new Category({ name, slug });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update category
router.put('/:id', verifyAdmin, async (req, res) => {
  try {
    const { name, slug } = req.body;
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name, slug },
      { new: true }
    );
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete category
router.delete('/:id', verifyAdmin, async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;