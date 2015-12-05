Template.forums.onCreated(function() {
    var posts = this.data.posts;

});

Template.forums.helpers({
    formatDateTime : function(timestamp) {
        return timestamp.toLocaleDateString('en-US') + " @ " +
            timestamp.toLocaleTimeString('en-US');
    }
});
