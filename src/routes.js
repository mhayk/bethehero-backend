const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
  const { body } = request;

  console.log(body);

  return response.json({
    evento: 'Be the Hero',
    name: 'Mhayk Whandson',
  });
});

module.exports = routes;
