const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Use EJS as view engine
app.set('view engine', 'ejs');
// Set the path of views folder
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
// Serve static files from 'public' folder (renamed from 'assets')
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    return res.render('home');
});

app.get('/market', (req, res) => {
    return res.render('market');
});

app.get('/expert', (req, res) => {
    return res.render('expert');
});

// Blog route
app.get('/blog', (req, res) => {
    return res.render('blog');
});

// Contact route
app.get('/contact', (req, res) => {
    return res.render('contact');
});

// Login route
app.get('/login', (req, res) => {
    return res.render('login');
});

// Start the server on the port provided by Vercel or default to 8000
const port = process.env.PORT || 8000;
app.listen(port, (err) => {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log(`Server running on port ${port}`);
    }
});
const cors = require('cors');
app.use(cors());
