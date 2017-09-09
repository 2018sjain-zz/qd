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
   function registerUser() {
    $.ajax({
      type: 'POST',
      url: 'https://auth.bazooka69.hasura-app.io/signup',
      contentType: 'application/json',
      data: {
        username: $(".register-form #username").val(),
        password: $(".register-form #password").val()
      },
      dataType: 'json'
  }).done(function(data) {
      console.log(data)
      transition()
    });
  };
});

$('#loginButton').click(function() {
  //Login to account
  window.location.href = "nearby.html";
});
