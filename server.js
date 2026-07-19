const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

app.use(express.static(__dirname));

app.get('/mamad.mp4', (req, res) => {
  res.sendFile(path.join(__dirname, 'bahan.html'));
});

app.listen(PORT, () => {
  console.log(`Redirect server jalan di http://localhost:${PORT}`);
});
