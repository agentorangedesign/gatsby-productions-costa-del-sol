import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Layout>
      <section className="section">
        <h2>Get In Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-form-container">
            <p className="contact-intro">Ready to create something spectacular? Contact us today.</p>

            {submitted && (
              <div className="success-message">
                Thank you for your message! We'll be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          <div className="contact-details">
            <div className="detail-item">
              <h3>Email</h3>
              <p><a href="mailto:info@gatsbyproductions.es">info@gatsbyproductions.es</a></p>
            </div>
            <div className="detail-item">
              <h3>Location</h3>
              <p>Costa del Sol<br />Spain</p>
            </div>
            <div className="detail-item">
              <h3>Hours</h3>
              <p>Monday - Sunday<br />Available by appointment</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
