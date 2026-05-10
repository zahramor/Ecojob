const express = require('express');
const router = express.Router();
const Content = require('../models/Content');

// GET: Ambil semua konten edukasi
router.get('/', async (req, res) => {
  try {
    const contents = await Content.find();
    res.json(contents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST: Tambah konten baru (untuk setup awal/admin)
router.post('/', async (req, res) => {
  const content = new Content(req.body);
  try {
    const newContent = await content.save();
    res.status(201).json(newContent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;