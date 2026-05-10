const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 1. MIDDLEWARE (Wajib di atas)
app.use(cors());
app.use(express.json());

// 2. KONEKSI DATABASE
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/green_jobs_db')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// 3. IMPORT MODELS
const News = require('./models/News');
const Job = require('./models/Job');

// 4. DEFINISI ROUTES (Penyebab 404 kalau alamatnya beda)

// --- Route Berita ---
app.get('/api/news', async (req, res) => {
  const data = await News.find().sort({ date: -1 });
  res.json(data);
});

app.post('/api/news', async (req, res) => {
  const newNews = new News(req.body);
  await newNews.save();
  res.json(newNews);
});

app.delete('/api/news/:id', async (req, res) => {
  await News.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// --- Route Lowongan ---
app.get('/api/jobs', async (req, res) => {
  const data = await Job.find().sort({ createdAt: -1 });
  res.json(data);
});

app.post('/api/jobs', async (req, res) => {
  const newJob = new Job(req.body);
  await newJob.save();
  res.json(newJob);
});

app.delete('/api/jobs/:id', async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// 5. JALANKAN SERVER
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));