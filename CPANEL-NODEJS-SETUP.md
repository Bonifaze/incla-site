# cPanel Node.js Setup Guide for InCLA Website

## 🚨 Current Issue Resolution

You're seeing "It works! NodeJS 10.24.1" because the cPanel Node.js app isn't configured correctly.

## 🔧 Step-by-Step Fix

### Step 1: Correct cPanel Node.js App Settings

In your cPanel Node.js interface, update these settings:

```
Application root: /home/inclaedu/incla-site
Application URL: https://incla.edu.ng
Application startup file: server.js
Application mode: production
Node.js version: 10.24.1 (or higher if available)
```

### Step 2: File Upload Structure

Upload your files to `/home/inclaedu/incla-site/` with this structure:

```
/home/inclaedu/incla-site/
├── package.json          ← MUST be here for detection
├── server.js             ← Updated for cPanel
├── next.config.mjs       ← Next.js configuration
├── src/                  ← Source files
│   ├── app/
│   ├── components/
│   └── layouts/
├── public/               ← Static assets
│   └── image/
├── .env.production       ← Environment variables
└── node_modules/         ← Will be created by npm install
```

### Step 3: Environment Variables in cPanel

Add these environment variables in the cPanel Node.js app:

```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://incla.edu.ng
PORT=3000
```

### Step 4: Install Dependencies

1. **Click "Run NPM Install"** in cPanel Node.js interface
2. **Or use terminal**:
   ```bash
   source /home/inclaedu/nodevenv/incla-site/10/bin/activate
   cd /home/inclaedu/incla-site
   npm install
   ```

### Step 5: Build the Application

In the terminal or via cPanel:
```bash
npm run build
```

### Step 6: Start/Restart the Application

1. **Click "Restart"** in cPanel Node.js interface
2. **Or use terminal**:
   ```bash
   node server.js
   ```

## 🔍 Troubleshooting

### Issue: "package.json not detected"
**Solution**: Ensure `package.json` is in `/home/inclaedu/incla-site/` (not in a subdirectory)

### Issue: "Module not found"
**Solution**: Run `npm install` in the correct directory

### Issue: Still showing "It works!"
**Solution**: 
1. Check application root path
2. Verify server.js is the startup file
3. Restart the Node.js application

### Issue: Build errors
**Solution**: 
1. Check Node.js version (should be 14+ for Next.js)
2. Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## 📁 Correct Directory Structure

```
/home/inclaedu/
├── incla-site/              ← Your app files here
│   ├── package.json         ← Required for detection
│   ├── server.js
│   ├── src/
│   └── public/
├── nodevenv/               ← Node.js virtual environment
│   └── incla-site/
└── public_html/            ← Static files (if needed)
    └── (other websites)
```

## 🚀 Alternative: Static Export Method

If Node.js continues to have issues, you can use static export:

1. **Build locally**:
   ```bash
   npm run build
   npm run export
   ```

2. **Upload `out/` folder contents** to `/home/inclaedu/public_html/`

3. **Add `.htaccess`** for proper routing

## ✅ Verification Steps

1. **Check package.json detection**: Should show "Detected configuration files"
2. **Verify dependencies**: "Run NPM Install" should work
3. **Test URL**: https://incla.edu.ng should show your website
4. **Check logs**: Monitor passenger log for errors

## 📞 Next Steps

1. **Update cPanel settings** as shown above
2. **Upload files to correct directory**
3. **Run NPM install**
4. **Restart the application**
5. **Test the website**

Your InCLA website should then be accessible at https://incla.edu.ng! 🎉