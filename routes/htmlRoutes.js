// TODO: Import DB Models
const db = require('../models');

module.exports = function (app) {

    // Root
    app.get('/', function (req, res) {
        // Save the scraped article to DB
        db.Article.find({}).then(function (dataArticles) {
            console.log(dataArticles);
            res.render("index", { data: dataArticles, home: true });
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Saved Articles
    app.get('/savedarticles', function (req, res) {
        res.send('Saved HTML Placeholder');
    });

    // 404 for unmatching url routes
    app.get('*', function (req, res) {
        res.render('404', { error: true });
    });
}