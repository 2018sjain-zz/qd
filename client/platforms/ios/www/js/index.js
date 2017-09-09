function transition() {
  $('form').animate({
    height: "toggle",
    opacity: "toggle"
  }, "slow");
}

$('.message a').click(function() {
  transition()
});

$('#createButton').click(function() {
  function registerUser() {
    $.ajax({
      url: 'https://auth.bazooka69.hasura-app.io/signup',
      type: 'POST',
      contentType: 'application/json',
      data: {
        username: $(".register-form #username").text,
        password: $(".register-form #password").text
      },
      dataType: 'json'
    });
    transition()
  };
});

$('#loginButton').click(function() {
  //Login to account
  window.location.href = "nearby.html";
});
