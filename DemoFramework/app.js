var g=G$('Super ','man');
//console.log(g)

//use our cahinable methos
g.greet().setLang('es').greet(true);



// use our object on the click of the login buttion
$('#login').click(function(){
//create an object
    var loginGrtr=G$('home ','lander');
    //hide the login on the screen
    $('#logindiv').hide();
//fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language and log the welcome as well
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log();
})