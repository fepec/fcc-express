let express = require('express');
let app = express();


console.log("Hello World")

// There should be a app.listen(port) command here. 
// However, because its fcc, that is in server.js

// 2: Start an express server and serve a string

// app.get('/', function(req,res) {
//     res.send('Hello Express');
// })

// 3. Serve an html file.
let absolutePath = __dirname + '/views/index.html'

app.get('/', function(req, res) {
    res.sendFile(absolutePath)
})
































 module.exports = app;
