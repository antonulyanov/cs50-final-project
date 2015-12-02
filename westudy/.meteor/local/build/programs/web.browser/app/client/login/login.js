(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/login/login.js                                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.login.events({                                                // 1
    'submit form': function (event) {                                  // 2
                                                                       //
        event.preventDefault();                                        // 4
                                                                       //
        var email = $('[name=email]').val();                           // 6
        var password = $('[name=password]').val();                     // 7
                                                                       //
        Meteor.loginWithPassword(email, password, function (error) {   // 9
            if (error) {                                               // 10
                console.log(error.reason);                             // 11
            } else {                                                   //
                Router.go("home");                                     // 15
            }                                                          //
        });                                                            //
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
