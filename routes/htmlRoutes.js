// TODO: Import DB Models


module.exports = function (app) {

    // Root
    app.get('/', function (req, res) {
        res.send('Root HTML Placeholder');
    });

    // Saved Articles
    app.get('/savedarticles', function (req, res) {
        res.send('Saved HTML Placeholder');
    });

    // 404 for unmatching url routes
    app.get('*', function (req, res) {
        res.send('404 Placeholder');
    });
}