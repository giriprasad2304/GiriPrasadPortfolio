import mongoose from 'mongoose';
import Project from '../models/Project.js';
import Testimonial from '../models/Testimonial.js';

let isMockMode = false;

const initialProjects = [
  {
    title: "AI Resume Analyzer",
    description: "An AI-powered application that parses resumes, analyzes content quality, and predicts ATS scores using OpenAI API and advanced parsing techniques.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=80",
    techStack: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "Tailwind CSS"],
    githubLink: "https://github.com/giriprasad/ai-resume-analyzer",
    liveLink: "https://ai-resume-analyzer.demo.dev"
  },
  {
    title: "MERN E-Commerce Platform",
    description: "A secure and fully featured shopping platform with complete JWT authentication, Stripe payment gateway integration, and an interactive admin sales dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80",
    techStack: ["React", "Express", "MongoDB", "Stripe API", "JWT", "Tailwind CSS"],
    githubLink: "https://github.com/giriprasad/mern-ecommerce",
    liveLink: "https://mern-ecommerce.demo.dev"
  },
  {
    title: "AI Chat Application",
    description: "A real-time messaging application integrated with OpenAI's API. Implements context-aware conversational memory and typing simulation for natural agent interaction.",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&auto=format&fit=crop&q=80",
    techStack: ["Next.js", "Node.js", "OpenAI API", "LangChain", "WebSockets", "MongoDB"],
    githubLink: "https://github.com/giriprasad/ai-chat-app",
    liveLink: "https://ai-chat.demo.dev"
  },
  {
    title: "Task Management System",
    description: "A dynamic platform facilitating team collaboration and task organization, featuring custom analytic dashboards, JWT authentication, and drag-and-drop workflow kanban boards.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=80",
    techStack: ["React", "Express.js", "Mongoose", "JWT Auth", "Tailwind CSS", "Recharts"],
    githubLink: "https://github.com/giriprasad/task-manager",
    liveLink: "https://taskmanager.demo.dev"
  }
];

const initialTestimonials = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Professor of Computer Science",
    company: "University of Tech",
    text: "Giri stands out as a highly capable developer. His ability to integrate AI endpoints with traditional MERN stack applications is far beyond his academic year. He is a natural problem solver.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Rajesh Kumar",
    role: "Senior Engineering Manager",
    company: "ScaleSync AI Solutions",
    text: "During his internship with us, Giri was instrumental in building our dashboard APIs. His standard of code documentation, UI implementation speed, and curiosity make him a perfect fit for modern fast-paced startups.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Alex Rivera",
    role: "Open Source Maintainer",
    company: "LangChain-Community",
    text: "Giri contributed multiple clean integrations to our repository. His grasp of agentic memory schemas and reactive UI layouts is top-notch. He's a highly recommended Full Stack Engineer.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
];

export async function connectDB() {
  const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/giri_portfolio';
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 3000 // Quick timeout to fail fast if MongoDB isn't running
    });
    console.log('✅ Connected to MongoDB.');

    // Seed database if empty
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      await Project.insertMany(initialProjects);
      console.log('🌱 Seeded default projects into database.');
    }

    const testimonialCount = await Testimonial.countDocuments();
    if (testimonialCount === 0) {
      await Testimonial.insertMany(initialTestimonials);
      console.log('🌱 Seeded default testimonials into database.');
    }
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    console.log('⚠️ Running in Mock/In-Memory database mode because local MongoDB daemon is not running.');
    isMockMode = true;
  }
}

export function getMockMode() {
  return isMockMode;
}

export { initialProjects, initialTestimonials };
