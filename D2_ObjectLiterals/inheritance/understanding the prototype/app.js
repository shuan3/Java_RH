var person= {
    fn: 'default',
    ln:'default',
    getFullName: function(){
        return this.fn+ '  ' +this.ln;
    }
}

var john={
    fn:'John',
    ln:'Doe'
}

john.__proto__=person;
console.log(john.getFullName());


var jane={
    fn:'John',
    // ln:'Doe'
}

jane.__proto__=person;
console.log(jane.getFullName());


//hasOwnProperty

for (var prop in john){
    if (john.hasOwnProperty('firstname')){
        console.log(prop+' '+ john[prop]);
    }


}






var joke={
    address: 'lol',
    getFormalFullName: function(){
        return this.ln+ ' '+this.fn;
    }
}

var jim={
    getFristName: function(){
        return fn;
    }
}
_.extend(john,joke,jim);
console.log(john);