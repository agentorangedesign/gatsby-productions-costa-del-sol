# Gatsby Productions Costa del Sol

A luxury events website built with Gatsby, React, and Sanity CMS.

## Features

- **Responsive Design**: Art Deco aesthetic with gold, black, and cream colour scheme
- **Sanity CMS Integration**: Manage events, talent, and gallery content
- **Static Site Generation**: Fast, secure, and SEO-friendly
- **Event Management**: Automatically pulls events from Sanity CMS
- **Contact Form**: Professional contact form with validation
- **Mobile Optimised**: Fully responsive design

## Getting Started

### Prerequisites

- Node.js 14+
- npm or yarn
- Sanity account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/agentorangedesign/gatsby-productions-costa-del-sol.git
cd gatsby-productions-costa-del-sol
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_TOKEN=your_read_token
```

4. Run the development server:
```bash
npm run develop
```

The site will be available at `http://localhost:8000`

## Building for Production

```bash
npm run build
npm run serve
```

## Sanity CMS Setup

1. Create schemas for:
   - Event (title, eventDate, location, description)
   - Talent (name, specialization, bio)
   - GalleryPhoto (title, description, image)

2. Update your Sanity project ID in the gatsby-config.js

3. Publish your events and content in Sanity Studio

## Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel:
   - SANITY_PROJECT_ID
   - SANITY_DATASET
   - SANITY_TOKEN

3. Deploy on every push to main

## Structure

```
src/
├── pages/           # Page components (auto-routed)
├── components/      # Reusable components
├── styles/          # CSS files
└── images/          # Static images

gatsby-config.js    # Gatsby configuration
package.json        # Dependencies
```

## Design System

- **Primary Colour**: Gold (#D4AF37)
- **Background**: Black (#1a1a1a)
- **Text**: Cream (#f5f5f5)
- **Font**: Georgia (serif)

## Content Management

All events, talent, and gallery content is managed in Sanity Studio. Updates automatically rebuild and deploy the site.

## Support

For support, email info@gatsbyproductions.es
