var groups;

Template.groups.onCreated(function() {
    groups = Groups.find().fetch().reverse();
});

Template.groups.helpers({
    formatDateTime : function(timestamp) {
        return timestamp.toLocaleDateString('en-US') + " @ " +
            timestamp.toLocaleTimeString('en-US');
    },
    groups : function() {
        return groups;
    }
});
