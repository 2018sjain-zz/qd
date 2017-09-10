function onLoad() {
  document.addEventListener("deviceready", onDeviceReady, true);
}

function goToVenue() {
  if(hasura.user.token != null)
  {
    hasura.auth.logout()
  }
  hasura.setUsername($(".login-form #username2").val());
  hasura.auth.login($(".login-form #password2").val(),function onSuccess(){
    console.log("success!")
    window.location = "nearby.html";
  },function onError(error){
    console.log("error: ",error)
  });

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

$('#registerButton').click(function(e) {
  e.preventDefault();
  event.preventDefault();
  function register() {
    hasura.setUsername($(".register-form #username").val());
    hasura.auth.signup(
      $(".register-form #password").val(),
      function onSuccess() {
        console.log("success!")
        hasura.user
        console.log(hasura.user)
        document.cookie = "username=" + hasura.user.username + ";id=" +  hasura.user.id + ";token=" + hasura.user.token;
        transition()

        hasura.data.query({
          type: 'insert',
          args: {
            "table": 'qd_users',
            "objects": [
              {"hasura_id":hasura.user.id, "username":hasura.user.username}
            ]
          }},
          (data) => { console.log(data);     window.location = "nearby.html"},
          (error) => { console.log(error);
        });
    });
  }

  if (hasura.user.token) {
    hasura.auth.logout(register);
  } else {
    register();
  }

});

$('#loginButton').click(function() {
  event.preventDefault();
});
