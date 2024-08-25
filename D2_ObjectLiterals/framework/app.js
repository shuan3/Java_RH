console.log(lib)
//Object
var person= new Object();
person["first_name"]="Tony"
// console.log(person.first_name)
person.address=new Object();
person.address.street="111 main street"
// console.log(person.address.street)

var beauty={first_name:'lol',ln:'lol',street:{address:'11111 main street',city:'nprth yprl'}
}

function greet(person){
    console.log('Hi'+person.first_name)
}
greet(person)
greet(beauty)



var ob={fn:'Mary',is: true}
console.log(JSON.stringify(ob))
var jsonValue=JSON.parse('{"fn" :"lol","is":true}')
console.log(jsonValue);


//function is object
greet.name="function name"
console.log(greet.name);


//assign function to a var
var angreet=function(){console.log('hi')};
angreet();


//put a function inside a function
function log(a){
    console.log(a);
}
log(function(){
    console.log('hi')
})





//by value
var a=3;
var b;
b=a;
a=2;
console.log('a is '+a)
console.log('b is '+b)

//by reference
var c={greeting:'hi'}
var d;
d=c
console.log('c is '+c)

