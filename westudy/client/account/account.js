Template.account.events({
    // detect account form submission event
    'submit #account_change': function() {

        // prevent page from reloading
        event.preventDefault();

        // get data from form fields
        var data = {
            first_name: $('[id=first_name]').val(),
            last_name: $('[id=last_name]').val()
        };

        // validate data
        if (data.first_name === "" || data.last_name === "") {
                // show error and return on failed validation
                account_error('All fields are required.');
                return;
        }

        // on successful validation, update the user's information
        Meteor.users.update(Meteor.userId(), {$set: {profile: data}});

        // display success banner
        account_success("Profile updated successfully.");

    },

    // detect password form submit event
    'submit #password_change': function() {

        // prevents form from reloading the page by default
        event.preventDefault();

        // save the registration fields
        var current_password = $('[id=current_password]').val();
        var new_password = $('[id=new_password]').val();
        var new_password_confirmation = $('[id=new_password_confirmation]').val();

        // validation
        if (current_password === "" || new_password === "" || new_password_confirmation === "") {
            account_error('All fields are required.');
            return;
        }

        else if (new_password !== new_password_confirmation) {
            account_error('The passwords you have entered do not match.');
            return;
        }

        Accounts.changePassword(current_password, new_password, function(error){
            if(error){
                account_error(error.reason);
            }

            else {
                account_success("Password changed successfully.");
            }
        });
    }
});

function account_error(error) {
    $(".alert-success").hide();
    $(".alert-danger").show();
    $(".alert-danger").html(error);
}

function account_success(error) {
    $(".alert-danger").hide();
    $(".alert-success").show();
    $(".alert-success").html(error);
}
