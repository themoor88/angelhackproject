Template.footer.events({
  'keypress input': function(e) {
    var inputVal = $('.input-box_text').val();

    var search_url = 'http://api.giphy.com/v1/gifs/search?q=',
         api_key = '&api_key=dc6zaTOxFJmzC';

    var gifName = encodeURIComponent(inputVal);


    if ( !!inputVal ) {
        var charCode = (typeof e.which == "number") ? e.which : e.keycode;

        if ( charCode == 13 ) {

          e.stopPropagation();

          $('.input-box_text').val("");

          $.ajax({
            url: search_url + gifName + api_key,

            dataType: 'json',

            success: function(json) {
              Meteor.call('newMessage', {
                text: json.data[0].images.fixed_height.url,
                channel: Session.get('channel')
              });
            }
          });

          return false;
        }
    }

  }
});
