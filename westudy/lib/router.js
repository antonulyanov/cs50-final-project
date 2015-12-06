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
    },
    waitOn : function() {
        return Meteor.subscribe('user_groups');
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

Router.route('/about/documentation', {
    name: 'documentation',
    template: 'documentation',
    data: function() {
        return {title: "Documentation"};
    }
});

Router.route('/about/design', {
    name: 'design',
    template: 'design',
    data: function() {
        return {title: "Design"};
    }
});

Router.route('/forums', {
    name: 'forums',
    template: 'forums',
    waitOn : function() {
        return Meteor.subscribe('posts');
    },
    data: function(){
        return {title: "Forums"};

    }
});

Router.route('/forums/create', {
    name: 'forums_create',
    template: 'forums_create',
    data: function() {
        return {title: "New Post"};
    }
});

Router.route('/forums/view/:post_id', {
    name: 'forums_view',
    template: 'forums_view',
    waitOn : function() {
        return Meteor.subscribe('post', this.params.post_id);
    },
    data: function() {
        return {title: "View Post"};
    }
});

Router.route('/groups', {
    name: 'groups',
    template: 'groups',
    waitOn : function() {
        return Meteor.subscribe('groups');
    }
});

Router.route('/groups/create', {
    name: 'groups_create',
    template: 'groups_create',
    data: function() {
        return {title: "New Group"};
    }
});

Router.route('/groups/view/:group_id', {
    name: 'groups_view',
    template: 'groups_view',
    waitOn : function() {
        return Meteor.subscribe('group',this.params.group_id);
    },
    data: function() {
        return {title: "Group Details"};
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
