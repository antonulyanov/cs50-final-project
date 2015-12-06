Template.groups.helpers({
    groups : function() {
        return getGroups();
    }
});

function getGroups() {
    return Groups.find({},{sort : {timestamp : -1}}).fetch();
}
