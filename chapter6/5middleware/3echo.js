/**
 * Created by loukk on 16/08/2015.
 */
function echo(req,res,next){
    req.pipe(res);
}

var connect = require('connect');

connect().use(echo).listen(3000);