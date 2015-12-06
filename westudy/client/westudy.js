UI.registerHelper('formatDateTime', function(timestamp) {
    return timestamp.toLocaleDateString('en-US') + " @ " +
        timestamp.toLocaleTimeString('en-US');
});

UI.registerHelper('getUserName', function(user_id) {
    var user = Meteor.users.findOne({_id : user_id});

    return user.profile.first_name + " " + user.profile.last_name;
});
