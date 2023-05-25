const express = require('express');
const ThingController = require('./controllers/Thing.controller');

const app = express();
const bodyParser = express.json();

app.post('./thing', bodyParser, ThingController.createThing);

module.exports = app;