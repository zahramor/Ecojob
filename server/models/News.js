const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tag: String,
  description: { type: String, required: true },
  linkExternal: String,
  imageUrl: { type: String, default: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09' }, // Gambar default kalau kosong
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.models.News || mongoose.model('News', NewsSchema);