const express = require('express');
const Enquiry = require('../models/Enquiry');
const { verifyAdmin } = require('../middleware/auth');

const router = express.Router();

// Create enquiry (public)
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, message, itemId } = req.body;
    const enquiry = new Enquiry({ name, phone, email, message, itemId });
    await enquiry.save();
    res.status(201).json({ message: 'Enquiry submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all enquiries (admin only)
router.get('/', verifyAdmin, async (req, res) => {
  try {
    const enquiries = await Enquiry.find()
      .populate('itemId', 'name')
      .sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update enquiry status
router.put('/:id/status', verifyAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(enquiry);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete enquiry
router.delete('/:id', verifyAdmin, async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    res.json({ message: 'Enquiry deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;