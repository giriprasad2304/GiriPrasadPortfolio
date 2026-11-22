import express from 'express';
import Project from '../models/Project.js';
import Testimonial from '../models/Testimonial.js';
import Contact from '../models/Contact.js';
import { getMockMode, initialProjects, initialTestimonials } from '../config/db.js';

const router = express.Router();

// Temporary in-memory stores for Mock Mode
const mockContacts = [];
const mockProjects = [...initialProjects];
const mockTestimonials = [...initialTestimonials];

// GET: Fetch all projects
router.get('/projects', async (req, res) => {
  try {
    if (getMockMode()) {
      return res.json({ success: true, data: mockProjects });
    }
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error retrieving projects', error: error.message });
  }
});

// GET: Fetch all testimonials
router.get('/testimonials', async (req, res) => {
  try {
    if (getMockMode()) {
      return res.json({ success: true, data: mockTestimonials });
    }
    const testimonials = await Testimonial.find().sort({ createdAt: 1 });
    res.json({ success: true, data: testimonials });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error retrieving testimonials', error: error.message });
  }
});

// POST: Submit a contact form
router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    if (getMockMode()) {
      const newContact = { name, email, subject, message, createdAt: new Date() };
      mockContacts.push(newContact);
      console.log('📬 [Mock Mode] New Contact Submission Received:', newContact);
      return res.json({ success: true, message: 'Message received and saved in memory!', data: newContact });
    }

    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    console.log('📬 [DB Mode] New Contact Saved:', newContact);
    res.json({ success: true, message: 'Message sent successfully!', data: newContact });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error saving message', error: error.message });
  }
});

export default router;
