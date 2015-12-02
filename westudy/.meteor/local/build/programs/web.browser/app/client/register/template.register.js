(function(){
Template.__checkName("register");
Template["register"] = new Template("Template.register", (function() {
  var view = this;
  return HTML.Raw('<form>\n        <p>Email: <input type="email" name="email"></p>\n        <p>Password: <input type="password" name="password"></p>\n        <p><input type="submit" value="Register"></p>\n    </form>');
}));

}).call(this);
