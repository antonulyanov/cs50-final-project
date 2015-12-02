// Router Configuration

Router.configure({
    layoutTemplate: 'layout',
});

Router.route('/', {
    name: 'home',
    template: 'home',
    data: {
        title: "WeStudy"
    }
});

Router.route('/register', {
    name: 'register',
    template: 'register',
    data: {
        title: "Register"
    }
});

Router.route('/login', {
    name: 'login',
    template: 'login',
    data: {
        title: "Login"
    }
});

Router.route('/(.*)', {
  action: function() {
    Router.go('login');
  }
});
