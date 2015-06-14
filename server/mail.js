Meteor.startup(function() {
  smtp = {
    username: 'wjkagzi@gmail.com',
    password: 'GbfViyKjxMhop-AVP7Hzkw',
    server: 'smtp.mandrillapp.com',
    port: 587
  };

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});