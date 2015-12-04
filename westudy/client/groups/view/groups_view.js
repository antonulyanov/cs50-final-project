Template.groups_view.onCreated(function () {

    group = this.data.group;

    if (!group)
    {
        Router.go('notfound');
    }
});

Template.groups_view.events({
    'submit form': function(){

        // prevents form from reloading the page by default
        event.preventDefault();

        Groups.update({"_id": group._id}, {$push: {members: Meteor.userId()}});
        Router.go("groups");

    }
});
