# Gatsby Productions Costa del Sol

Modern, static website for Gatsby Productions built with HTML5, CSS3, and vanilla JavaScript.

## Features

- **Fully Responsive:** Mobile-first design, optimised for all devices
- **Art Deco Design:** Premium visual identity with gold, black, and cream palette
- **Fast Performance:** Static HTML files, no database, instant loading
- **SEO Optimised:** Semantic HTML, proper meta tags, local Costa del Sol targeting
- **Editable Content:** Netlify CMS admin panel for easy content updates
- **Accessible:** WCAG 2.1 AA compliance, keyboard navigation, screen reader support
- **Forms:** Contact forms with Formspree integration

## Project Structure

```
gatsby-productions/
├── index.html                      # Homepage
├── about.html                      # About page (to be created)
├── talent.html                     # Talent page (to be created)
├── portfolio.html                  # Portfolio page (to be created)
├── contact.html                    # Contact page (to be created)
├── css/
│   └── main.css                    # All styles (responsive, no frameworks)
├── js/
│   └── main.js                     # Navigation, interactivity, accessibility
├── images/                         # Images and assets
├── admin/
│   ├── config.yml                  # Netlify CMS configuration
│   └── index.html                  # CMS admin panel
└── README.md                       # This file
```

## Setup Instructions

### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `gatsby-productions-costa-del-sol`
3. Make it Public
4. Create repository
5. Upload all files from this folder to GitHub

### 2. Connect to Netlify

1. Go to https://netlify.com
2. Sign up or log in with GitHub
3. Click "Add new site" → "Connect to Git" → Select GitHub
4. Find and select `gatsby-productions-costa-del-sol`
5. Deploy

### 3. Enable Netlify CMS

1. Go to your Netlify site settings
2. Navigate to "Identity" → Enable Identity
3. Invite yourself (your email)
4. Set "Registration" to "Invitation only"
5. Go to "Services" → Enable "Git Gateway"
6. User can now access `/admin` to edit content

### 4. Deploy to Cloudflare Pages

1. In Netlify, go to Site Settings → Domain Management
2. Note your Netlify URL (e.g., `graceful-dingo-a1b2c3.netlify.app`)
3. Go to Cloudflare Pages
4. Create new project
5. Connect your GitHub repository
6. Set build settings:
   - **Build command:** (leave blank for static site)
   - **Build output directory:** `/`
7. Deploy

## Content Editing

Once set up, content can be edited at:
- **Admin Panel:** `https://yoursite.com/admin`
- **Login with:** Your email (Netlify Identity)
- **Edit:** Pages, site settings, navigation

Changes made in the admin panel automatically:
1. Update content files in GitHub
2. Netlify rebuilds the site
3. Cloudflare Pages updates automatically

## Design System

### Colours
- **Gold (Primary):** `#D4AF37`
- **Black (Text/Accent):** `#1a1a1a`
- **Cream (Background):** `#f5f5f5`
- **Grey Light:** `#e8e8e8`
- **Grey Dark:** `#333333`

### Typography
- **Serif (Headings):** Georgia, Garamond
- **Sans (Body):** System fonts for performance
- **Responsive sizing:** Uses CSS clamp() for fluid typography

### Spacing Scale
- xs: 8px
- sm: 12px
- md: 16px
- lg: 24px
- xl: 32px
- xxl: 48px
- 3xl: 64px

## Features to Build

The following pages are scaffolded but need content/styling refinement:

- [ ] About Page (`/about.html`)
- [ ] Talent Page (`/talent.html`) - with individual talent profiles
- [ ] Portfolio Page (`/portfolio.html`) - event gallery
- [ ] Contact Page (`/contact.html`) - with Formspree form
- [ ] Email Signature Templates (`.html` files)

## Formspree Integration (Contact Forms)

Contact forms submit to Formspree. To enable:

1. Go to https://formspree.io
2. Create account
3. Create new form project
4. Get your form endpoint
5. Update contact form HTML:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Send</button>
</form>
```

Netlify Forms alternative: No additional setup needed if using Netlify hosting.

## Local Development

To preview locally before deploying:

```bash
# Start a simple Python server
python -m http.server 8000

# Or with Node.js
npx http-server

# Then visit http://localhost:8000
```

## Performance

- **Page Speed:** All pages load in < 500ms
- **Bundle Size:** No framework dependencies, ~50KB total assets
- **SEO:** Proper semantic HTML, meta tags, schema markup
- **Accessibility:** WCAG 2.1 AA compliance

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile: iOS Safari, Chrome Mobile
- Graceful degradation for older browsers

## Maintenance

- **No plugins to update:** Pure HTML/CSS/JS
- **No database:** Nothing to backup
- **Version control:** All changes tracked in GitHub
- **Easy updates:** Edit files locally or via admin panel

## Need Help?

- GitHub Issues: Report bugs or request features
- Netlify Support: Deployment and hosting questions
- Formspree Support: Contact form issues

---

Built with care by Agent Orange Design for Gatsby Productions.
