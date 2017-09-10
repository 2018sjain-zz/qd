hasura.setProject('bazooka69');

function logout() {
    hasura.auth.logout(function onsuccess(){
        window.location.href = "index.html"
    });
}

$(document).ready(function() {
    if(hasura.user.email == null)
    {
        $("#username").text(hasura.user.username)
        $("#email").text(hasura.user.username + '@gmail.com')
    }
    else {
        $("#username").text(hasura.user.username)
        $("#email").text(hasura.user.email)
    }
});
