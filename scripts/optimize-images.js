#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script helps identify and provide recommendations for image optimization.
 * It analyzes the public/image directory and suggests optimizations.
 */

const fs = require('fs');
const path = require('path');

const imageDir = path.join(process.cwd(), 'public', 'image');

function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function analyzeImages(dir, results = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      analyzeImages(fullPath, results);
    } else if (/\.(jpg|jpeg|png|gif|bmp|tiff)$/i.test(item)) {
      const size = getFileSize(fullPath);
      const relativePath = path.relative(path.join(process.cwd(), 'public'), fullPath);
      
      results.push({
        path: relativePath,
        size: size,
        extension: path.extname(item).toLowerCase(),
        needsOptimization: size > 100000 || path.extname(item).toLowerCase() !== '.webp'
      });
    }
  }
  
  return results;
}

console.log('🖼️  Analyzing images for optimization opportunities...\n');

try {
  const images = analyzeImages(imageDir);
  
  // Sort by size (largest first)
  images.sort((a, b) => b.size - a.size);
  
  console.log('📊 Image Analysis Results:');
  console.log('=' .repeat(60));
  
  let totalSize = 0;
  let largeImages = 0;
  let nonWebPImages = 0;
  
  images.forEach((img, index) => {
    totalSize += img.size;
    if (img.size > 100000) largeImages++;
    if (img.extension !== '.webp') nonWebPImages++;
    
    if (index < 10) { // Show top 10 largest images
      const status = img.needsOptimization ? '⚠️  NEEDS OPTIMIZATION' : '✅ OK';
      console.log(`${formatBytes(img.size).padEnd(10)} | ${img.path} ${status}`);
    }
  });
  
  console.log('\n📈 Summary:');
  console.log(`Total images: ${images.length}`);
  console.log(`Total size: ${formatBytes(totalSize)}`);
  console.log(`Large images (>100KB): ${largeImages}`);
  console.log(`Non-WebP images: ${nonWebPImages}`);
  
  console.log('\n💡 Optimization Recommendations:');
  
  if (largeImages > 0) {
    console.log(`• Convert ${largeImages} large images to WebP/AVIF format`);
    console.log('• Consider using Next.js Image component for automatic optimization');
  }
  
  if (nonWebPImages > 0) {
    console.log(`• Convert ${nonWebPImages} images to modern formats (WebP/AVIF)`);
  }
  
  console.log('• Enable Next.js Image Optimization (already configured)');
  console.log('• Use responsive images with proper sizing');
  console.log('• Implement lazy loading for below-the-fold images');
  
  console.log('\n🔧 Next Steps:');
  console.log('1. Use online tools like Squoosh.app to convert large images');
  console.log('2. Replace <img> tags with Next.js <Image> components');
  console.log('3. Set appropriate width/height props for better performance');
  
} catch (error) {
  console.error('❌ Error analyzing images:', error.message);
  process.exit(1);
}