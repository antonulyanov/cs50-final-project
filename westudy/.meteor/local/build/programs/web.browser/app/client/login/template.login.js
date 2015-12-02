(function(){
Template.__checkName("login");
Template["login"] = new Template("Template.login", (function() {
  var view = this;
  return HTML.Raw('<form class="login">\n        <p>Email: <input type="email" name="email" required=""></p>\n        <p>Password: <input type="password" name="password" required=""></p>\n        <p><input type="submit" value="Login"></p>\n    </form>');
}));

}).call(this);
