# Gatsby Productions Costa del Sol - Complete Setup & Deployment Guide

## PHASE 1: Accounts Setup (15 minutes)

### Step 1: GitHub

1. Go to https://github.com/signup
2. Username: `agentorangedesign`
3. Email: `bongiovanni.paula@gmail.com`
4. Verify email

**After creating account:**

1. Go to https://github.com/new
2. Repository name: `gatsby-productions-costa-del-sol`
3. Description: "Gatsby Productions Costa del Sol static website"
4. Choose **Public**
5. ✓ Click "Create repository"

**Keep this page open. You'll upload files here next.**

---

### Step 2: Netlify

1. Go to https://netlify.com/signup
2. Click "Sign up with GitHub"
3. Authorise access
4. You're now on Netlify dashboard

**Next steps (do this after uploading files to GitHub):**

1. Click "Add new site"
2. Choose "Import an existing project"
3. Select "GitHub"
4. Find and select `gatsby-productions-costa-del-sol`
5. Deploy settings:
   - **Build command:** (leave blank)
   - **Publish directory:** `/`
   - ✓ Click "Deploy site"

Netlify will give you a temporary URL like `graceful-dingo-a1b2c3.netlify.app`. Note this.

---

## PHASE 2: Upload Files to GitHub (10 minutes)

### Download the site files

All files are in `/tmp/gatsby-productions/` folder ready to upload.

### Upload to GitHub

**Option A: Via GitHub Web Interface (Easiest)**

1. Go to your GitHub repository you just created
2. Click "Add file" → "Upload files"
3. Drag and drop the entire gatsby-productions folder contents
4. Commit: "Initial site commit"
5. ✓ Upload

**Option B: Via Git Command Line (If you're comfortable)**

```bash
git clone https://github.com/agentorangedesign/gatsby-productions-costa-del-sol.git
cd gatsby-productions-costa-del-sol
# Copy all files from /tmp/gatsby-productions/ into this folder
git add .
git commit -m "Initial site commit"
git push origin main
```

---

## PHASE 3: Connect Netlify to GitHub (5 minutes)

1. Go back to Netlify
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Find `gatsby-productions-costa-del-sol`
5. Build settings:
   - **Build command:** (leave blank for static site)
   - **Publish directory:** `/`
6. ✓ Deploy

Netlify will:
- Clone your repo
- Build the site (copy files)
- Deploy to Netlify's temporary URL

**Note the Netlify URL** (e.g., `graceful-dingo-a1b2c3.netlify.app`)

---

## PHASE 4: Enable Netlify CMS (10 minutes)

### Enable Identity

1. In Netlify, go to your site
2. Click "Site settings"
3. Go to "Identity"
4. Click "Enable Identity"

### Enable Git Gateway

1. Still in "Identity" settings
2. Scroll to "Services"
3. Click "Enable Git Gateway"
4. Choose "GitHub" as provider
5. Save

### Invite Users

1. Go to "Users" (in Identity section)
2. Click "Invite users"
3. Enter your email: `bongiovanni.paula@gmail.com`
4. Send

**You'll receive an email with a link to set your password for the CMS.**

### Access the CMS

Once invited, go to:
```
https://graceful-dingo-a1b2c3.netlify.app/admin
```

(Replace with your actual Netlify URL)

Log in with your email and the password you set.

---

## PHASE 5: Connect Custom Domain (Optional)

### If Ryan has gastroproductions.co domain:

1. In Netlify site settings
2. Go to "Domain management"
3. Click "Add custom domain"
4. Enter: `gastroproductions.co`
5. Follow DNS setup instructions
6. Netlify provides CNAME records to add to your domain provider

**Your DNS provider (Xneelo):**
1. Log in to Xneelo control panel
2. Find DNS settings for `gastroproductions.co`
3. Add Netlify's CNAME records
4. Wait 24 hours for DNS to propagate

---

## PHASE 6: Deploy to Cloudflare Pages (Optional but Recommended)

Cloudflare Pages will mirror the Netlify site and provide better global CDN performance.

### In Netlify:

1. Site settings → "Build & deploy"
2. Note your site URL

### In Cloudflare Pages:

1. Go to https://pages.cloudflare.com
2. Create account
3. Connect GitHub
4. Select `gatsby-productions-costa-del-sol`
5. Build settings:
   - **Build command:** (leave blank)
   - **Build output:** `/`
6. Deploy

Cloudflare will deploy from GitHub automatically whenever you push changes.

---

## PHASE 7: Test Everything

### Homepage
```
Visit: https://[your-netlify-url].netlify.app
```

Check:
- ✓ Page loads
- ✓ Header navigation works
- ✓ Mobile menu works on phone
- ✓ Colours are gold/black/cream
- ✓ All links work

### Admin Panel
```
Visit: https://[your-netlify-url].netlify.app/admin
```

Check:
- ✓ Login with your email works
- ✓ You can see content editor
- ✓ You can edit pages
- ✓ Changes save

### Performance
```
Visit: https://pagespeed.web.dev/
```

Enter your site URL:
- ✓ Aim for >90 score
- ✓ Mobile speed >80

---

## WHAT'S NEXT?

### Build remaining pages:

- [ ] `/about.html` - About page with team info
- [ ] `/talent.html` - Talent roster with profiles
- [ ] `/portfolio.html` - Recent events gallery
- [ ] `/contact.html` - Contact form page
- [ ] Email signature templates

### Content to add:

- [ ] Ryan's portrait photo
- [ ] Event photos for portfolio
- [ ] Talent photos/profiles
- [ ] Full copy for each page
- [ ] Spanish mobile number

### Optional enhancements:

- [ ] Google Business Profile setup
- [ ] Blog section
- [ ] Video integration
- [ ] Analytics tracking
- [ ] Email newsletter signup

---

## TROUBLESHOOTING

### "Files not uploading to GitHub"
- Make sure you're in the right repository
- Try uploading a test file first
- Check you have write permissions

### "Netlify says 'no build output'"
- This is normal for static sites
- Leave build command blank
- Set publish directory to `/`

### "CMS login not working"
- Check you accepted the Netlify Identity invite email
- Make sure Git Gateway is enabled
- Try logging out and back in

### "Site looks weird on mobile"
- Clear your browser cache (Ctrl+Shift+Delete)
- Check you're on a fresh Netlify deployment
- Test in Chrome DevTools mobile view

### "Custom domain not working"
- DNS can take 24-48 hours
- Verify CNAME records in your domain provider
- Check the exact records Netlify provides

---

## QUICK REFERENCE

| Service | URL | Purpose |
|---------|-----|---------|
| GitHub | github.com/agentorangedesign/gatsby-productions-costa-del-sol | Code repository |
| Netlify | netlify.com | CMS + deployment |
| Admin Panel | [site]/admin | Edit content |
| Cloudflare Pages | pages.cloudflare.com | Global CDN (optional) |

---

## SUPPORT

- **Netlify Issues:** help.netlify.com
- **GitHub Issues:** github.com/support
- **Cloudflare Pages:** developers.cloudflare.com/pages

---

**Timeline:** 40 minutes total setup
**Cost:** €0 (everything free tier)
**Maintenance:** Minimal (static site, no database)

Ready to build? Let me know when your GitHub account is created and I'll confirm the next step.
