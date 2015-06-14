Meteor.startup(function() {

  Meteor.users.remove({});
  Accounts.createUser({
    username: "scotchio",
    email: "scotch@example.com",
    password: "dummypassword"
  });

  Factory.define('message', Messages, {
    text: function() {
      return Fake.sentence();
    },
    user: Meteor.users.findOne()._id,
    timestamp: Date.now()
  });

  Messages.remove({});

  if (Messages.find({}).count() === 0) {
    _(5).times(function(n) {
      Factory.create('message');
    });
  }
});