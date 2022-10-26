const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', (req, res) => {
  res.status(200).send(`API is built by ILF Football</br>`);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
