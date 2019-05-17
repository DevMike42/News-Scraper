const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Note Schema
let NoteSchema = new Schema({
    title: String,
    body: String
});

let Note = mongoose.model('Note', NoteSchema);

module.exports = Note;