/**
 * Created by loukk on 16/08/2015.
 */
var connect = require('connect');

connect()
    .use(function(req,res,next){
        next('An error has occured!');
    })
    .use(function(req,res){
        res.end('I will never get called');
    }).listen(3000);

console.log('server is running on port 3000');