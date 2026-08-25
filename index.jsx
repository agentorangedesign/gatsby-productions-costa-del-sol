import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Events from '../components/Events';
import '../styles/home.css';

export default function Home({ data }) {
  const events = data?.allSanityEvent?.nodes || [];

  return (
    <Layout>
      <section className="hero" id="home">
        <div>
          <h1>GATSBY PRODUCTIONS</h1>
          <p>Luxury Events & Entertainment on the Costa del Sol</p>
        </div>
      </section>

      <Events events={events} />

      <section className="section" id="about">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Gatsby Productions brings elegance, sophistication, and unforgettable moments to the stunning Costa del Sol. We specialise in luxury event planning, exclusive entertainment, and bespoke productions that capture the essence of Mediterranean glamour.</p>
            <p>With decades of experience in the hospitality and entertainment industries, our team understands what it takes to create truly exceptional events. From intimate soirées to grand galas, we handle every detail with precision and passion.</p>
          </div>
          <div className="about-text">
            <p>Our commitment to excellence is reflected in every event we produce. We work with the finest venues, vendors, and talent to ensure your event surpasses expectations.</p>
            <p>Whether you're celebrating a milestone, hosting corporate entertainment, or planning an exclusive private event, Gatsby Productions delivers the sophistication and professionalism you deserve.</p>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <p>Ready to create something spectacular? Let us bring your vision to life.</p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p><a href="mailto:info@gatsbyproductions.es">info@gatsbyproductions.es</a></p>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>Costa del Sol, Spain</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    allSanityEvent(sort: { eventDate: ASC }) {
      nodes {
        _id
        title
        eventDate
        location
        description
      }
    }
  }
`;
