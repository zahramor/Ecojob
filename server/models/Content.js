// server/models/Content.js
const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true }, // Contoh: 'hero_title', 'about_description', 'fact_1_stat'
  value: { type: String, required: true }, // Teks isi
  type: { type: String, enum: ['text', 'image', 'number'], default: 'text' }, // Jenis konten
  group: { type: String } // Contoh: 'hero', 'about', 'gallery', 'facts'
});

module.exports = mongoose.model('Content', ContentSchema);