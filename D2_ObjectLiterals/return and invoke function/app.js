function getPerson(){
    return {
        first: ' Tony'
    }
}
console.log(getPerson());



// invoke function after creation
var greeting=function(name){
    console.log('Hello'+ name);
}('John');

// using a function expression
var greetfun=function(name){
    console,log('Hello'+name)
};


// fucntion statement
greetfun=function(name){
    console,log('Hello'+name)
};
greetfun();


// return a function

function a(what){
    return function aa(){
        console.log('what'+' '+'name')
    }
}

a('HI')('Toney')

var sayhi=a('HI')
sayhi('Tony');