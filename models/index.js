const {Client} = require('pg');
const config = require('../configs/database.json');
const fs = require('fs');
const path = require('path');

const currentFileName = path.basename(__filename);

const env = process.env.NODE_ENV || 'development';
const databaseConfig = config[env];

const client = new Client(databaseConfig );
client.connect();

const db = {
    client
};

fs.readdirSync(__dirname)
.filter(fileName => /.js$/.test(fileName) && fileName !== currentFileName)
.forEach(fileName => {
    const absPathToFile = path.join(__dirname, fileName);
    const Model = require(absPathToFile);
    Model._client = client;
    db[Model.name] = Model;
})

process.on('beforeExit', ()=> {
    client.end();
})

module.exports = db;