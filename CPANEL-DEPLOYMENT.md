# InCLA Website - cPanel Deployment Guide for incla.edu.ng

## 🚀 WhoGoHost cPanel Deployment Setup

Your InCLA website is configured for deployment to **incla.edu.ng** via cPanel at WhoGoHost using Git Pull.

## 📋 Pre-Deployment Configuration

### ✅ Files Created for cPanel Hosting
- [x] `.cpanel.yml` - Automated deployment configuration
- [x] `.env.production` - Production environment variables
- [x] `.htaccess` - Apache configuration for static hosting
- [x] `next.config.mjs` - Optimized for static export

## 🔧 Deployment Steps

### Step 1: Repository Setup
1. **Push all files to your Git repository** (GitHub, GitLab, etc.)
2. **Ensure these files are included:**
   - `.cpanel.yml`
   - `.htaccess`
   - `.env.production`
   - All source files

### Step 2: cPanel Git Configuration
1. **Login to your WhoGoHost cPanel**
2. **Navigate to "Git Version Control"**
3. **Create Repository:**
   - Repository URL: `your-git-repository-url`
   - Repository Path: `/public_html`
   - Branch: `main` or `master`

### Step 3: Manual Deployment (Alternative)
If automated deployment doesn't work, follow these steps:

```bash
# 1. Build the application locally
npm install
npm run build

# 2. The build will create static files in the 'out' directory
# 3. Upload the contents of 'out' folder to public_html via File Manager
```

### Step 4: File Manager Upload
1. **Access cPanel File Manager**
2. **Navigate to public_html directory**
3. **Upload these files:**
   - All files from the `out` directory (after build)
   - `.htaccess` file
   - `robots.txt` (if needed)

## 🌐 Domain Configuration

### DNS Settings (Already configured for incla.edu.ng)
- **A Record**: Points to WhoGoHost server IP
- **CNAME**: www.incla.edu.ng → incla.edu.ng

### SSL Certificate
- **WhoGoHost provides free SSL** via Let's Encrypt
- **Enable in cPanel**: SSL/TLS → Let's Encrypt

## 📁 File Structure for cPanel

```
public_html/
├── index.html          # Main page
├── about/
│   └── index.html      # About page
├── contact/
│   └── index.html      # Contact page
├── _next/              # Next.js assets
│   ├── static/
│   └── ...
├── images/             # Image assets
├── .htaccess          # Apache configuration
└── robots.txt         # SEO configuration
```

## 🔧 Environment Variables

The `.env.production` file contains:
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://incla.edu.ng
NEXT_PUBLIC_API_URL=https://incla.edu.ng/api
```

## 🚀 Performance Features

### Caching (via .htaccess)
- **Static assets**: 1 year cache
- **Images**: 1 year cache
- **HTML**: No cache for dynamic updates

### Security Headers
- **X-Frame-Options**: DENY
- **X-Content-Type-Options**: nosniff
- **Referrer-Policy**: origin-when-cross-origin
- **X-XSS-Protection**: 1; mode=block

### Compression
- **Gzip compression** enabled for all text files
- **Reduces bandwidth** by 60-80%

## 🔍 Testing Deployment

### Local Testing
```bash
# Test the build locally
npm run build
npm run start

# Check if site works at http://localhost:3000
```

### Live Testing
1. **Visit https://incla.edu.ng**
2. **Check all pages load correctly**
3. **Verify images display properly**
4. **Test contact forms (if any)**
5. **Check mobile responsiveness**

## 🛠️ Troubleshooting

### Common Issues

#### 1. 404 Errors on Page Refresh
**Solution**: Ensure `.htaccess` file is uploaded and contains URL rewriting rules

#### 2. Images Not Loading
**Solution**: Check image paths in the code and ensure images are in the correct directory

#### 3. CSS/JS Not Loading
**Solution**: Verify `_next` folder is uploaded completely

#### 4. SSL Certificate Issues
**Solution**: Enable SSL in cPanel and update all URLs to HTTPS

### Build Issues
```bash
# Clear cache and rebuild
rm -rf .next out node_modules
npm install
npm run build
```

## 📞 Support Contacts

### WhoGoHost Support
- **Website**: https://whogohost.com
- **Support**: Available via cPanel ticket system

### Development Support
- **Check build logs** for any errors
- **Verify all dependencies** are installed
- **Test locally** before deploying

## 🎯 Go Live Checklist

- [ ] Repository pushed to Git
- [ ] cPanel Git configured
- [ ] SSL certificate enabled
- [ ] Domain pointing to correct server
- [ ] All pages accessible
- [ ] Images loading correctly
- [ ] Contact forms working (if any)
- [ ] Mobile responsive design verified
- [ ] SEO meta tags in place

---

**Your InCLA website is ready for https://incla.edu.ng!** 🎉

Follow the steps above to deploy your optimized website to WhoGoHost cPanel.