import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted! (Integrate EmailJS later)");
  };

  return (
    <section id="Contact" className="py-20 px-6 bg-cyber-dark">
      <h2 className="text-4xl text-cyber-blue font-bold text-center mb-12">Contact</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="p-3 rounded bg-gray-800 text-gray-100"/>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-3 rounded bg-gray-800 text-gray-100"/>
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="p-3 rounded bg-gray-800 text-gray-100"/>
        <button type="submit" className="bg-cyber-blue text-cyber-dark px-6 py-3 rounded-lg font-bold hover:bg-cyber-neon transition">Send</button>
      </form>
    </section>
  );
};

export default Contact;
