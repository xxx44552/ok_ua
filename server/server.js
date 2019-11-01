const express = require("express");
const fs = require('fs');
const path = require('path');
const bodyParser = require("body-parser");

const config = require('./config');

const app = express();

//Увеличиваю позволенный размер файла
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.static(path.join(__dirname, '../data')));

app.get("/api", function(req, res){

  var file = fs.readFileSync("../data/data.json", "utf8");
  var data = JSON.parse(file);
  res.send(data);

});

app.get("/*", function(req, res){
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));

});

app.listen(config.port, function () {
  console.log('Start server on ' + config.port + ' port...')
});