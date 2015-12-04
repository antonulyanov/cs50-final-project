Template.groups.onCreated(function() {
    var groups = this.data.groups;




});

Template.groups.helpers({
    formatDateTime : function(timestamp) {
        return timestamp.toLocaleDateString('en-US') + " @ " +
            timestamp.toLocaleTimeString('en-US');
    }
});
