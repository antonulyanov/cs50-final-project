// Router Configuration

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/login', {
    name: 'login',
    template: 'login',
    data: function() {
        return {title: "Login"};
    }
});

Router.route('/', {
    name: 'home',
    template: 'home',
    data: function() {
        return {title: "WeStudy"};
    }
});

Router.route('/register', {
    name: 'register',
    template: 'register',
    data: function() {
        return {title: "Register"};
    }
});

Router.route('/account', {
    name: 'account',
    template: 'account',
    data: function() {
        return {title: "Account"};
    }
});

Router.route('/notfound', {
    name: 'notfound',
    template: 'notfound',
    data: function() {
        return {title: "Page Not Found"};
    }
});

Router.route('/about', {
    name: 'about',
    template: 'about',
    data: function() {
        return {title: "About"};
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
<<<<<<< HEAD
    data: function(){
        return {title: "Groups", groups: Groups.find().fetch()};
=======
    data: function() {
        return {title: "Groups"};
>>>>>>> f619169e66764f91ac8e5086d7c5d9368198ec92
    }
});

Router.route('/groups/create', {
    name: 'groups_create',
    template: 'groups_create',
    data: function() {
        return {title: "Create A Group"};
    }
});

Router.route('/groups/view/:group_id', {
    name: 'groups_view',
    template: 'groups_view',
    data: function() {
        var group = Groups.findOne({_id: this.params.group_id});
        return {title: "Group Details", group: group};
    }
});

Router.route('/(.*)', {
    action: function() {
        Router.go('notfound');
    }
});

Router.onBeforeAction(security_check, {
  only: ['home', 'account', 'groups', 'groups_create', 'groups_view']
});

function security_check() {
    if (Meteor.userId()) {
        this.next();
    }
    else {
        Router.go('login');
    }
}
