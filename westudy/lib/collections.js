Groups = new Mongo.Collection('groups');
Posts = new Mongo.Collection('posts');

Groups.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fieldNames, modifier) {
        return true;
    },
    remove: function (userId, doc) {

        if (doc.members[0] == userId) {
            return true;
        }
        else {
            return false;
        }
    }

});

Posts.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fieldNames, modifier) {
        return true;
    },
    remove: function (userId, doc) {

        if (doc.members[0] == userId) {
            return true;
        }
        else {
            return false;
        }
    }

});
