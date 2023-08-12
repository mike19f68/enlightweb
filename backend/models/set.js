const mongoose = require('mongoose');

const songsetrowSchema = mongoose.Schema({
  SR_Type: { type: String, required: true},
  SR_Ref: { type: Number},
  SR_Title: { type: String},
  SR_FirstLine: { type: String},
  SR_PaceGrp: { type: Number},
  SR_MusicalKey: { type: String}
});

const songsetSchema = mongoose.Schema({
  id: { type: String},
  Leader: { type: String, required: true},
  SetDate: { type: String, required: true},
  JsonSetRows: [{ type: songsetrowSchema }]
});

module.exports = mongoose.model('set', songsetSchema);
