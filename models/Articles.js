// Import Mongoose for MongoDB
const mongoose = require('mongoose');
// Initialize Schema method
const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

let Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;