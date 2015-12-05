function post_creation_error(error) {
    $(".alert-danger").show();
    $(".alert-danger").html(error);
}

Template.forums_create.events({
    'submit form': function(){

        // prevents form from reloading the page by default
        event.preventDefault();

        // save the registration fields
        var title = $('#title').val();
        var content = $('#content').val();
        var timestamp = new Date();
        var tags = $('#tags').val().split(" ").map(function(tag) {return tag.toLowerCase();} );
        var replies = [];

        // validation
        if (title === "" || content === "") {
            post_creation_error('All fields are required');
            return;
        }

        // add the account
        Posts.insert({
            timestamp: timestamp,
            title: title,
            content: content,
            tags: tags,
            replies: replies,
            author: Meteor.userId()

        }, function(error, id) {
            if(error){
                post_creation_error(error.reason);
            }
            else {
                Router.go('forums_view', {post_id: id});
            }
        });

    }
});
