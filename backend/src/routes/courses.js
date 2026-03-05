const express = require('express');
const prisma = require('../lib/prisma');

const router = express.Router();

// GET /api/courses - List all courses
router.get('/', async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/courses/:id - Get a single course
router.get('/:id', async (req, res) => {
  try {
    const course = await prisma.course.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/courses - Create a course
router.post('/', async (req, res) => {
  try {
    const { title, description, provider, url } = req.body;
    if (!title || !description || !provider) {
      return res.status(400).json({ error: 'title, description, and provider are required' });
    }
    const course = await prisma.course.create({
      data: { title, description, provider, url },
    });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
