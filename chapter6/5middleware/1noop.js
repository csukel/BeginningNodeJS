/**
 * Created by loukk on 16/08/2015.
 */
var connect = require('connect');
var app = connect().use(function(req,res,next){
   next();
}).listen(3000);

console.log('server running on port 3000');