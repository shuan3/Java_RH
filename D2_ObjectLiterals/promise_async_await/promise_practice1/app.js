
const recordVedioOne=new Promise((resolve,reject)=>{
    resolve('Vedio 1 recorded')
});

const recordVedioTwo=new Promise((resolve,reject)=>{
    resolve('Vedio 2 recorded')
});

const recordVedioThree=new Promise((resolve,reject)=>{
    resolve('Vedio 3 recorded')
});


Promise.all([
    recordVedioOne,
    recordVedioTwo,
    recordVedioThree
]).then(
    (messages)=>{console.log(messages)}
);



Promise.race([
    recordVedioOne,
    recordVedioTwo,
    recordVedioThree
]).then(
    (message)=>{console.log(message)}
)