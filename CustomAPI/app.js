/**
 * Created by loukk on 07/02/2016.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

var routes = require("./routes/routes.js")(app);

var server = app.listen(3000,function(){
    console.log('Server is listening on port ... ' + server.address().port);
});