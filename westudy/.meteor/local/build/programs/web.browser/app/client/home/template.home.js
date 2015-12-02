(function(){
Template.__checkName("home");
Template["home"] = new Template("Template.home", (function() {
  var view = this;
  return [ HTML.Raw("<p>\n        Home page placeholder\n    </p>\n\n    "), Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n        ", HTML.A({
      href: "#",
      "class": "logout"
    }, "Logout"), "\n    " ];
  }) ];
}));

}).call(this);
