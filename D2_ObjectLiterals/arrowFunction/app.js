// const greeter=function(name){return 'Hello '+name;}
// const greeter=(name)=>{return 'Hello '+name;}
const greeter=(name)=>'Hello '+name;
console.log(greeter('Trump'));



function greet(greetFunc,name){
    return greetFunc(name);
}

console.log(greet((name)=>'Hi'+name),'Anthony Trump');





// this will cause error
// function Timer(){
//     this.seconds=0;
//     setInterval(
//         function X()=>{
//             this.seconds++;
//             if (this.seconds>5){return}
//             console.log(this.seconds);
//         },1000
//     )
// }





function Timer(){
    this.seconds=0;
    setInterval(
        ()=>{
            this.seconds++;
            if (this.seconds>5){return}
            console.log(this.seconds);
        },1000
    )
}

const timer=new Timer();







const greeter2={
    name:'Tony',
    greet:()=>{console.log(this); return 'Hello'+this.name}
}
//this refere to windows as no this for arrow function

console.log(greeter2.greet());




const greeter3={
    name:'Tony',
    greet:function () {console.log(this); return 'Hello'+this.name}
}
//this refere to windows as no this

console.log(greeter3.greet());