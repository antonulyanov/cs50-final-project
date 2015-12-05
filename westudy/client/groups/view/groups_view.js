function group_edit_error(error) {
    $(".alert-success").hide();
    $(".alert-danger").show();
    $(".alert-danger").html(error);
}

function group_edit_success(error) {
    $(".alert-danger").hide();
    $(".alert-success").show();
    $(".alert-success").html(error);
}

Template.groups_view.onCreated(function () {

    group = this.data.group;

    if (!group)
    {
        Router.go('notfound');
    }

});

Template.groups_view.rendered = function() {

    if (group.members[0] === Meteor.userId()) {
        $("#current_member").show();
        $("#group_information input").prop("disabled", false);
        $("#group_information textarea").prop("disabled", false);
        $("#edit_group").prop('disabled', false);
        $("#delete_group").prop('disabled', false);
    }
    else if ($.inArray(Meteor.userId(), group.members) !== -1)
    {
        $("#current_member").show();
        $("#leave_group").prop('disabled', false);
    }
    else {
        $("#prospective_member").show();
        $("#join_group").prop('disabled', false);
    }

};

Template.groups_view.events({
    'click #join_group': function() {

        // prevents form from reloading the page by default
        event.preventDefault();

        Groups.update({"_id": group._id}, {$push: {members: Meteor.userId()}});
        Router.go("groups");

    },
    'click #leave_group': function() {

        // prevents form from reloading the page by default
        event.preventDefault();

        Groups.update({"_id": group._id}, {$pull: {members: Meteor.userId()}});
        Router.go("groups");

    },
    'click #edit_group': function() {

        // prevents form from reloading the page by default
        event.preventDefault();

        var name = $('#name').val();
        var course = $('#course').val();
        var location = $('#location').val();
        var description = $("#description").val();

        // validation
        if (course === "" || name === "" || location === "") {
            console.log("validation error");
            group_edit_error('Please fill in required fields.');
            return;
        }

        Groups.update({"_id": group._id}, { $set: {name: name, course: course, location: location, description: description} });
        group_edit_success("Group updated successfully.");

    },
    'click #delete_group': function() {

        // prevents form from reloading the page by default
        event.preventDefault();

        Groups.remove({"_id": group._id});
        Router.go("groups");

    }
});
