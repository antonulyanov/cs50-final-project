Groups = new Mongo.Collection('groups');

Groups.allow({
  insert: function (doc) {
    return true;
  }
})