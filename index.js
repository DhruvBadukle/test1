const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome home');
});

app.get('/about', (req, res) => {
  res.send('Welcome to About Us page');
});

app.get('/node', (req, res) => {
  res.send('Welcome to my Node Js project');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});



