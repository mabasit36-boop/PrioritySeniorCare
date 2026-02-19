# Deployment Guide - Priority Senior Care Website

This guide provides step-by-step instructions for deploying your website to various hosting platforms and connecting your custom domain.

## Table of Contents
1. [Vercel Deployment (Easiest)](#vercel-deployment)
2. [Netlify Deployment](#netlify-deployment)
3. [Traditional Hosting (cPanel)](#traditional-hosting)
4. [Custom Domain Setup](#custom-domain-setup)
5. [SSL Certificate Setup](#ssl-certificate)

---

## Vercel Deployment (Recommended)

Vercel is the company behind Next.js and provides the best hosting experience for Next.js applications.

### Step 1: Prepare Your Project

1. Make sure all files are saved
2. Test locally: `npm run dev`
3. Build test: `npm run build`

### Step 2: Deploy via Vercel Dashboard (No CLI Required)

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub, GitLab, or Email

2. **Import Project**
   - Click "Add New Project"
   - Choose "Import Git Repository" OR "Upload Files"
   - If uploading files: Zip your project folder and upload

3. **Configure Project**
   - Project Name: `priority-senior-care`
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Add Environment Variables**
   - Click "Environment Variables"
   - Add each variable from your `.env` file:
     ```
     SMTP_HOST = smtp.gmail.com
     SMTP_PORT = 587
     SMTP_USER = your-email@gmail.com
     SMTP_PASS = your-app-password
     CONTACT_EMAIL = info@priorityseniorcare.com
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - Your site will be live at: `https://your-project.vercel.app`

### Step 3: Connect Custom Domain

1. In Vercel Dashboard, go to your project
2. Click "Settings" > "Domains"
3. Add your domain: `priorityseniorcare.com`
4. Vercel will provide DNS records
5. Update DNS at your domain registrar (see [Custom Domain Setup](#custom-domain-setup))
6. SSL certificate is automatically provisioned

**Cost: Free for personal/small business use**

---

## Netlify Deployment

### Step 1: Prepare Your Project

1. Ensure your project builds successfully: `npm run build`

### Step 2: Deploy via Netlify Dashboard

1. **Create Netlify Account**
   - Go to https://netlify.com
   - Sign up with GitHub, GitLab, or Email

2. **Deploy Site**
   - Drag and drop your entire project folder onto Netlify
   - OR use "Import from Git" if you have a Git repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 or higher

4. **Add Environment Variables**
   - Go to Site Settings > Build & Deploy > Environment
   - Add variables from `.env` file

5. **Deploy**
   - Click "Deploy Site"
   - Your site will be live at: `https://your-site.netlify.app`

### Step 3: Connect Custom Domain

1. Go to Site Settings > Domain Management
2. Click "Add custom domain"
3. Enter: `priorityseniorcare.com`
4. Follow DNS configuration instructions
5. SSL certificate is automatically provisioned

**Cost: Free for personal/small business use**

---

## Traditional Hosting (cPanel, Bluehost, HostGator, etc.)

This is more complex but works if you already have shared hosting.

### Prerequisites
- Hosting with Node.js support (v18+)
- SSH access or terminal access via cPanel
- Minimum 512MB RAM

### Step 1: Build the Project Locally

```bash
npm run build
```

### Step 2: Upload Files

**Option A: Using cPanel File Manager**
1. Zip your entire project folder
2. Upload zip via cPanel File Manager
3. Extract in your domain's root directory (usually `public_html`)

**Option B: Using FTP**
1. Use FileZilla or similar FTP client
2. Upload entire project folder
3. Upload to `public_html` or `www`

### Step 3: Install Dependencies on Server

1. Access Terminal via cPanel or SSH
2. Navigate to your project directory:
```bash
cd public_html/priority-senior-care
```

3. Install dependencies:
```bash
npm install --production
```

### Step 4: Set Up Environment Variables

1. Create `.env` file on the server:
```bash
nano .env
```

2. Paste your environment variables:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=info@priorityseniorcare.com
```

3. Save and exit (Ctrl+X, Y, Enter)

### Step 5: Configure Node.js Application

**In cPanel:**
1. Go to "Setup Node.js App"
2. Create application:
   - Node.js version: 18 or higher
   - Application mode: Production
   - Application root: `/home/username/public_html/priority-senior-care`
   - Application URL: `priorityseniorcare.com`
   - Application startup file: `node_modules/next/dist/bin/next`
   - Arguments: `start`

3. Click "Create"

### Step 6: Start the Application

```bash
npm start
```

### Step 7: Set Up Process Manager (PM2)

To keep the app running:

```bash
npm install -g pm2
pm2 start npm --name "priority-senior-care" -- start
pm2 save
pm2 startup
```

**Cost: Depends on your hosting plan ($5-20/month typically)**

---

## Custom Domain Setup

### Step 1: Purchase Domain (if needed)

Popular registrars:
- Namecheap (recommended)
- GoDaddy
- Google Domains
- Domain.com

### Step 2: Configure DNS Records

#### For Vercel:

Add these DNS records at your domain registrar:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

#### For Netlify:

**A Record:**
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 3600
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: your-site.netlify.app
TTL: 3600
```

#### For Traditional Hosting:

**A Record:**
```
Type: A
Name: @
Value: Your server IP address
TTL: 3600
```

**CNAME Record (optional):**
```
Type: CNAME
Name: www
Value: priorityseniorcare.com
TTL: 3600
```

### Step 3: Wait for Propagation

- DNS changes can take 24-48 hours
- Usually happens within 1-2 hours
- Check status: https://dnschecker.org

---

## SSL Certificate

### Vercel / Netlify
- SSL is automatic and free
- No configuration needed
- Automatically renews

### Traditional Hosting
1. Use cPanel's "SSL/TLS Status" tool
2. Click "AutoSSL" or "Let's Encrypt"
3. Enable for your domain
4. Certificate auto-renews every 90 days

---

## Testing Your Deployment

### Checklist:

- [ ] Homepage loads correctly
- [ ] All sections visible
- [ ] Navigation works
- [ ] Contact form submits
- [ ] Email notifications received
- [ ] Mobile responsive
- [ ] HTTPS enabled (green padlock)
- [ ] All images load
- [ ] No console errors

### Test Contact Form:

1. Fill out contact form
2. Submit
3. Check for success message
4. Verify email received at CONTACT_EMAIL
5. Verify customer confirmation email

---

## Troubleshooting

### "Module not found" errors
```bash
npm install
npm run build
```

### Environment variables not working
- Restart the application
- Check `.env` file exists on server
- Verify no spaces around `=` in `.env`
- Redeploy on Vercel/Netlify

### Emails not sending
- Verify SMTP credentials
- Check Gmail App Password (not regular password)
- Test SMTP settings with online tester
- Check server error logs

### Domain not working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Clear browser cache
- Try incognito mode

### Site is slow
- Enable CDN (Vercel/Netlify do this automatically)
- Optimize images
- Enable caching

---

## Recommended Setup for Priority Senior Care

**Best Option: Vercel**
- Cost: Free
- Easiest deployment
- Best performance
- Automatic SSL
- Global CDN
- Easy domain setup

**Steps:**
1. Deploy to Vercel (15 minutes)
2. Configure environment variables (5 minutes)
3. Add custom domain (10 minutes)
4. Wait for DNS propagation (1-24 hours)
5. Test everything (15 minutes)

**Total Setup Time: ~1 hour + DNS wait**

---

## Support

If you encounter issues during deployment:

1. Check the troubleshooting section above
2. Review error messages in:
   - Vercel/Netlify deployment logs
   - Browser console (F12)
   - Server error logs

3. Common solutions:
   - Rebuild: `npm run build`
   - Clear cache: `npm cache clean --force`
   - Reinstall: Delete `node_modules`, run `npm install`

---

**Need help? Contact technical support or refer to platform documentation:**
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- Next.js: https://nextjs.org/docs
