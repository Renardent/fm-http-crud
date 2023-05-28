const express = require('express');
const ThingController = require('./controllers/Thing.controller');
const {basicErrorHandler} = require('./errorHandler');
const {validateThing} = require('./utils/validationThings');


const app = express();
const bodyParser = express.json();
app.use(bodyParser)

app.post('./thing', ThingController.createThing); //create
app.get('./things', ThingController.getAllThings); //get all
app.get('./thing/:id', validateThing, ThingController.getOne); //get one
app.put('/thing/:id', ThingController.updateOne); //update one
app.delete('/thing/:id', ThingController.deleteOne); // delete one

app.use(basicErrorHandler);

module.exports = app;