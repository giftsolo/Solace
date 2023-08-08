const http = require('http');

http.get('http://www.example.com', (response) => {
  console.log('Response:', response.statusCode);
}).on('error', (error) => {
  console.error('Error:', error.message);
});
