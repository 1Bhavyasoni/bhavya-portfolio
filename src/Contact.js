import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_7n18izd", // ✅ Your service ID
        "template_odv86on", // ✅ Your template ID
        form.current,
        "Dvl_Pp3_OBvhJEceZ" // ✅ Your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error);
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="mt-20 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto bg-[#1e293b] p-8 rounded-xl shadow-lg"
      >
        <div className="mb-4">
          <label className="block mb-1 text-white font-medium">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-white font-medium">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-white font-medium">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSending}
          className={`w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-200 ${
            isSending ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}