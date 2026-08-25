import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/gallery.css';

export default function Gallery({ data }) {
  const photos = data?.allSanityGalleryPhoto?.nodes || [];

  return (
    <Layout>
      <section className="section">
        <h2>Event Gallery</h2>
        {photos.length === 0 ? (
          <div className="no-content">
            <p>Explore our collection of luxury event photography.</p>
          </div>
        ) : (
          <div className="gallery-grid">
            {photos.map((photo) => (
              <div key={photo._id} className="gallery-item">
                {photo.title && <h3>{photo.title}</h3>}
                {photo.description && (
                  <p className="photo-description">{photo.description}</p>
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
    allSanityGalleryPhoto {
      nodes {
        _id
        title
        description
      }
    }
  }
`;
