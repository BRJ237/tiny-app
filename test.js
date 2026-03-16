const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('<h1>Test</h1><script>alert("Working!")</script>');
});

app.listen(port, () => console.log('Test server running'));
