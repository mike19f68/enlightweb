const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
  SongRef: { type: Number, required: true},
  SongTitle: { type: String, required: true },
  FirstLine: { type: String, required: true },
  Lyrics: { type: String, required: true },
  Author: { type: String },
  CCLI_Ref: { type: String },
  Copyright: { type: String },
  PaceGrp: { type: String, required: true },
  Rating: { type: Number, required: true },
  LastPlay: { type: Date },
  MusicalKey: { type: String },
  Tempo: { type: Number }
});


module.exports = mongoose.model('Song', songSchema);
