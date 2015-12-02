(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/westudy.js                                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// Router Configuration                                                //
                                                                       //
Router.configure({                                                     // 3
    layoutTemplate: 'layout'                                           // 4
});                                                                    //
                                                                       //
Router.route('/', {                                                    // 7
    name: 'home',                                                      // 8
    template: 'home',                                                  // 9
    data: {                                                            // 10
        title: "WeStudy"                                               // 11
    }                                                                  //
});                                                                    //
                                                                       //
Router.route('/register', {                                            // 15
    name: 'register',                                                  // 16
    template: 'register',                                              // 17
    data: {                                                            // 18
        title: "Register"                                              // 19
    }                                                                  //
});                                                                    //
                                                                       //
Router.route('/login', {                                               // 23
    name: 'login',                                                     // 24
    template: 'login',                                                 // 25
    data: {                                                            // 26
        title: "Login"                                                 // 27
    }                                                                  //
});                                                                    //
                                                                       //
Router.route('/(.*)', {                                                // 31
    action: function () {                                              // 32
        Router.go('login');                                            // 33
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
