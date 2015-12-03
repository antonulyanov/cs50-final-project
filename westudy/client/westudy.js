// Router Configuration

Router.configure({
    layoutTemplate: 'layout',
});

Router.route('/login', {
    name: 'login',
    template: 'login',
    data: {
        title: "Login"
    }
});

Router.route('/', {
    name: 'home',
    template: 'home',
    data: {
        title: "WeStudy"
    },
    onBeforeAction: security_check(this)
});

Router.route('/register', {
    name: 'register',
    template: 'register',
    data: {
        title: "Register"
    }
});

Router.route('/account', {
    name: 'account',
    template: 'account',
    data: {
        title: "Account"
    },
    onBeforeAction: security_check(this)
});

Router.route('/notfound', {
    name: 'notfound',
    template: 'notfound',
    data: {
        title: "Page Not Found"
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

function security_check(route) {
    if (Meteor.userId()) {
        route.next();
    }
    else {
        Router.go('login');
    }
};
