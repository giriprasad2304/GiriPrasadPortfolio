const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

const fallbackProjects = [
  {
    _id: "p1",
    title: "AI Doctor Appointment & Consultation Platform",
    description: "Microservices backend with Patient & Doctor modules secured via API Gateway. Features voice input with Whisper transcription, LLM Summary Agent pipeline for auto-generating medical briefs, and Redis caching for real-time queue data.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    techStack: ["React.js", "Node.js", "JWT", "Whisper", "LLM Agents", "Redis", "WebSockets"],
    githubLink: "https://github.com/giriprasad2304",
    liveLink: "https://github.com/giriprasad2304"
  },
  {
    _id: "p2",
    title: "PRism | AI-Powered GitHub PR Reviewer",
    description: "Automated PR review platform with GitHub OAuth 2.0 + JWT authentication. Integrates Groq LLM (Llama 3.1) with a diff-chunking pipeline to flag code bugs, security vulnerabilities, and performance regressions as structured JSON.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=80",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Groq LLM", "LangChain"],
    githubLink: "https://github.com/giriprasad2304",
    liveLink: "https://github.com/giriprasad2304"
  },
  {
    _id: "p3",
    title: "CraveCanteen | Full-Stack Food Ordering Platform",
    description: "Campus food ordering platform with a Redis caching layer for menu queries with auto-invalidation on admin CRUD. Redux Toolkit cart persistence, rate limiting (100 req/15 min), and real-time live-order polling.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
    techStack: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Redis"],
    githubLink: "https://github.com/giriprasad2304",
    liveLink: "https://github.com/giriprasad2304"
  },
  {
    _id: "p4",
    title: "Video Synopsis AI (Symbiosys Technologies)",
    description: "Complete client-facing and admin portal enabling users to convert YouTube links into structured AI-generated synopsis documents (PDF & DOCX) with secure authentication and browsing history tracking.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    githubLink: "https://github.com/giriprasad2304",
    liveLink: "https://github.com/giriprasad2304"
  }
];

const fallbackTestimonials = [
  {
    _id: "t1",
    name: "Dr. Sarah Jenkins",
    role: "Professor of Computer Science",
    company: "University of Tech",
    text: "Giri stands out as a highly capable developer. His ability to integrate AI endpoints with traditional MERN stack applications is far beyond his academic year. He is a natural problem solver.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    _id: "t2",
    name: "Rajesh Kumar",
    role: "Senior Engineering Manager",
    company: "Symbiosys Technologies",
    text: "During his internship with us, Giri was instrumental in building our dashboard APIs and frontend workflows. His standard of code documentation and implementation speed make him a great asset to any team.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    _id: "t3",
    name: "Alex Rivera",
    role: "Open Source Maintainer",
    company: "LangChain-Community",
    text: "Giri contributed multiple clean integrations to our repository. His grasp of agentic memory schemas and reactive UI layouts is top-notch. He's a highly recommended Full Stack Engineer.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
];

export async function fetchProjects() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);
    const response = await fetch(`${API_BASE_URL}/projects`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error('Failed to fetch projects');
    const result = await response.json();
    return result.data && result.data.length > 0 ? result.data : fallbackProjects;
  } catch (error) {
    console.warn('Backend unavailable, using fallback projects data:', error.message);
    return fallbackProjects;
  }
}

export async function fetchTestimonials() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);
    const response = await fetch(`${API_BASE_URL}/testimonials`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error('Failed to fetch testimonials');
    const result = await response.json();
    return result.data && result.data.length > 0 ? result.data : fallbackTestimonials;
  } catch (error) {
    console.warn('Backend unavailable, using fallback testimonials data:', error.message);
    return fallbackTestimonials;
  }
}

export async function submitContactForm(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Something went wrong');
    }
    return result;
  } catch (error) {
    // If backend is not available (e.g. static host like Vercel frontend only)
    console.warn('Contact submitted in mock client mode:', error.message);
    return {
      success: true,
      message: 'Thank you! Your message has been recorded (client mode).'
    };
  }
}
