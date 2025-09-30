#!/usr/bin/env node

/**
 * Alternative startup file for cPanel Node.js hosting
 * Use this as startup file if server.js doesn't work
 */

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// cPanel environment configuration
const port = parseInt(process.env.PORT || process.env.NODEJS_PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';

console.log('Starting InCLA website...');
console.log('Environment:', process.env.NODE_ENV);
console.log('Port:', port);
console.log('Directory:', process.cwd());

// Initialize Next.js
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, '0.0.0.0', (err) => {
    if (err) {
      console.error('Error starting server:', err);
      throw err;
    }
    console.log(`> InCLA website ready on http://0.0.0.0:${port}`);
  });
}).catch((ex) => {
  console.error('Error preparing Next.js app:', ex);
  process.exit(1);
});