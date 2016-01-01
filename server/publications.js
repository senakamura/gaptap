Meteor.publish('puns', function () {
  return Puns.find({});
});