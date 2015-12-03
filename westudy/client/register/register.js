var registration_error = function(error) {
    $("#registration_error").show();
    $("#registration_error").html(error);
};

Template.register.events({
    'submit form': function(){

        event.preventDefault();

        var first_name = $('[id=first_name]').val();
        var last_name = $('[id=last_name]').val();
        var email = $('[id=email]').val();
        var password = $('[id=password]').val();
        var password_confirmation = $('[id=password_confirmation]').val();

        if (password !== password_confirmation)
        {
            registration_error('The passwords you have entered don\'t match.');
            return;
        }

        Accounts.createUser({
            email: email,
            password: password,
            profile: {
                first_name: first_name,
                last_name: last_name
            }
        }, function(error){
            if(error){
                registration_error(error.reason);
            }

            else {
                Router.go("home"); // Redirect user if registration succeeds
            }
        });

    }
});
