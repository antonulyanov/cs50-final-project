Meteor.publish('groups', function() {
  return Groups.find();
});

Meteor.publish('group', function(group_id) {
  return Groups.find({_id : group_id});
});

Meteor.publish('user_groups', function() {
    return Groups.find({members: this.userId});
});


Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('post', function(post_id) {
  return Posts.find({_id: post_id});
});

Meteor.publish('user_posts', function() {
  return Posts.find({author: this.userId});
});
