// Router Configuration

Router.configure({
    layoutTemplate: 'layout',
});

Router.route('/', {
    name: 'home',
    template: 'home'
});

Router.route('/register', {
    name: 'register',
    template: 'register'
});
