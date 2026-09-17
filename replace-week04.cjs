const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else {
      if (!fullPath.match(/\.(js|jsx|json|md|html)$/)) continue;
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      content = content.replace(/NekoAida/g, 'Pasit Petoumphun');
      content = content.replace(/68543210015-2/g, '68543210036-8');
      content = content.replace(/68543210015/g, '68543210036-8');
      content = content.replace(/engse203-lab04-68543210036-8/g, 'engse203-student-labs-68543210036-8');
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated ' + fullPath);
      }
    }
  }
}

replaceInDir('labs/week-04');
