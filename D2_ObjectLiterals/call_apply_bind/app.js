var person={
    fn:'fn',
    ln:'ln',
    getfullname:function(){
        var fullname=this.fn+' '+this.ln;
        return fullname;
    }
}


// .bind reference the copy 
var logName=function(lang1,lang2){
    console.log('Logged: '+ this.getfullname());
    console.log('Arguments: '+ lang1+' ' +lang2)

}//.bind(person)

var logPersonName=logName.bind(person);
logPersonName();

logName.call(person,'en','es');


logName.apply(person,['en','es']);

var person2={
    fn:'Jane',
    ln:'Done'
}
//function borrowing
console.log(person.getfullname.apply(person2))

//function curring
function multiply(a,b){
    return a*b;
}

// function multiply(b){
// var a=2;
//     return a*b;
// }

var mm=multiply.bind(this,2);

console.log(mm(5));


console.log(mm(6));