//imports
var express = require("express");
var app = express();
var server = app.listen(3000);
console.log('Listening on 3000')
console.log('http://localhost:3000/')

app.get("/", function(request, response) {
    response.sendFile('login.html', {
        root: __dirname
    })
})

app.use('/', express.static(__dirname))
