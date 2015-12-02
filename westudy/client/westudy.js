// Router Configuration

Router.configure({
    layoutTemplate: 'home'
});

Router.route('/', {
    name: 'home',
    template: 'home'
});
