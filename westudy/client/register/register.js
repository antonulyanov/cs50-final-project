var registration_error = function(error) {
    $("#registration_error").show();
    $("#registration_error").html(error);
};

Template.register.events({
    'submit form': function(){

        // prevents form from reloading the page by default
        event.preventDefault();

        // save the registration fields
        var first_name = $('[id=first_name]').val();
        var last_name = $('[id=last_name]').val();
        var email = $('[id=email]').val();
        var password = $('[id=password]').val();
        var password_confirmation = $('[id=password_confirmation]').val();

        // validation
        if (first_name === "" || last_name === "" || email === "" ||
            password === "" || password_confirmation === "") {
                registration_error('All fields are required.');
                return;
            }
        else if (!/[\w\.]+@\w+\.\w+/.test(email)) {
            registration_error('Email must match the following format: email@domain.com');
            return;
        }
        else if (password !== password_confirmation) {
            registration_error('The passwords you have entered don\'t match.');
            return;
        }

        // add the account
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
