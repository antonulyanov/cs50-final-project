Groups = new Mongo.Collection('groups');

Groups.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fieldNames, modifier) {
        return true;
    }

})
