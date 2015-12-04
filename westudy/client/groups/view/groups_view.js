Template.groups_view.onCreated(function () {

    group = this.data.group;

    if (!group)
    {
        Router.go('notfound');
    }

});

Template.groups_view.rendered = function() {

    if (group.members[0] === Meteor.userId()) {
        $("#owner_options").show();
    }
    else if ($.inArray(Meteor.userId(), group.members) === -1)
    {
        $("#join_group").show();
    }
    else {
        $("#leave_group").show();
    }

};

Template.groups_view.events({
    'submit #join_group': function(){

        // prevents form from reloading the page by default
        event.preventDefault();

        Groups.update({"_id": group._id}, {$push: {members: Meteor.userId()}});
        Router.go("groups");

    },
    'submit #leave_group': function(){

        // prevents form from reloading the page by default
        event.preventDefault();

        Groups.update({"_id": group._id}, {$pull: {members: Meteor.userId()}});
        Router.go("groups");

    },
    'submit #delete_group': function(){

        // prevents form from reloading the page by default
        event.preventDefault();

        Groups.remove({"_id": group._id});
        Router.go("groups");

    }
});
