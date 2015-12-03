var login_error = function(error) {
    $("#login_error").show();
    $("#login_error").html(error);
};

Template.login.events({
    'submit form': function(event){

        event.preventDefault();

        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

        var validEmail = /^[a-zA-Z0-9_\.\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9\.\-]+$/;

        if (!validEmail.test(email)) {
            login_error('Email must match the following format: email@domain.com');
            return;
        }
        else if (email === "" || password === "") {
            login_error('Please enter values for both the email and password fields.');
            return;
        }

        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                login_error(error.reason);
            }

            else {
                Router.go("home");
            }
        });
    }
});
