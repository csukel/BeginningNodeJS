/**
 * Created by loukk on 16/08/2015.
 */

var connect = require('connect');

connect()
    .use(function(req,res,next){
        next(new Error('Big bad error details'));
    })
    .use(function(req,res){
        res.end('I will never get called');
    })
    .use(function(err,req,res,next){
        //Log the error on the server
        console.log('Error handled:',err.message);
        console.log('Stacktrace:',err.stack);
        //inform the client
        res.writeHead(500);
        res.end('Unable to process the request');
    }).listen(3000);

console.log('Server is running on port 3000');