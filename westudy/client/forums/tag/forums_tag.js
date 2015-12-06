Template.forums_tag.helpers({
    posts : function() {
        return getPosts();
    }
});

function getPosts() {
    return Posts.find({},{sort : {timestamp : -1}}).fetch();
}
