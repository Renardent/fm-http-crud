const express = require('express');
const ThingController = require('./controllers/Thing.controller');


const app = express();
const bodyParser = express.json();
// app.use(bodyParser)

app.post('./thing', bodyParser, ThingController.createThing); //create
app.get('./things', ThingController.getAllThings); //get all
app.get('./thing/:id', ThingController.getOne); //get one
app.put('/thing/:id', bodyParser, ThingController.updateOne); //update one
app.delete('/thing/:id', ThingController.deleteOne); // delete one

// app.use(basicErrorHandler);

module.exports = app;