// Router Configuration

Router.configure({
    layoutTemplate: 'layout',
});

Router.route('/', {
    name: 'home',
    template: 'home',
    data: {
        title: "WeStudy",
        secure: false
    }
});

Router.route('/register', {
    name: 'register',
    template: 'register',
    data: {
        title: "Register",
        secure: false
    }
});

Router.route('/login', {
    name: 'login',
    template: 'login',
    data: {
        title: "Login",
        secure: false
    }
});

Router.route('/account', {
    name: 'account',
    template: 'account',
    data: {
        title: "Account",
        secure: true
    }
});

Router.route('/(.*)', {
  action: function() {
    Router.go('login');
  }
});
