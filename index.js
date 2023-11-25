const fs = require('fs');
console.log('start...');

console.log('writing file to mounted storage...');

const fileName = 'hello.txt';
const fileContent = 'hello';

try {
  fs.writeFileSync(fileName, fileContent);
  console.log(`${fileName} has been successfully written.`);
} catch (err) {
  console.error(`Error writing to ${fileName}: ${err}`);
}

console.log('end...');