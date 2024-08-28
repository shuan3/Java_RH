function runThis(otherFn){
    console.log("Running ...");
    otherFn();
};

runThis(
    ()=>{
        console.log("function 1")
    }
);

runThis(
    ()=>{
        console.log("function 2")
    }
);

function test(){
    handlers=[]
    value='abaa'
    //{"lol":"boo","binini":"bibi"};
    handlers.forEach((h)=>h(value));
    // handlers.push('lol')
    console.log(handlers);
    // if (true) return;
    // console.log("here not being run");
}
test()

const PENDING=0;
const FULFILLED=1;
const REJECTED=2;
function CustomPromise(executor){
    let state=PENDING;
    let value=null;
    let handlers=[];
    let catches=[];
    function resolve(result){
        if (state!==PENDING) return;
        state=FULFILLED;
        value=result;
        handlers.forEach((h)=>h(value));
    }
    function reject(err){
        if (state!==PENDING) return; 
        state=REJECTED;
        value=err;
        catches.forEach(
        (c)=>c(err)
        ) ;      
        }   
    this.then=function(callback){

            if (state===FULFILLED) {
                callback(value)
            }else{
                handlers.push(callback);
            }
        console.log('check handlers')
        console.log(handlers)
        };    
        executor(resolve,reject);
    }


const doWork=(res,rej)=>{
    setTimeout(
        ()=>{res("hello world")},2
    )

}

let someText=new CustomPromise(doWork);

someText.then((val)=>{
    console.log("1st log: "+ val)
})

someText.then((val)=>{
    console.log("2nd log: "+ val)
})

setTimeout(
    ()=>{
        someText.then((val)=>{
            console.log("3rd log: "+ val)
        })
    },3
)


const doOtherWork=(res,rej)=>{
    setTimeout(
        ()=>{res("How are you")},2
    )

}


someText.then(
    (val)=>{console.log("nst log: "+ val)
    return "How are you?"}
).then((val)=>{
    console.log( val);
});