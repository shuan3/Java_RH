function bb(){
    var arr=[];
    for (var i=0; i<3; i++){
        arr.push(
            setTimeout(function(){
                console.log(i);
            }, 1)
        )
    }
    return arr;
}

var fs=bb();

fs[0]();
fs[1]();
fs[2]();