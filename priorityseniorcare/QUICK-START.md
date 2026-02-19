# Quick Start Guide - Priority Senior Care Website

Get your website up and running in 30 minutes!

## 📦 What You Have

A complete, professional website with:
- ✅ Modern design with animations
- ✅ Mobile responsive
- ✅ Contact form with email notifications
- ✅ SEO optimized
- ✅ Ready to deploy

## 🚀 5-Step Launch Process

### Step 1: Install Dependencies (5 minutes)

```bash
# Navigate to the project folder
cd priority-senior-care

# Install all packages
npm install
```

Wait for installation to complete (this may take 2-3 minutes).

### Step 2: Configure Email (5 minutes)

1. **Copy the environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` file with your email settings:**

   **For Gmail Users (Recommended):**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx
   CONTACT_EMAIL=info@priorityseniorcare.com
   ```

   **To get Gmail App Password:**
   - Go to Google Account → Security
   - Enable 2-Step Verification
   - Go to App Passwords
   - Generate password for "Mail"
   - Copy 16-character password
   - Paste into `SMTP_PASS` (remove spaces)

3. **Save the file**

### Step 3: Test Locally (5 minutes)

```bash
# Start development server
npm run dev
```

Open your browser to: **http://localhost:3000**

**Test Checklist:**
- [ ] Website loads
- [ ] All sections visible
- [ ] Navigation works
- [ ] Click through services
- [ ] Fill out contact form
- [ ] Check email received

### Step 4: Customize Content (10 minutes)

**Update Contact Information:**

1. Open `components/Navbar.tsx`
   - Replace phone: `(123) 456-7890`
   - Replace email: `info@priorityseniorcare.com`

2. Open `components/Footer.tsx`
   - Update address, phone, email
   - Add social media links

3. Open `components/ContactSection.tsx`
   - Update contact details

**Optional Customizations:**
- Edit service descriptions in `components/Services.tsx`
- Update service areas in `components/ServiceAreas.tsx`
- Modify testimonials in `components/Testimonials.tsx`

### Step 5: Deploy to Vercel (15 minutes)

**Option A: Using Vercel Website (No Terminal)**

1. Go to https://vercel.com and sign up
2. Click "Add New Project"
3. Select "Upload Files"
4. Zip your project folder and upload
5. Add environment variables:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_EMAIL`
6. Click "Deploy"
7. Your site is live! 🎉

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts, then add environment variables
vercel env add SMTP_HOST
vercel env add SMTP_PORT
vercel env add SMTP_USER
vercel env add SMTP_PASS
vercel env add CONTACT_EMAIL

# Redeploy with env vars
vercel --prod
```

## 🌐 Connect Your Domain (Optional - 10 minutes)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain: `priorityseniorcare.com`
4. Copy DNS records provided
5. Update at your domain registrar:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
6. Wait for DNS propagation (1-24 hours)

## ✅ Launch Checklist

Before going live, verify:

- [ ] Contact form works (test submission)
- [ ] Email notifications received
- [ ] Phone numbers are correct
- [ ] Email addresses are correct
- [ ] Service areas are accurate
- [ ] Social media links work (if added)
- [ ] Website loads on mobile
- [ ] All pages scroll smoothly
- [ ] HTTPS enabled (green padlock)

## 📱 Test the Website

**Desktop:** Open in Chrome, Firefox, Safari
**Mobile:** Test on iPhone and Android
**Forms:** Submit test inquiries
**Speed:** Use PageSpeed Insights (https://pagespeed.web.dev)

## 🎨 Customization Tips

### Change Colors

Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    600: '#YOUR-COLOR-HERE',
    // ...
  }
}
```

### Add Logo

1. Place logo in `public/` folder
2. Update `components/Navbar.tsx`
3. Replace the "PSC" box with:
```tsx
<Image src="/logo.png" alt="Logo" width={50} height={50} />
```

### Add Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `app/layout.tsx`:
```tsx
<Script src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🔧 Common Issues & Fixes

### Issue: "Module not found"
**Fix:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Email not sending
**Fix:**
1. Check `.env` file exists
2. Verify SMTP credentials
3. Use Gmail App Password (not regular password)
4. Check spam folder

### Issue: Port 3000 in use
**Fix:**
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Issue: Build fails
**Fix:**
```bash
npm run build
# Check error messages
# Usually missing dependencies or syntax errors
```

## 📞 Need Help?

**Common Questions:**

**Q: How do I update the website after deployment?**
A: Make changes locally, test with `npm run dev`, then run `vercel` again to redeploy.

**Q: Can I use a different email provider?**
A: Yes! Update the SMTP settings in `.env` for your provider.

**Q: How much does hosting cost?**
A: Vercel is FREE for personal/small business sites with unlimited bandwidth.

**Q: Can I add more pages?**
A: Yes! Create new files in the `app` folder (e.g., `app/blog/page.tsx`).

**Q: How do I backup my website?**
A: Your files are the backup! Keep the project folder safe. Also consider using Git.

## 🎯 Next Steps

Once live, consider:

1. **Set up Google My Business**
2. **Submit to search engines**
3. **Add Google Analytics**
4. **Create social media accounts**
5. **Start collecting reviews**

## 🎉 Congratulations!

Your professional senior care website is now live and ready to generate leads!

**Your Timeline:**
- Day 1: Deploy website
- Day 2-3: DNS propagation
- Day 4-7: Submit to search engines
- Week 2+: Start appearing in Google

---

**Total Setup Time: ~45 minutes**
**Cost: $0 (Vercel free tier)**
**Maintenance: Update content as needed**

---

**Questions? Issues? Check:**
- README.md - Full documentation
- DEPLOYMENT.md - Detailed deployment guide
- .env.example - Configuration template
