const fs = require('fs');
const files = [
  'src/components/wishlist/WishlistCards.js',
  'src/components/Search.js',
  'src/components/Cart/IntrestedProduct.js',
  'src/app/shop/page.js'
];

files.forEach(f => {
  if (!fs.existsSync(f)) {
    console.log("File not found: ", f);
    return;
  }
  let content = fs.readFileSync(f, 'utf8');
  let original = content;
  content = content.replace(/<a\s+href="#quickView"\s+data-bs-toggle="offcanvas"\s+className="[^"]+">\s*<span className="icon icon-Eye"><\/span>\s*<span className="tooltip">Quick view<\/span>\s*<\/a>/g, '<QuickViewButton product={null} />');
  
  if (content !== original && !content.includes('QuickViewButton')) {
    if (content.startsWith('"use client"')) {
        content = content.replace(/^"use client";\n/, '"use client";\nimport QuickViewButton from "@/components/QuickViewButton";\n');
    } else {
        content = 'import QuickViewButton from "@/components/QuickViewButton";\n' + content;
    }
  }
  fs.writeFileSync(f, content);
  console.log('Processed', f);
});
