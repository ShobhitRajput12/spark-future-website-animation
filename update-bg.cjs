const fs = require('fs');
const path = require('path');
const dir = 'c:/company/pobul reddy school/src/sections';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    let p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');
    // We only want to replace bg-black in className="... bg-black ..."
    let newContent = content.replace(/className=\"([^\"]*?)\bbg-black\b([^\"]*?)\"/g, 'className=\"$1bg-transparent$2\"');
    if (content !== newContent) {
      fs.writeFileSync(p, newContent);
      console.log('Updated ' + file);
    }
  }
});
