Template.forums.helpers({
    posts : function() {
        return getPosts();
    }
});

function getPosts() {
    return Posts.find().fetch().reverse();
}
