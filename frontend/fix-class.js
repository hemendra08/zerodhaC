const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function traverseAndReplace(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      traverseAndReplace(filePath);
    } else if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Replace class=" with className="
      content = content.replace(/class="/g, 'className="');
      // Replace class=' with className='
      content = content.replace(/class='/g, "className='");
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
      }
    }
  });
}

traverseAndReplace(srcDir);
console.log('Replacement complete.');
