Template.forums.onCreated(function() {
    posts = Posts.find().fetch().reverse();

});

Template.forums.helpers({
    posts : function() {
        return posts;
    }
});
