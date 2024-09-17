import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kaleb Tesfaye",
          from_email: form.email,
          to_email: "kalebtesfaye2031@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-12 px-4 max-w-5xl mx-auto bg-gradient-to-r">
      <div className="text-center mb-8">
        <h1 className="text-4xl poppins-black font-extrabold text-gray-800 mb-4">Get in Touch</h1>
        <p className="text-lg poppins-light text-gray-600">
          We're here to assist you with any queries or concerns. Fill out the form below and we will get back to you soon.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-300">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="flex flex-col">
            <span className="text-lg font-semibold text-blue-600 mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-4 border border-blue-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-semibold text-blue-600 mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-4 border border-blue-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-semibold text-blue-600 mb-2">Your Message</span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here"
              className="p-4 border border-blue-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
