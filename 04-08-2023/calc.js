// Required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create express app
const app = express();
app.use(bodyParser.json());

// Addition route
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid numbers provided.' });
  }

  const result = num1 + num2;
  res.json({ result });
});

// Subtraction route
app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid numbers provided.' });
  }

  const result = num1 - num2;
  res.json({ result });
});

// Division route
app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid numbers provided.' });
  }

  if (num2 === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed.' });
  }

  const result = num1 / num2;
  res.json({ result });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
