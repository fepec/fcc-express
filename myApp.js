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

// 4. Serve static assets
```
To serve static assets, we can use express.static(path).
This is middleware, which is a function that intercepts route handlers,
adding some kind of information. Middleware is mounted using
app.use(path, middlewareFunction). The first path argument
is optional. If we don't pass it, the middleware function
will be executed for all requests.
```
app.use(express.static(__dirname + '/public'))





























 module.exports = app;
