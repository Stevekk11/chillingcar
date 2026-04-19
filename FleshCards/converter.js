const fs = require('fs');
const txt = fs.readFileSync('Flashcards.txt', 'utf8');
const escapedTxt = txt.replace(/\\/g, '\\\\').replace(/`/g, '\\`');
const output = `export const rawData = \`${escapedTxt}\`;\r\n`;
fs.writeFileSync('data.js', output);
console.log('data.js created successfully.');
