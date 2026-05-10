// server/seed.js
require('dotenv').config({ path: __dirname + '/.env' }); 
const mongoose = require('mongoose');
const Content = require('./models/Content');
const News = require('./models/News');

console.log("URI yang terbaca:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI);

const dataKonten = [
  { key: 'hero_title', value: 'Transformasikan Karier Anda Menuju Masa Depan Hijau', group: 'hero' },
  { key: 'hero_subtitle', value: 'Pelajari peran penting Green Jobs dalam menjaga ekosistem dunia.', group: 'hero' },
  { key: 'fact_experience', value: '10+', group: 'stats' },
  { key: 'fact_projects', value: '120+', group: 'stats' }
];

const dataBerita = [
  { 
    title: 'Peluang Kerja di Sektor Panel Surya 2026', 
    description: 'Permintaan teknisi energi surya meningkat tajam di Asia Tenggara.',
    tag: 'Energi'
  },
  { 
    title: 'Pentingnya Green Skills di Era Digital', 
    description: 'Bagaimana teknologi AI membantu keberlanjutan lingkungan.',
    tag: 'Teknologi'
  }
];

const runSeed = async () => {
  await Content.deleteMany({}); // Bersihkan data lama
  await News.deleteMany({});
  await Content.insertMany(dataKonten);
  await News.insertMany(dataBerita);
  console.log("✅ Data berhasil dimasukkan!");
  process.exit();
};

runSeed();