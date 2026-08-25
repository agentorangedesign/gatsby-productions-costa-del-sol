import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Events from '../components/Events';

export default function EventsPage({ data }) {
  const events = data?.allSanityEvent?.nodes || [];

  return (
    <Layout>
      <Events events={events} />
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
