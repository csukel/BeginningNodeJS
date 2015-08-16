/**
 * Created by loukk on 16/08/2015.
 */
var connect = require('connect');

connect().use(function(req,res,next){next();})
    .use(function (err,req,res,next){
        res.end('Error occured!');
    })
    .use(function(req,res,next){
        res.end('No error occurred!');
    }).listen(3000);

console.log('Server is running on port 3000');