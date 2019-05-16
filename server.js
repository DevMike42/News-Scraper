// Initialize Express
const express = require('express');
const app = express();

// Initialize Handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Initialzie Morgan for logging
const logger = require('morgan');
app.use(logger('dev'));

// Initialize Mongoose for MongoDB
const mongoose = require('mongoose');

// Initialize PORT
let PORT = process.env.PORT || 3300;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Connect to MongoDB
let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/newsScraper';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// start server
app.listen(PORT, () => {
    console.log('App running on http://localhost%s:', PORT);
});