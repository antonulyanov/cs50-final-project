Template.forums.onCreated(function() {
    posts = Posts.find().fetch().reverse();

});

Template.forums.helpers({
    formatDateTime : function(timestamp) {
        return timestamp.toLocaleDateString('en-US') + " @ " +
            timestamp.toLocaleTimeString('en-US');
    },
    posts : function() {
        return posts;
    }
});
