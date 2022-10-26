const express = require('express');
// const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;
// app.use(cors());

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

app.use(allowCrossDomain);
// app.use(app.router);

app.get('/', (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  // res.header('Access-Control-Allow-Headers', 'X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorization');
  res.status(200).send(`API is built by ILF Football</br>`);
});

app.get('/api', (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  // res.header('Access-Control-Allow-Headers', 'X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorization');
  var config = {
    method: 'get',
    url: 'https://api.football-data.org/v4/competitions/PL/',
    headers: { 
      'X-Auth-Token': 'fdefafaa2ab442f38e6fd0d7cbdbfd65'
    }
  };

  axios(config).then(function (response) {
    res.status(200).send({
      result: JSON.stringify(response.data)
    });
  }).catch(function (error) {
    res.status(400).send({result: error});
  });
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
