// Scraping script

// Require axios for making http requests
const axios = require("axios");
// Require cheerio for grabbing elements from DOM to be scraped
const cheerio = require("cheerio");

var scrape = function () {

    return axios.get("http://www.nytimes.com").then(function(res) {

        var cLoad = cheerio.load(res.data);

        var articles = [];
        
        cLoad("css-1qwefa").each(function(i, element) {
            
            var headline = cload(this).find("h2").text().trim();
            
            if (head && sum && url) {
                // This section uses regular expressions and the trim function to tidy our headlines and summaries
                // We're removing extra lines, extra spacing, extra tabs, etc.. to increase to typographical cleanliness.
                var headNeat = headline.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                
                // Initialize an object we will push to the articles array
                
                var dataToAdd = {
                    headline: headNeat
                };
                
                articles.push(dataToAdd);
            };
        
            return articles;
        });
        console.log(articles);
    });
}; 

scrape();