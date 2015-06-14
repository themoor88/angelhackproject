Meteor.startup(function() {

  Meteor.users.remove({});
  Accounts.createUser({
    username: "tupacmo",
    email: "wjkagzi@gmail.com",
    password: "password"
  });



  Messages.remove({});

  Channels.remove({});
  Channels.insert({
    name: "general"
  });
  Channels.insert({
    name: "random"
  });
});