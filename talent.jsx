import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/talent.css';

export default function Talent({ data }) {
  const talents = data?.allSanityTalent?.nodes || [];

  return (
    <Layout>
      <section className="section">
        <h2>Our Talent</h2>
        {talents.length === 0 ? (
          <div className="no-content">
            <p>Meet our exceptional team of entertainers and creatives.</p>
          </div>
        ) : (
          <div className="talent-grid">
            {talents.map((talent) => (
              <div key={talent._id} className="talent-card">
                <h3>{talent.name}</h3>
                {talent.specialization && (
                  <div className="talent-specialization">{talent.specialization}</div>
                )}
                {talent.bio && (
                  <div className="talent-bio">{talent.bio}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    allSanityTalent {
      nodes {
        _id
        name
        specialization
        bio
      }
    }
  }
`;
