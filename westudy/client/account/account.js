var account_error = function(error) {
    $("#account_error").show();
    $("#account_error").html(error);
};

Template.register.events({
    'submit #account_change': function(){

        // prevents form from reloading the page by default
        event.preventDefault();

        // save the registration fields
        var first_name = $('[id=first_name]').val();
        var last_name = $('[id=last_name]').val();

        // validation
        if (first_name === "" || last_name === "") {
                account_error('All fields are required.');
                return;
        }

        Meteor.user.profile.first_name = first_name;
        Meteor.user.profile.last_name = last_name;

        });

    }
});
