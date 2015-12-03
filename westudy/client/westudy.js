var security_check = function() {
    if (!Meteor.userId()) {
        Router.go('login');
    }
    else {
        this.next();
    }
};

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
    },
    onBeforeAction: security_check()

});

Router.route('/notfound', {
    name: 'notfound',
    template: 'notfound',
    data: {
        title: "Page Not Found",
        secure: false
    }
});

Router.route('/about', {
    name: 'about',
    template: 'about',
    data: {
        title: "About",
        secure: false
    }
});

Router.route('/(.*)', {
    action: function() {
        Router.go('notfound');
    }
});
