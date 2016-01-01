Puns.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});