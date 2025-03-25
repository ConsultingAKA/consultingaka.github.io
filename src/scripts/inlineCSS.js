const fs = require('fs');
const path = require('path');

// Run this after the build to ensure CSS is included in the HTML
console.log('Inlining CSS in HTML files...');

const outDir = path.join(process.cwd(), 'out');
const globalsCss = fs.readFileSync(path.join(process.cwd(), 'src/styles/globals.css'), 'utf8');
const basicCss = fs.readFileSync(path.join(process.cwd(), 'src/styles/basic.css'), 'utf8');
const combinedCss = globalsCss + basicCss;

// Find all HTML files
const findHtmlFiles = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      results = results.concat(findHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  
  return results;
};

const htmlFiles = findHtmlFiles(outDir);

// Add the CSS to each HTML file
htmlFiles.forEach((htmlFile) => {
  let htmlContent = fs.readFileSync(htmlFile, 'utf8');
  
  // Add inline CSS if not already present
  if (!htmlContent.includes('<!-- INLINE_CSS -->')) {
    htmlContent = htmlContent.replace('</head>', `<style><!-- INLINE_CSS -->${combinedCss}</style></head>`);
    fs.writeFileSync(htmlFile, htmlContent);
    console.log(`CSS inlined in ${htmlFile}`);
  }
});

console.log('CSS inlining complete.');