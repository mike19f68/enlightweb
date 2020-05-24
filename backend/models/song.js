const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
  SongRef: { type: Number, required: true},
  SongTitle: { type: String, required: true },
  FirstLine: { type: String, required: true },
  Lyrics: { type: String, required: true },
  Author: { type: String },
  CCLI_Ref: { type: String },
  Copyright: { type: String },
  PaceGrp: { type: Number, required: true },
  Rating: { type: Number, required: true },
  LastPlay: { type: Date },
  MusicalKey: { type: String },
  Tempo: { type: Number },
  fields: {type: [String], index: true}
});
songSchema .index({fields: 'text'});

module.exports = mongoose.model('Song', songSchema);
