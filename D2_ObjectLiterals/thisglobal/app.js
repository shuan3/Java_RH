// this refer to window which is global
function a(){
    console.log(this)
    this.newvar='hello'
}


var b=function(){console.log(this)}
a();
b();

console.log(newvar)

// this only refer to the c itself

var c={
    name:'This c object',
    log:function(){
        //adding below to chaneg this pointing to c not global
        var self=this;
        console.log(this);

        var setname=function(newname){
            // this.name=newname
            self.name=newname
        }
        //this will not do anything
        setname('Update c object');
        // console.log(this);
        console.log(self)
    }
}
c.log();