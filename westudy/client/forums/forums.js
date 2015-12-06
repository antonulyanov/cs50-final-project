 Template.forums.helpers({
    posts : function() {
        return getPosts();
    },
    tags : function() {
        var tags = [];

        getPosts().forEach(function(post) {
            post.tags.forEach(function(tag) {
                tags.push(tag);
            });
        });

        return $.unique(tags).sort();
    }
});

function getPosts() {
    return Posts.find({},{sort: {timestamp : -1}}).fetch();
}
