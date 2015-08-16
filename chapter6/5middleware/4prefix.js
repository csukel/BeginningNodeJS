/**
 * Created by loukk on 16/08/2015.
 */
function echo(req,res,next){
    req.pipe(res);
}

var connect = require('connect');

connect()
    .use('/echo',echo)
    .use(function(req,res,next){
        res.end('Wassup!');
    }).listen(3000);

console.log('server running on port 3000');