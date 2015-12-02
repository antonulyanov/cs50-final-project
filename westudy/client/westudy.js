// Router Configuration

Router.configure({
    layoutTemplate: 'layout',
});

Router.route('/', {
    name: 'home',
    template: 'home',
    data: {
        title: "penis in my ass"
    }
});

Router.route('/register', {
    name: 'register',
    template: 'register'
});

Router.route('/login', {
    name: 'login',
    template: 'login'
});

Router.route('/(.*)', {
  action: function() {
    Router.go('login');
  }
});
