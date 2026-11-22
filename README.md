# Giri Prasad - Full Stack MERN & AI Developer Portfolio

A modern, premium, fully responsive Full Stack developer portfolio website designed for final-year Computer Science students and aspiring AI Engineers. Built with startup-inspired aesthetics (similar to Stripe, Linear, Vercel).

## 🌌 Tech Stack

- **Frontend (`/client`)**: React.js (JavaScript/JSX), Tailwind CSS v4, Framer Motion, Lucide Icons, Canvas Confetti.
- **Backend (`/server`)**: Node.js, Express, MongoDB (Mongoose).
- **Tooling**: Vite, Nodemon, Concurrently.

## 🌟 Key Features

1. **Dark Space Aesthetics**: Deep background colors, glassmorphic layout elements, animated gradient border borders, and canvas-based floating particles.
2. **Currently Building Grid**: Highlights real-time project focus categories and active milestones.
3. **Featured Engineering Portfolio**: Dynamically loads 4 core projects from the backend API.
4. **Interactive GitHub Heatmap**: Mock contribution grid and language telemetry that responds to cursor hovers.
5. **Recommendations Carousel**: Recruiter and teacher testimonials rendered in a transition-carousel.
6. **Glassmorphic Contact Form**: Performs client validations, posts entries to the Express database endpoint, and launches confetti on successful submit.
7. **Graceful Database Fallback (Mock Mode)**: If MongoDB is not running locally, the server automatically switches to an in-memory database fallback to ensure the portfolio works without setup.

## 🚀 Running the Project Locally

### Prerequisites
- Node.js (v18+)
- MongoDB (optional, the server fallback works if not installed)

### 1. Installation
Run the root script to install all dependencies for both the frontend client and backend server:
```bash
npm install
npm run install-all
```

### 2. Environment Setup (Optional)
Create a `.env` file inside the `server/` directory:
```env
PORT=5001
MONGO_URI=mongodb://127.0.0.1:27017/giri_portfolio
```

### 3. Launch Development Server
Launch both the Vite React dev server (port 5173) and the Nodemon Express backend server (port 5001) concurrently with a single command from the root folder:
```bash
npm run dev
```

Open `http://localhost:5173` in your browser to view the application.
# GiriPrasadPortfolio
