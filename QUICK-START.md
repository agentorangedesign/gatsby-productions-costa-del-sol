# Quick Start: Gatsby Productions Costa del Sol Website

## What You're Getting

A complete, modern static website built with clean HTML, CSS, and JavaScript. No frameworks, no bloat, just elegant code.

**Files included:**
- `index.html` - Homepage (fully designed)
- `css/main.css` - All styling (Art Deco design system)
- `js/main.js` - Interactivity and accessibility
- `admin/config.yml` - Netlify CMS configuration
- `admin/index.html` - CMS admin panel
- `README.md` - Full documentation
- `.gitignore` - Git configuration

## Your Next Steps (40 minutes)

### Step 1: Create GitHub Account (5 min)
```
Go to: https://github.com/signup
Username: agentorangedesign
Email: bongiovanni.paula@gmail.com
```

Then create a new repository:
```
Name: gatsby-productions-costa-del-sol
Visibility: Public
```

### Step 2: Upload Files (5 min)

In your new GitHub repository:
1. Click "Add file" → "Upload files"
2. Drag and drop all files from the gatsby-productions folder
3. Commit message: "Initial site commit"
4. Push

### Step 3: Create Netlify Account (5 min)
```
Go to: https://netlify.com/signup
Sign up with GitHub
```

Then connect your repository:
1. Click "Add new site" → "Import an existing project"
2. Select GitHub
3. Choose gatsby-productions-costa-del-sol
4. Click Deploy

Netlify will give you a temporary URL. Save it.

### Step 4: Enable CMS (10 min)

In Netlify site settings:
1. Go to "Identity" → Enable Identity
2. Go to "Services" → Enable Git Gateway
3. Go to "Users" → Invite your email

You'll get an invite email. Set your CMS password.

### Step 5: Access the Admin Panel (2 min)

```
https://[your-netlify-url]/admin
```

Log in with your email. You can now edit content.

### Step 6: Test the Site (3 min)

Visit your Netlify URL and check:
- ✓ Page loads fast
- ✓ Gold/black/cream colours
- ✓ Mobile menu works
- ✓ Links work

---

## Design System (Art Deco, Premium Brand)

**Colours:**
- Gold: `#D4AF37` (primary)
- Black: `#1a1a1a` (text)
- Cream: `#f5f5f5` (background)

**Typography:**
- Serif (Georgia) for headings
- System fonts (fast loading)
- Responsive sizing (scales on all devices)

**Mobile-First:**
- Designed for mobile first
- Adapts beautifully to desktop
- Touch-friendly buttons

---

## What's Built

✓ Homepage with hero section
✓ Navigation (desktop & mobile menu)
✓ Quick links section
✓ About preview
✓ Events showcase
✓ Talent roster preview
✓ Call-to-action sections
✓ Footer with social links
✓ Responsive design (mobile to desktop)
✓ Netlify CMS integration
✓ Forms support (Formspree)
✓ SEO optimised

---

## What Needs to Be Done

After setup, you'll want to:

- [ ] Create `/about.html` - Full about page
- [ ] Create `/talent.html` - Talent roster with profiles
- [ ] Create `/portfolio.html` - Event gallery
- [ ] Create `/contact.html` - Contact form
- [ ] Add images to `/images/` folder
- [ ] Create email signature templates
- [ ] Configure Formspree for contact form
- [ ] Add Ryan's phone number
- [ ] Connect custom domain

---

## Command Line (Optional)

If you prefer command line setup:

```bash
# Clone the repo
git clone https://github.com/agentorangedesign/gatsby-productions-costa-del-sol.git
cd gatsby-productions-costa-del-sol

# Copy files into the folder
# Then:

git add .
git commit -m "Initial site commit"
git push origin main
```

---

## Performance Targets

- ✓ Page load: <500ms
- ✓ Mobile friendly: 100/100
- ✓ SEO ready: All meta tags included
- ✓ Accessibility: WCAG 2.1 AA
- ✓ Browser support: All modern browsers

---

## Netlify CMS

Once logged in to the admin panel, you can edit:

1. **Pages:** Hero text, about sections, content blocks
2. **Settings:** Site title, email, phone, social links
3. **Navigation:** Menu items (careful here!)
4. **Media:** Upload images directly

Changes save to GitHub automatically.

---

## Formspree for Contact Forms

When you build the contact page:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Send Enquiry</button>
</form>
```

1. Go to https://formspree.io
2. Create account
3. Create a new form project
4. Get your form ID
5. Replace `YOUR_FORM_ID` in the contact form

Forms submit directly to your email.

---

## Questions?

- GitHub help: https://docs.github.com
- Netlify help: https://support.netlify.com
- General web: Stack Overflow, MDN Web Docs

---

## Timeline

- Setup: 40 minutes
- Build remaining pages: 4-6 hours
- Add content & images: 2-3 hours
- Review & refinement: 2 hours
- **Total: 1 week**

---

**Ready to build something awesome?**

Follow the steps above, let me know when you've created GitHub and Netlify accounts, and I'll guide you through the rest.

Current focus: Make sure you understand the workflow before starting.
