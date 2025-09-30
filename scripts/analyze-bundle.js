#!/usr/bin/env node

/**
 * Bundle Analysis Script
 * 
 * This script helps analyze the bundle size and performance of the Next.js application.
 * Run with: npm run analyze
 */

const { execSync } = require('child_process');

console.log('🔍 Starting bundle analysis...\n');

try {
  // Build and analyze the bundle
  console.log('Building application with bundle analyzer...');
  execSync('cross-env ANALYZE=true npm run build', { 
    stdio: 'inherit',
    env: { ...process.env, ANALYZE: 'true' }
  });
  
  console.log('\n✅ Bundle analysis complete!');
  console.log('📊 Check the opened browser tabs for detailed bundle analysis.');
  console.log('\n💡 Tips for optimization:');
  console.log('- Look for large chunks that can be code-split');
  console.log('- Identify unused dependencies');
  console.log('- Check for duplicate packages');
  console.log('- Consider lazy loading heavy components');
  
} catch (error) {
  console.error('❌ Bundle analysis failed:', error.message);
  process.exit(1);
}