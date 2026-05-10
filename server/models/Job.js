// server/models/Job.js
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  companyName: String,
  position: String,
  deadline: String,
  description: String,
  linkExternal: String, // Link ke LinkedIn/Web PT
  location: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);