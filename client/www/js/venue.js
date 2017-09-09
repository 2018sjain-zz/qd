function submitVenue() {
  $('#venueButton').click(function() {
    function addVenue() {
      $.ajax({
        type: 'POST',
        url: 'https://auth.bazooka69.hasura-app.io/query',
        contentType: 'application/json',
        data: {
          username: $(".venue-form #venue_name").val(),
          password: $(".venue-form #password").val()
        },
        dataType: 'json'
      }).done(function(data) {
        console.log(data)
        transition()
      });
    };
  });
}
