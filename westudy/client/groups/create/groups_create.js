function group_creation_error(error) {
    $(".alert-danger").show();
    $(".alert-danger").html(error);
};

Template.groups_create.events({
    'submit form': function(){

        // prevents form from reloading the page by default
        event.preventDefault();

        // save the registration fields
        var course = $('[id=course]').val();
        var location = $('[id=location]').val();
        var user_id = Meteor.userId();
        var timestamp = new Date();

        // validation
        if (course === "") {
            group_creation_error('Please list the subject for your group');
            return;
        }

        // add the account
        Groups.insert({
            timestamp: timestamp,
            course: course,
            location: location,
            members: [user_id]
        }, function(error, id) {
            if(error){
                group_creation_error(error.reason);
            }
            else {
                Router.go('groups_view', {group_id: id}); // Redirect user if registration succeeds
            }
        });

    }
});
