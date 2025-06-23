import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong.');
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <div className="contact-info">
        <p><strong>Email:</strong> tanupd04@gmail.com</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tanu-priya-102216254/" target="_blank" rel="noreferrer">linkedin.com</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/TanuPriya04" target="_blank" rel="noreferrer">github.com</a></p>
        <p><strong>Location:</strong> Kolkata, West Bengal, India</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
        <textarea name="message" rows="6" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Send Message</button>
        <p className="status-message">{status}</p>
      </form>
    </div>
  );
}

export default Contact;
