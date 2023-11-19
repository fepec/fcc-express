let express = require('express');
let app = express();


console.log("Hello World")

// There should be a app.listen(port) command here. 
// However, because its fcc, that is in server.js

app.get('/', function(req,res) {
    res.send('Hello Express');
})
































 module.exports = app;
