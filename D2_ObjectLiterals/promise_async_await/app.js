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
const FULLFILLED=1;
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
        this.then=function(callback){
            if (state!==FULLFILLED) {
                callback(value)
            }else{
                handlers.push(callback);
            }
        
        };          
        }   
        executor(resolve,reject);
    }