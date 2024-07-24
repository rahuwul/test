const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ text: 'This is a RESTful API response' });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});