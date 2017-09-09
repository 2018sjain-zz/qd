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
    //Create account
    transition()
});

$('#loginButton').click(function() {
    //Login to account
});
