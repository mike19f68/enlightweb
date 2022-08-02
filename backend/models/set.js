const mongoose = require('mongoose');

const setSchema = mongoose.Schema({
  Leader: { type: String, required: true},
  SetName: { type: String, required: true},
  SetRows: [{
    SongType: { type: String, required: true},
    SongRef: { type: Number, required: true},
    Title: { type: String, required: true},
    FirstLine: { type: String, required: true},
    PaceGrp: { type: Number},
    MusicalKey: { type: String, required: true}
  }]
});

setSchema .index({fields: 'text'});

module.exports = mongoose.model('Set', setSchema);
