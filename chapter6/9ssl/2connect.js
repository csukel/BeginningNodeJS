/**
 * Created by loukk on 16/08/2015.
 */
var connect = require('connect');
var https = require('https');

var fs = require('fs');

var options = {
  key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};

//Create a connect dispatcher

var app = connect();
app.use(function(req,res){
    res.end('Hello Client. You are using the https');
});

//Register with https
https.createServer(options,app).listen(3000);
console.log('Server is running on https://localhost:3000');