Template.groups.helpers({
    groups : function() {
        return getGroups();
    }
});

function getGroups() {
    return Groups.find().fetch().reverse();
}
