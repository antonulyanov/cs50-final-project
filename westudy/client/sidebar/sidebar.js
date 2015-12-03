Template.sidebar.rendered = function() {

    var currentPage = Router.current().route.getName();

    $("#" + currentPage).addClass("active");

};


Template.sidebar.events({
    "click .nav a": function (event, template) {
        // set clicked on tab to be active
        console.log("click");

        $(".active").removeClass("active");
        $(event.target).parent().addClass("active");
    }
});
