function onLoad() {
  document.addEventListener("deviceready", onDeviceReady, true);
}

function goToVenue() {
  window.location = "venue.html";
}

function transition() {
  $('form').animate({
    height: "toggle",
    opacity: "toggle"
  }, "slow");
}

$('.message a').click(function() {
  transition()
});

$('#registerButton').click(function() {
  $.ajax({
    type: 'POST',
    url: 'https://auth.bazooka69.hasura-app.io/signup',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer vcd0bp4a8s9lqlcppyiokodg9ber69dx'
    },
    data: {
      username: $(".register-form #username").val(),
      password: $(".register-form #password").val()
    }
  }).done(function(data) {
    console.log(data)
    transition()
  });
});

$('#loginButton').click(function() {
  //Login to account
  event.preventDefault();
});
