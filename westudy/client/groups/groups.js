var groups;

Template.groups.onCreated(function() {
    groups = Groups.find().fetch().reverse();
});

Template.groups.helpers({
    groups : function() {
        return groups;
    }
});
