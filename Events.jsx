import React from 'react';
import '../styles/events.css';

export default function Events({ events }) {
  if (!events || events.length === 0) {
    return (
      <section className="section">
        <h2>Upcoming Events</h2>
        <div className="no-events">
          No events scheduled at this time. Check back soon for announcements!
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="events">
      <h2>Upcoming Events</h2>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event._id} className="event-card">
            <h3>{event.title}</h3>
            <div className="event-date">
              {new Date(event.eventDate).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            {event.location && (
              <div className="event-location">{event.location}</div>
            )}
            {event.description && (
              <div className="event-description">{event.description}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
