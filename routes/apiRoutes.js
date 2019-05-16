// Initialize Axios for http methods
const axios = require('axios');
// Initialize cheerio for scraping
const cheerio = require('cheerio');
// Import Models for DB
const db = require('../models');

module.exports = function (app) {

    // ========== Scraping Routes ==========

    // Scrape data and save to DB
    app.get("/scrape", function (req, res) {

        axios.get("https://www.studentnewsdaily.com/").then(function (response) {
            // Initialize cheerio
            let $ = cheerio.load(response.data);

            // find data you want to scrape via element selectors
            $("div.caption").each(function (i, element) {
                let result = {};
                // save the data into result object
                result.title = $(this).children("h4").children("a").text();
                result.summary = $(this).children("p").text();
                result.link = $(this).children("h4").children("a").attr("href");

                // saved the fetched article to Article Collection
                db.Article.create(result).then(function (dbArticle) {
                    console.log(dbArticle);
                    res.redirect("/");

                }).catch(function (err) {
                    console.log(err);
                });

            });
        }).catch(function (err) {
            console.log(err);
        });

    });


    // ========== Article Routes ==========

    // GET (Get all Articles)

    // GET (Get Article by ID)

    // POST (Save & Update Article Notes)

    // GET (Delete All Articles from Saved Articles)

    // GET (Delete One Article by ID)

    // ========== Saved Article Routes ==========

    // GET (Get all Saved Articles)

    // GET (Get Saved Article by ID)

    // POST (Save & Update Saved Article Notes)

    // POST (Add Article to Saved Article Collection)

    // GET (Delete all from Saved Article Collection)

    // GET (Delete One Saved Article)

    // GET (Delete Note from Saved Article)
}