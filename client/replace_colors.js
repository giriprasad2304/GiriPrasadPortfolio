const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(srcDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace Tailwind color classes
  content = content.replace(/purple-400/g, 'teal-300');
  content = content.replace(/purple-500/g, 'teal-400');
  content = content.replace(/purple-600/g, 'teal-500');
  
  content = content.replace(/cyan-300/g, 'slate-300');
  content = content.replace(/cyan-400/g, 'slate-400');
  content = content.replace(/cyan-500/g, 'slate-500');
  content = content.replace(/cyan-800/g, 'slate-700');
  content = content.replace(/cyan-950/g, 'slate-800');
  
  content = content.replace(/blue-500/g, 'teal-500');
  content = content.replace(/blue-600/g, 'teal-600');
  
  fs.writeFileSync(file, content);
});

console.log('Replaced colors in ' + files.length + ' files.');
