const express = require('express');
const path = require('path');
const port = 8000;
const bodyParser = require('body-parser');

const app = express();

// Use ejs as view engine 
app.set('view engine', 'ejs');
// Set the path of views folder
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('assets')); // Serving static files from 'assets' folder

// Routes
app.get('/', function (req, res) {
    return res.render('home');
});

app.get('/market', function (req, res) {
    return res.render('market');
});

app.get('/expert', function (req, res) {
    return res.render('expert');
});

// Blog route
app.get('/blog', function (req, res) {
    return res.render('blog');
});

// Contact route
app.get('/contact', function (req, res) {
    return res.render('contact');
});

// Login route
app.get('/login', function (req, res) {
    return res.render('login');
});

// Start the server
app.listen(port, function (err) {
    if (err) {
        console.log("Error: ", err);
    }
    console.log("Server running on: ", port);
});
