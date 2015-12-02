(function(){
Template.__checkName("layout");
Template["layout"] = new Template("Template.layout", (function() {
  var view = this;
  return HTML.DIV({
    "class": "container"
  }, "\n        ", HTML.H1(Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-2"
  }, "\n                ", Spacebars.include(view.lookupTemplate("sidebar")), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-10"
  }, "\n                ", Spacebars.include(view.lookupTemplate("yield")), "\n            "), "\n        "), "\n\n        ", Spacebars.include(view.lookupTemplate("footer")), "\n    ");
}));

}).call(this);
