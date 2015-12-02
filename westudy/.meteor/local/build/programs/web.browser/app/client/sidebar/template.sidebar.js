(function(){
Template.__checkName("sidebar");
Template["sidebar"] = new Template("Template.sidebar", (function() {
  var view = this;
  return HTML.DIV({
    id: "sidebar"
  }, "\n        ", HTML.UL({
    "class": "nav nav-list"
  }, "\n            ", HTML.Raw('<li class="nav-header">WeStudy</li>'), "\n            ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "home"
      }));
    }
  }, "Home")), "\n            ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "login"
      }));
    }
  }, "Login")), "\n            ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "register"
      }));
    }
  }, "Register")), "\n        "), "\n    ");
}));

}).call(this);
