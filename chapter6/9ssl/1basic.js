/**
 * Created by loukk on 16/08/2015.
 */

var https = require('https');
var fs = require('fs');
var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};

https.createServer(options,function(req,res){
    res.end('Hello client');
}).listen(3000);

console.log('server is running on port 3000');