(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/register/register.js                                         //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.register.events({                                             // 1
    'submit form': function () {                                       // 2
                                                                       //
        event.preventDefault();                                        // 4
                                                                       //
        var email = $('[name=email]').val();                           // 6
        var password = $('[name=password]').val();                     // 7
                                                                       //
        Accounts.createUser({                                          // 9
            email: email,                                              // 10
            password: password                                         // 11
        }, function (error) {                                          //
            if (error) {                                               // 13
                console.log(error.reason); // Output error if registration fails
            } else {                                                   //
                    Router.go("home"); // Redirect user if registration succeeds
                }                                                      //
        });                                                            //
                                                                       //
        Router.go('home');                                             // 20
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
