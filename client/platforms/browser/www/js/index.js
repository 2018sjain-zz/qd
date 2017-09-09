function onLoad() {
  document.addEventListener("deviceready", onDeviceReady, true);
}

function goToVenue() {
  /*$.ajax({
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
  });*/
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
  // $.ajax({
  //   type: 'POST',
  //   url: 'https://auth.bazooka69.hasura-app.io/signup',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer vcd0bp4a8s9lqlcppyiokodg9ber69dx'
  //   },
  //   data: {
  //     username: $(".register-form #username").val(),
  //     password: $(".register-form #password").val()
  //   }
  // }).done(function(data) {
  //   console.log(data)
  //   transition()
  // });
  hasura.user
  hasura.setUsername($(".register-form #username").val());
  hasura.auth.login($(".register-form #password").val(), onSuccess, onError);
  hasura.user
  console.log(hasura.user)
  transition()
});

$('#loginButton').click(function() {
  event.preventDefault();
});
