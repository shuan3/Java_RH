;(
    function(
        global,$
    ){

        var Greetr=function(firtName,lastName,language){
            return new Greetr.init(firtName,lastName,language)
        }
        
        var supportedLangs = ['en','es','cn']
        //informal greeting
        var greetings={
            en:'Hello',
            es:'Hola',
            cn:'ni hao'
        }
        //formal greeting
        var formalGreetings={
                        en:'Greetigs',
            es:'Saludos',
                  cn:'huan ying'
        }
        //logging messages
        var logMessages={
                                    en:'Logged in',
                    es:'Inicio sesion',
                    cn:'deng ru'
        }

        Greetr.prototype={
            fullName: function(){
                return this.firstName+ ' '+ this.lastName
            },
            validate:function(){
              if( supportedLangs.indexOf(this.language)===-1) {throw "Invalid language";}
            },
            greeting: function(){
                return greetings[this.language]+' '+ this.firstName+ '!';
            },
            formalGreeting: function(){
                return formalGreetings[this.language]+', '+ this.fullName();
            },
            greet: function(formal){
                var msg;
                if (formal){msg=this.formalGreeting()}
                else{msg=this.greeting()}
                if (console){
                    console.log(msg);
                }
                // 'this refers to the calling object at execution time
                // makee the method chainable
                return this
            },
            log: function(){
                if (console){
                    console.log(logMessages[this.language]+': '+this.fullName());
                }
                return this//what is chainable

            }
        ,
        setLang: function(lang){
            this.language=lang;
            this.validate();
            return this;
        },
        HTMLGreeting: function(selector,formal){
            if(!$){
                throw 'jQeury not loaded'
            }
            if(!selector){
                throw 'Missing jQuery selector'
            }

            var msg;
            if (formal){msg=this.formalGreeting();}
            else{msg=this.greeting();}
            $(selector).html(msg);
            return this;
        }
        };
 //trick borrowed from jQuery so we do not have to use the 'new' keyword

        Greetr.init=function(firstName,lastName,language){
            
             var self=this;
             self.firstName=firstName|| '';
             self.lastName=lastName|| '';
             self.language=language|| 'en';

        }
        Greetr.init.prototype=Greetr.prototype;
        //attach our Greetr to the global object and provide a shorthand '$G' for ease our poor fingers
        global.Greetr=global.G$=Greetr;

    }
    (window,jQuery)
)