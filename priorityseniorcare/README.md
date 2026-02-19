# Priority Senior Care LLC - Website

A professional, modern website for Priority Senior Care LLC, providing home care, transportation, and technical training services for seniors in Elgin and surrounding areas.

## 🌟 Features

- **Modern Design**: Built with Next.js 14, React, TypeScript, and Tailwind CSS
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Lead Generation Form**: Integrated contact form with email notifications
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **SEO Optimized**: Meta tags, semantic HTML, and fast loading times
- **Accessible**: WCAG compliant with proper ARIA labels
- **Production Ready**: Deployable to Vercel, Netlify, or any hosting platform

## 📋 Services Highlighted

1. **Home Care Services**
   - Personal care & assistance
   - Medication management
   - Meal preparation
   - Light housekeeping
   - Companionship
   - Alzheimer's & dementia care

2. **Transportation Services**
   - Medical appointment rides
   - Shopping assistance
   - Social event transportation
   - Wheelchair accessible vehicles

3. **Technical Training**
   - Smartphone & tablet basics
   - Video calling tutorials
   - Social media guidance
   - Email & messaging

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Edit `.env` file with your email credentials:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=info@priorityseniorcare.com
```

**Important for Gmail users:**
- Don't use your regular password
- Create an App Password: https://support.google.com/accounts/answer/185833
- Enable 2-Step Verification first
- Use the 16-character App Password in SMTP_PASS

5. Run development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📧 Email Configuration

### Gmail Setup

1. Enable 2-Step Verification on your Google account
2. Go to Google Account > Security > 2-Step Verification > App passwords
3. Generate a new app password for "Mail"
4. Copy the 16-character password
5. Use this in your `.env` file as `SMTP_PASS`

### Other Email Providers

For other SMTP providers (Outlook, SendGrid, etc.), update the `.env` file:

```env
# Example for Outlook
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password

# Example for SendGrid
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Add environment variables in Vercel dashboard:
   - Go to Project Settings > Environment Variables
   - Add all variables from `.env`

5. Connect your custom domain:
   - Project Settings > Domains
   - Add your domain and follow DNS instructions

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

4. Add environment variables in Netlify dashboard:
   - Site Settings > Build & Deploy > Environment
   - Add all variables from `.env`

### Deploy to Traditional Hosting (cPanel, Bluehost, etc.)

1. Build the project:
```bash
npm run build
```

2. The build creates optimized files in `.next` folder

3. Upload to your hosting via FTP:
   - Upload entire project folder
   - Install Node.js on your hosting (via cPanel or hosting control panel)
   - Run `npm install` on the server
   - Run `npm start` to start the production server

4. Set up environment variables on your hosting panel

## 🎨 Customization

### Update Business Information

1. **Contact Information** - Edit in:
   - `components/Navbar.tsx` (phone, email)
   - `components/Footer.tsx` (address, phone, email, social links)
   - `components/ContactSection.tsx` (contact details)

2. **Service Areas** - Edit in:
   - `components/ServiceAreas.tsx` (update the `areas` array)

3. **Testimonials** - Edit in:
   - `components/Testimonials.tsx` (update the `testimonials` array)

4. **Brand Colors** - Edit in:
   - `tailwind.config.js` (modify color palette)

### Add Google Maps

In `components/ServiceAreas.tsx`, replace the placeholder with an actual Google Maps embed:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
```

### Add Real Images

1. Place images in `public/images/` folder
2. Update components to use actual images instead of placeholders
3. Example in `components/Hero.tsx`:
```tsx
<Image
  src="/images/hero-image.jpg"
  alt="Senior care"
  fill
  className="object-cover"
/>
```

## 📱 Testing the Contact Form

1. Start the development server
2. Navigate to the Contact section
3. Fill out the form
4. Check your email (both owner and customer should receive emails)
5. Verify emails are formatted correctly

## 🔧 Troubleshooting

### Contact Form Not Sending Emails

1. Check `.env` file exists and has correct values
2. Verify SMTP credentials are correct
3. For Gmail, ensure App Password is used (not regular password)
4. Check server console for error messages
5. Test SMTP connection separately

### Build Errors

1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Clear npm cache: `npm cache clean --force`
4. Try `npm run build` again

### Styling Issues

1. Ensure Tailwind CSS is properly configured
2. Check `globals.css` is imported in `layout.tsx`
3. Verify PostCSS configuration is correct
4. Clear browser cache

## 📊 Performance Optimization

- Images are optimized with Next.js Image component
- Code splitting with Next.js automatic optimization
- Lazy loading for components
- Minified CSS and JavaScript in production
- Fast page loads with static generation

## 🔐 Security

- Environment variables kept secure
- HTTPS enforced in production
- Form validation on client and server
- Protected API routes
- Sanitized user inputs

## 📄 License

This project is proprietary to Priority Senior Care LLC.

## 💬 Support

For technical issues or questions:
- Email: support@yourdomain.com
- Phone: (123) 456-7890

---

**Built with ❤️ for Priority Senior Care LLC**
