function Person(fn,ln){
    console.log(this);
    this.fn=fn;
    this.ln=ln;
console.log('This function is invoked.');
// return {greeting: 'I am in the way.'}
}


// prototype adding function or others so john and jane will get those update.
Person.prototype.getFullName=function()
{
    return this.fn+' '+this.ln
}
var john=new Person('super','man');
console.log('check john');
console.log(john);



var jane=new Person('Home','lander');
console.log('check jane');
console.log(jane);



// var a=3;
// var b=new Number(3);
// a==b
// a===b





