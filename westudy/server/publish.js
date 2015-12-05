Meteor.publish('groups', function() {
  return Groups.find();
});

Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('post', function(post_id) {
  return Posts.findOne({_id: post_id});
});

Meteor.publish('user_posts', function() {
  return Posts.find({author: Meteor.userId()});
});

Meteor.publish('user_groups', function() {
    return Groups.find({members: this.userId});
});
