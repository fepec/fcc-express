let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World")

// There should be a app.listen(port) command here. 
// However, because its fcc, that is in server.js


// 7. Implement Root-level request logger middleware
// Placed here because this middleware has to work 
// for all routes, so it has to be mounted before them.
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
} )

// 2: Start an express server and serve a string

// app.get('/', function(req,res) {
//     res.send('Hello Express');
// })

// 3. Serve an html file.
let absolutePath = __dirname + '/views/index.html'

app.get('/', function (req, res) {
    res.sendFile(absolutePath)
})

// 4. Serve static assets
// 
// To serve static assets, we can use express.static(path).
// This is middleware, which is a function that intercepts route handlers,
// adding some kind of information. Middleware is mounted using
// app.use(path, middlewareFunction). The first path argument
// is optional. If we don't pass it, the middleware function
// will be executed for all requests.
// 

app.use('/public', express.static(__dirname + '/public'))

// 5. Serve JSON on a specific route

// app.get('/json', function(req, res) {
//     res.json({
//         "message": "Hello json"
//     })
// })

// 6. Use the .env file.
// The .env file keeps environment variables. Useful for storing
// API keys, database URIs, or config options. 
// Environment variables are accessible as 
// process.env.VAR_NAME (caps by convention).

app.get('/json', function (req, res) {
    const message = "Hello json"
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({
            "message": message.toUpperCase()
        })
    } else {
        res.json( {
            "message": message
        })
    }
})


// 8. Chain MW to create a Time Server

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.json({time: req.time})
})


// 9. Get parameter input from client
// route parameters

app.get('/:word/echo', (req, res) => {
    res.json({
        echo: req.params.word
    })
})






















module.exports = app;
