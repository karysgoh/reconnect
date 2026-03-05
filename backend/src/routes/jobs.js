const express = require('express');
const prisma = require('../lib/prisma');

const router = express.Router();

// GET /api/jobs - List all job listings
router.get('/', async (req, res) => {
  try {
    const jobs = await prisma.job.findMany({
      include: { employer: true },
      orderBy: { createdAt: 'desc' },
    });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/jobs/:id - Get a single job
router.get('/:id', async (req, res) => {
  try {
    const job = await prisma.job.findUnique({
      where: { id: parseInt(req.params.id) },
      include: { employer: true },
    });
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/jobs - Create a job listing
router.post('/', async (req, res) => {
  try {
    const { title, description, location, employerId } = req.body;
    if (!title || !description || !location || !employerId) {
      return res.status(400).json({ error: 'title, description, location, and employerId are required' });
    }
    const job = await prisma.job.create({
      data: { title, description, location, employerId: parseInt(employerId) },
    });
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
