/**
 * Created by loukk on 16/08/2015.
 */
//Configurable middleware creator
function greeter(message){
    return function(req,res,next){
        res.end(message);
    };
}

var helloWorldGreeter = greeter('Hello world!');
var heyThereGreeter = greeter('Hey there!');


var connect = require('connect');

connect()
    .use('/hello',helloWorldGreeter)
    .use('/hey',heyThereGreeter)
    .listen(3000);
console.log('server is running on port 3000');