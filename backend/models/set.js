const mongoose = require('mongoose');

const setSchema = mongoose.Schema({
  SetName: { type: String, required: true},
  SetRow: [{
    Seq: { type: String, required: true},
    Title: { type: String, required: true},
    FirstLine: { type: String, required: true},
    Key: { type: String, required: true},
    SongRef: { type: Number, required: true},
    Lyrics: { type: String, required: true},
    Style: { type: String, required: true}
  }]
});

setSchema .index({fields: 'text'});

module.exports = mongoose.model('Set', setSchema);
