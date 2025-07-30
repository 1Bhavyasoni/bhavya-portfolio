// Developer Portfolio - React + Tailwind

import React from "react";
import Hero from './Hero';
import Contact from './Contact';
import Navbar from './Navbar';
import { motion } from "framer-motion";

const skills = [
  "C++", "C", "SQL", "Java", "Assembly C",
  "Python", "Bash",
  "React", "Redux", "React Router", "Material UI", "Tailwind",
  "Node.js", "Express.js", "MongoDB", "Flask", "PyTorch", "TensorFlow",
  "Cadence (VLSI)", "LT Spice", "ModelSim", "HFSS (Antenna Designing)", "Linux (OS)", "Embedded C"
];

const projects = [
  {
    title: "SMART FIR Portal",
    tech: "MERN, JWT, Gemini API, Speech-to-Text",
    description: "Secure FIR system with multilingual input and IPC prediction."
  },
  {
    title: "Real-Time Posture Analysis",
    tech: "Flask, MediaPipe, OpenCV",
    description: "Pose tracking and injury risk analysis system using webcam."
  },
  {
    title: "Lung Cancer Detection",
    tech: "Python, Scikit-learn, SVM",
    description: "AI-based CT scan classification for early diagnosis."
  }
];

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-8 pt-24">
        {/* About Section */}
        <section className="mt-10 text-center" id="about">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            I'm Bhavya Soni, a passionate full stack developer and electronics enthusiast with strong foundations in
            embedded systems and AI. With hands-on experience across both frontend and backend technologies as well as
            core tools like Cadence and HFSS, I bridge the gap between software and hardware engineering to deliver
            scalable and innovative solutions.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-16" id="skills">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-[#1e293b] border border-gray-700 p-4 text-center font-medium rounded-xl shadow-sm">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mt-16" id="projects">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-[#1e293b] rounded-2xl p-6 border border-gray-700 shadow-md"
              >
                <h3 className="text-2xl font-bold mb-2">{proj.title}</h3>
                <p className="text-gray-400 mb-2">{proj.tech}</p>
                <p>{proj.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <Contact />

        {/* Footer */}
        <section className="mt-16 text-center" id="footer">
          <p>
            Made with 💻 by Bhavya Soni •{" "}
            <a
              href="https://www.linkedin.com/in/bhavya-soni-9684b3229/"
              className="text-blue-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
