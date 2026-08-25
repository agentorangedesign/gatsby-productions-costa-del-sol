# Sanity CMS Setup Guide

## Step 1: Create Sanity Project

1. Go to https://www.sanity.io/get-started
2. Sign up or log in
3. Create a new project:
   - Project name: `Gatsby Productions Costa del Sol`
   - Select template: `Blank`
   - Dataset: `production`

## Step 2: Create Content Schemas

In your Sanity Studio, create these document types:

### Event Schema

```json
{
  "name": "event",
  "title": "Event",
  "type": "document",
  "fields": [
    {
      "name": "title",
      "title": "Event Title",
      "type": "string",
      "validation": (Rule) => Rule.required()
    },
    {
      "name": "eventDate",
      "title": "Event Date & Time",
      "type": "datetime",
      "validation": (Rule) => Rule.required()
    },
    {
      "name": "location",
      "title": "Location",
      "type": "string"
    },
    {
      "name": "description",
      "title": "Event Description",
      "type": "text",
      "rows": 4
    }
  ]
}
```

### Talent Schema

```json
{
  "name": "talent",
  "title": "Talent",
  "type": "document",
  "fields": [
    {
      "name": "name",
      "title": "Name",
      "type": "string",
      "validation": (Rule) => Rule.required()
    },
    {
      "name": "specialization",
      "title": "Specialization",
      "type": "string"
    },
    {
      "name": "bio",
      "title": "Biography",
      "type": "text",
      "rows": 4
    }
  ]
}
```

### Gallery Photo Schema

```json
{
  "name": "galleryPhoto",
  "title": "Gallery Photo",
  "type": "document",
  "fields": [
    {
      "name": "title",
      "title": "Title",
      "type": "string"
    },
    {
      "name": "description",
      "title": "Description",
      "type": "text"
    }
  ]
}
```

## Step 3: Get Your Credentials

1. In Sanity Studio, go to Settings → Project Settings
2. Note your **Project ID**
3. Create an API token:
   - Go to API → Tokens
   - Add a new token with "Read" permissions
   - Copy the token

## Step 4: Configure Gatsby

1. Get your Project ID from Step 3
2. Update environment variables:

```bash
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_TOKEN=your_read_token
```

## Step 5: Start Adding Content

1. Go to your Sanity Studio
2. Click "Create" and add new events, talent, or gallery photos
3. Publish your content
4. The Gatsby site will automatically fetch and display the content

## Deployment

When deploying to Vercel:

1. Add environment variables in Vercel:
   - SANITY_PROJECT_ID
   - SANITY_DATASET  
   - SANITY_TOKEN

2. Every time you publish content in Sanity, Vercel will automatically rebuild the site (set up webhooks in Sanity)

## Support

For Sanity documentation, visit: https://www.sanity.io/docs
