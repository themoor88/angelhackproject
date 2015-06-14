

$(document).ready(function(){
  var search_url = 'http://api.giphy.com/v1/gifs/search?q=',
         api_key = '&api_key=dc6zaTOxFJmzC';


  $('button').click(function() {
      var input = $('#gif').val(),
          gifName = encodeURIComponent(input);
      $.ajax({
          url: search_url + gifName + api_key,
          dataType: 'json',
          success: function(json) {
            $('body').append('</hr><img src="' + json.data[0].images.fixed_height.url + '"width=250px height=250px>');
            // $.each(json.data, function(index, element) {
            //   $('body').append('</hr><img src="' + element.images.fixed_height.url + '"width=250px height=250px>');
            // });
          }
      });
  });
});

function getGif ( textInput ) {
  var search_url = 'http://api.giphy.com/v1/gifs/search?q=',
         api_key = '&api_key=dc6zaTOxFJmzC';

   var input = $('#gif').val(),
          gifName = encodeURIComponent(textInput);

  /*
  $.ajax({
          url: search_url + gifName + api_key,
          dataType: 'json',
          success: function(json) {
            $('body').append('</hr><img src="' + json.data[0].images.fixed_height.url + '"width=250px height=250px>');
            // $.each(json.data, function(index, element) {
            //   $('body').append('</hr><img src="' + element.images.fixed_height.url + '"width=250px height=250px>');
            // });
          }
      });*/
}