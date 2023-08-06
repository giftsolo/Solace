const express = require('express');
const fs = require('fs');
const xml2js = require('xml2js');

const app = express();

app.get('/', (req, res) => {
  fs.readFile('sample.xml', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading XML file.');
    }

    const parser = new xml2js.Parser();
    parser.parseString(data, (err, result) => {
      if (err) {
        return res.status(500).send('Error parsing XML.');
      }

      res.json(result);
    });
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
