/**
 * Created by loukk on 07/02/2016.
 */

var foo = 1;

function f1(){
    //creates a new scope for foo variable
    var foo =2;
    return foo;
}
console.log(f1());//2
console.log(foo);//1