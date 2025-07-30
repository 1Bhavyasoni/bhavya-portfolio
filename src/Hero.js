import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12"
      style={{
        background: "radial-gradient(ellipse at center, #1e3a8a 0%, #0f172a 100%)",
        color: "white",
      }}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I'm Bhavya Soni
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        Full Stack Developer | Embedded Systems | AI Enthusiast
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/BhavyaSoni-Resume.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          Download Resume
        </a>

        <a
          href="https://www.linkedin.com/in/bhavya-soni-9684b3229/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}