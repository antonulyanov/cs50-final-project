// highlight proper tab on sidebar
Router.onAfterAction(function() {
    var currentPage = Router.current().route.getName();

    $(".active").removeClass("active");
    $("#" + currentPage).addClass("active");

});

Template.sidebar.events({

    // handle logouts
    'click .logout': function(event){

        event.preventDefault();

        Meteor.logout();

        Router.go('login');
    }

});
