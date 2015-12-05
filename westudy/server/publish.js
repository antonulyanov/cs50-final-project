Meteor.publish('groups', function() {
  return Groups.find();
});

Meteor.publish('user_groups', function() {
    return Groups.find({members: this.userId});
});
