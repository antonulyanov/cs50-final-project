// Router Configuration

Router.configure({
    layoutTemplate: 'layout',
});

Router.route('/', {
    name: 'home',
    template: 'home',
    data: {
        title: "WeStudy",
        secure: true
    },
    onBeforeAction: function() {
        if(Meteor.userId()){
            this.next();
        } else {
            Router.go("login");
        }
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
    onBeforeAction: function() {
        if(Meteor.userId()){
            this.next();
        } else {
            Router.go("login");
        }
    }
});

Router.route('/notfound', {
    name: 'notfound',
    template: 'notfound',
    data: {
        title: "Page Not Found",
        secure: false
    }
});

Router.route('/(.*)', {
    action: function() {
        Router.go('notfound');
    }
});
