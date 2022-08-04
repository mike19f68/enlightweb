const mongoose = require('mongoose');

const setSchema = mongoose.Schema({
  id: { type: String},
  Leader: { type: String, required: true},
  SetDate: { type: String, required: true},
  JsonSetRows: {
    SR_Type: { type: String, required: true},
    SR_Ref: { type: Number, required: true},
    SR_Title: { type: String, required: true},
    SR_FirstLine: { type: String, required: true},
    SR_PaceGrp: { type: Number},
    SR_MusicalKey: { type: String}
  }
});

module.exports = mongoose.model('set', setSchema);
