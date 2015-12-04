function group_creation_error(error) {
    $(".alert-danger").show();
    $(".alert-danger").html(error);
}

Template.groups_create.events({
    'submit form': function(){

        // prevents form from reloading the page by default
        event.preventDefault();

        // save the registration fields
        var name = $('#name').val();
        var course = $('#course').val();
        var location = $('#location').val();
        var description = $("#description").val();
        var user_id = Meteor.userId();
        var timestamp = new Date();

        // validation
        if (course === "" || name === "" || location === "") {
            group_creation_error('Please fill in required fields.');
            return;
        }

        // add the account
        Groups.insert({
            timestamp: timestamp,
            name: name,
            course: course,
            location: location,
            description: description,
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
