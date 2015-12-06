Template.home.helpers({
    user_groups : function() {
        return getUserGroups();
    }
});

function getUserGroups() {
    // get all groups with user as a member
    var user_groups = Groups.find().fetch().reverse();
    var user_owned = [];
    var user_in = [];

    // sort user groups into owned by user not owned by user
    user_groups.forEach(function(group) {
        if (group.members[0] == Meteor.userId()) {
            user_owned.push(group);
        }
        else {
            user_in.push(group);
        }
    });

    return {owned : user_owned, in : user_in};
}
