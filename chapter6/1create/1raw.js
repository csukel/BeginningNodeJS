/**
 * Created by loukk on 16/08/2015.
 */
var http = require('http');

var server = http.createServer(function(req,res){
    console.log('request starting ...');

    //respond
    res.write('hello client!');
    res.end();
});

server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');