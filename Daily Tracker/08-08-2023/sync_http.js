const http = require('http');
const request = require('sync-request');

try {
  const response = request('GET', 'http://www.example.com');
  
  console.log('Response Status Code:', response.statusCode);
  console.log('Response Body:', response.getBody('utf8'));
} catch (error) {
  console.error('Error:', error.message);
}
