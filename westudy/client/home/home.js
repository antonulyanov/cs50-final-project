var user_in = [];
var user_owned = [];

Template.home.created = function () {

    // get all groups with user as a member
    var user_groups = Groups.find().fetch().reverse();
    console.log(user_groups);

    // sort user groups into owned by user not owned by user
    user_groups.forEach(function(group) {
        if (group.members[0] == Meteor.userId()) {
            user_owned.push(group);
        }
        else {
            user_in.push(group);
        }
    });
};


Template.home.helpers({
    user_owned : function() {
        return user_owned;
    },
    user_in : function() {
        return user_in;
    },
    formatDateTime : function(timestamp) {
        return timestamp.toLocaleDateString('en-US') + " @ " +
            timestamp.toLocaleTimeString('en-US');
    }
});
