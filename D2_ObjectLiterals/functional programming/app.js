function mapForEach(arr,fn){
    var newArr= [];
    for (var i=0; i<arr.length;i++){
        newArr.push(fn(arr[i])

        )
    };
    return newArr
}

var arr1=[1,2,3];
console.log(arr1)
var arr2=mapForEach(arr1,function(item){
    return item*2;
}
)

console.log(arr2)


var checkPastLimit=function(limiter,item){
    return item>limiter;
}

var arr4=mapForEach(arr1,checkPastLimit.bind(this,1));
console.log(arr4);


var checkPastLimitSimple=function(limiter){
    return function(limiter,item){
        return item>limiter;
    }.bind(this,limiter)
}

var arr5=mapForEach(arr1,checkPastLimitSimple(2));
console.log('arr5 is '+arr5)




//underscore
// import { map } from 'underscore';

// // import { parse } from 'node-html-parser';
// map = require('underscore');

var arr6=_.map([2,3,4,5,6],function(item){return item*3});
console.log('arr6 is '+arr6)

var arr7=_.map([2,3,4,5,6],function(item){return item%2===0;});
console.log('arr7 is '+arr7);


console.log('check below function!');

(
    function lol1(){
        console.log('() make it works also')
        // return 'Yeds'
    }()
);


console.log('check below function 2!');


// function lol2(){
//     console.log('lol2 make it works also')
//     // return 'Yeds'
// };
var run_function=function lol2(){
    console.log('lol2 make it works also')
    // return 'Yeds'
}();

// lol2()
