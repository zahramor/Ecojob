// server/routes/jobRoutes.js
router.post('/', async (req, res) => {
  const newJob = new Job({
    companyName: req.body.companyName,
    position: req.body.position,
    location: req.body.location,
    linkExternal: req.body.linkExternal, // URL LinkedIn
    description: req.body.description,
    deadline: req.body.deadline
  });
  await newJob.save();
  res.json({ message: "Lowongan berhasil diposting!" });
});