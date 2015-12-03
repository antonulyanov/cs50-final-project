Template.sidebar.rendered = function() {

    var currentPage = Router.current().route.getName();

    $("#" + currentPage).addClass("active");

};


Template.sidebar.events({
    
    // set clicked on tab to be active
    "click .nav a": function (event) {

        console.log("click");
        $(".active").removeClass("active");
        $(event.target).parent().addClass("active");
    },

    // handle logouts
    'click .logout': function(event){

        event.preventDefault();

        Meteor.logout();

        Router.go('login');
    }

});
