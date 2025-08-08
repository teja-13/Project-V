const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join('C:\VVITU','index.html')));

app.listen(8088, () => {
  console.log('Server is running on http://localhost:8088');
});