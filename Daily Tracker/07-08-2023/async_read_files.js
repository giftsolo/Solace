const fs = require('fs');

async function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function main() {
  try {
    const textContent = await readFileAsync('sample.txt');
    const htmlContent = await readFileAsync('sample.html');
    const jsonContent = await readFileAsync('sample.json');

    console.log('Text Content:');
    console.log(textContent);

    console.log('HTML Content:');
    console.log(htmlContent);

    console.log('JSON Content:');
    console.log(jsonContent);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();