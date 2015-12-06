UI.registerHelper('formatDateTime', function(timestamp) {
    return timestamp.toLocaleDateString('en-US') + " @ " +
        timestamp.toLocaleTimeString('en-US');
});
