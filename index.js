const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', (req, res) => {
  res.status(200).send(`API is built by ILF Football</br>`);
});

app.get('/api', (req, res) => {
  var config = {
    method: 'get',
    url: 'https://api.football-data.org/v4/competitions/PL/',
    headers: { 
      'X-Auth-Token': 'fdefafaa2ab442f38e6fd0d7cbdbfd65'
    }
  };

  axios(config).then(function (response) {
    console.log(JSON.stringify(response.data));
    res.status(200).send(result: JSON.stringify(response.data));
  }).catch(function (error) {
    console.log(error);
    res.status(400).send(error);
  });
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
