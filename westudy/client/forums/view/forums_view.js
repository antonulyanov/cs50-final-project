function post_view_error(error) {
    $(".alert-success").hide();
    $(".alert-danger").show();
    $(".alert-danger").html(error);
}

function post_view_success(error) {
    $(".alert-danger").hide();
    $(".alert-success").show();
    $(".alert-success").html(error);
}

Template.forums_view.onCreated(function () {

    post = this.data.post;

    if (!post)
    {
        Router.go('notfound');
    }

    post.tags = post.tags.join(" ");

});

Template.forums_view.rendered = function() {

    if (post.author === Meteor.userId()) {
        $("#delete").show();
        $("#delete").prop('disabled', false);
    }

};

Template.forums_view.events({
    'submit form': function() {

        // prevents form from reloading the page by default
        event.preventDefault();

        var reply = {
            timestamp: new Date(),
            author: Meteor.userId(),
            content: $('#reply').val()
        };

        if (reply.content === "")
        {
            post_view_error("Please fill in the required fields.");
            return;
        }

        Posts.update({"_id": post._id}, {$push: {replies: reply} });
        post_view_success("Reply posted successfully.");
        $('#reply').val("");

    },
    'click #delete': function() {

        // prevents form from reloading the page by default
        event.preventDefault();

        Posts.remove({"_id": post._id});
        Router.go("forums");

    }
});

Template.forums_view.helpers({
    formatDateTime : function(timestamp) {
        return timestamp.toLocaleDateString('en-US') + " @ " +
            timestamp.toLocaleTimeString('en-US');
    }
});