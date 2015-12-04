// Router Configuration

Router.configure({
    layoutTemplate: 'layout'
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
    }
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
    }
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
        title: "About"
    }
});

Router.route('/forums', {
    action: function() {
        Router.go('notfound');
    }
});

Router.route('/groups', {
    name: 'groups',
    template: 'groups',
    data: {
        title: "Groups"
    }
});

Router.route('/groups/create', {
    name: 'groups_create',
    template: 'groups_create',
    data: {
        title: "Create Group"
    }
});

Router.route('/(.*)', {
    action: function() {
        Router.go('notfound');
    }
});

Router.onBeforeAction(security_check, {
  only: ['home', 'account', 'groups', 'groups_create']
});

function security_check() {
    if (Meteor.userId()) {
        this.next();
    }
    else {
        Router.go('login');
    }
}
