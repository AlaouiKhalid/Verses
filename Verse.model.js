const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define a schema

var verseSchema = mongoose.Schema({
  "nSurah": Number,
  "nAyah": Number,
  "content": String,
  "language": String,
});

var Verse = mongoose.model('Verse', verseSchema);
module.exports = Verse;
