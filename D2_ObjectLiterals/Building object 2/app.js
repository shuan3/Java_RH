var person={
    fn:'Default',ln:'Default',greet: function(){
        return 'Hi '+ this.fn;
    }
}

var john=object.create(person);
john.fn='John';
john.ls='Doe';
console.log(john)