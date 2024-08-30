console.log("notmal method")

function WalkTheDog1(callback){
   setTimeout(console.log("Walking the dog!"),100 ) ;
   callback();
}
function CleanKitchen1(callback){
    setTimeout(console.log("Clening the kitchen!"),12000);
    callback();
}
function TakeOutTrash1(callback){
    setTimeout( console.log("Take out the trash!"),13000);
    callback();
}
WalkTheDog1(
    ()=>
   {CleanKitchen1(
    ()=>{
        TakeOutTrash1(
            ()=>{console.log("Job done!")}
        )
    }
    
)} 
)


console.log("promise method")

function WalkTheDog2(){
    return new Promise(
        (resolve,reject)=>
    {
        setTimeout(()=>{
            const dogwalked=true;
            if (dogwalked){ resolve("Walking the dog!")}
            else{
                reject("You do not walk the dog!")
            }
           
        
        },100 ) ;
    }
)
 }
 function CleanKitchen2(){
    return new Promise(
        (resolve,reject)=>
    {
        setTimeout(()=>{
            const cleankitchen=true;
            if (cleankitchen){ resolve("Clening the kitchen!")}
            else{
                reject("You do not clean the kitchen!")
            }
           
          },100 ) ;
    }
)

 }
 function TakeOutTrash2(){
    return new Promise(
        (resolve,reject)=>
    {
        setTimeout(()=>{
            const takeouttrash=true;
            if (takeouttrash){ resolve("Take out the trash!")}
            else{
                reject("You do not take out trash!")
            }
      
        },100 ) ;
    }
)
 }

 WalkTheDog2().then(value=>{console.log(value);return CleanKitchen2()})
 .then(value=>{console.log(value);return TakeOutTrash2()})
 .then(value=>{console.log(value);console.log("Job Done!")})
 .catch(error=>{console.log(error)})





 console.log("async method");


 async function doChores(){
    const walkDogResult=await WalkTheDog2();
    console.log(walkDogResult);

    const cleanKitchenResult=await CleanKitchen2();
    console.log(cleanKitchenResult);

    const takeouttrashResult=await TakeOutTrash2();
    console.log(takeouttrashResult);

 }
 doChores()






 console.log("async method 2");


 function WalkTheDog3(){
    return new Promise(
        (resolve,reject)=>
    {
        setTimeout(()=>{
            const dogwalked3=true;
            if (dogwalked3){ resolve("Walking the dog!")}
            else{
                reject("You do not walk the dog!")
            }
           
        
        },100 ) ;
    }
)
 }
 function CleanKitchen3(){
    return new Promise(
        (resolve,reject)=>
    {
        setTimeout(()=>{
            const cleankitchen3=true;
            if (cleankitchen3){ resolve("Clening the kitchen3!")}
            else{
                reject("You do not clean the kitchen3!")
            }
           
          },100 ) ;
    }
)

 }
 function TakeOutTrash3(){
    return new Promise(
        (resolve,reject)=>
    {
        setTimeout(()=>{
            const takeouttrash3=true;
            if (takeouttrash3){ resolve("Take out the trash3!")}
            else{
                reject("You do not take out trash3!")
            }
      
        },100 ) ;
    }
)
 }
 async function doChores3(){
    const walkDogResult3=await WalkTheDog3();
    console.log(walkDogResult3);

    const cleanKitchenResult3=await CleanKitchen3();
    console.log(cleanKitchenResult3);

    const takeouttrashResult3=await TakeOutTrash3();
    console.log(takeouttrashResult3);

 }
 doChores3()
