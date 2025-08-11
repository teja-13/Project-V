const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the folder (for example, Project-V)
app.use(express.static(path.join('C:/Project-V')));

// Optional: explicitly send index.html when root URL is visited
app.get('/', (req, res) => {
  res.sendFile(path.join('C:/Project-V', 'index.html'));
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
