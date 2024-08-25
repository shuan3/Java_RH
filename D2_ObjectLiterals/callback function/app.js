function tellmewhendone(callback){
    var a=1;
    var b=2;
    callback();
}

tellmewhendone(
    function(){
        console.log('I am Done')
    }
);

tellmewhendone(
    function(){
        alert('I am Done')
    }
);