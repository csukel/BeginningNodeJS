/**
 * Created by loukk on 07/02/2016.
 */
var appRouter = function (app){
    app.get('/',function(req,res){
        res.send('Hello World!');
    });

    app.get('/account',function(req,res){
       var accountMock = {
           'username':'loukkis',
           'password':'1234',
           'email': 'loukkis91@gmail.com'
       }

        if (!req.query.username){
            return res.send({"status":"error","message":"missing username"});
        }else if (req.query.username != accountMock.username){
            return res.send({"status":"error","message":"wrong username"});
        }else {
            return res.send(accountMock);
        }
    });

    app.post('/account',function(req,res){
        if(!req.body.username || !req.body.password){
           return res.send( {'Status':'Error','Message':'Missing parameter'});
        }else {
            return res.send({'Status':'Success','Message':'User has been created!'});
        }
    });

}

module.exports = appRouter;