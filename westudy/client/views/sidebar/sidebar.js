// actions to be performed after router brings up page
Router.onAfterAction(function() {

    // highlight proper tab
    var currentPage = Router.current().route.getName();

    $(".active").removeClass("active");
    $("#" + currentPage).addClass("active");

    // hide/unhide things based on if user is logged in
    var loggedIn = $(".loggedIn");
    var loggedOut = $(".loggedOut");

    if (Meteor.userId() !== null) {
        loggedIn.removeClass("hidden");
        loggedOut.addClass("hidden");
    }
    else {
        loggedOut.removeClass("hidden");
        loggedIn.addClass("hidden");
    }

});

Template.sidebar.events({

    // handle logouts
    'click .logout': function(event){

        event.preventDefault();

        Meteor.logout();

        Router.go('login');
    }

});
