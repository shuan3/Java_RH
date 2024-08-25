function wait3s(){
    var ms=3000+new Date().getTime();
    while (new Date()<ms){
        console.log('finished function');
    }
}

function clickHandler(){
    console.log('click event!')
}
// It quenes after running the script and once it capture the click it runs the one in the quene
document.addEventListener('click',clickHandler);
wait3s();
console.log('finished execution');
