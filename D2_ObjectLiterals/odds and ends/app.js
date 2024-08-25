var people=[
    {
        fn:"1"
        ,ln:"1",
        address:['lol1 street','lol 2 street']
    },
    {
        fn:"2"
        ,ln:"2",
        greet: function(){console.log('hello')}
    }
]

var a=3;
console.log(typeof a);


var a={};
console.log(typeof a);

var d=[];
console.log(typeof d);


var a='hello';
console.log(typeof a);
console.log(Object.prototype.toString.call(d));

console.log(e instanceof Person);
