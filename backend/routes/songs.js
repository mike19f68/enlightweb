const express = require("express");

const Song = require("../models/song");

const router = express.Router();

router.post("",(req, res, next) => {
  const song = new Song({
    songref: req.body.songref,
    songtitle: req.body.songtitle,
    firstline: req.body.firstline,
    lyrics: req.body.lyrics,
    author: req.body.author,
    ccliref: req.body.ccliref,
    copyright: req.body.copyright,
    pacegrp: req.body.pacegrp,
    rating: req.body.rating,
    lastplay: req.body.lastplay,
    musicalkey: req.body.musicalkey,
    tempo: req.body.tempo
  });
  song.save().then(createdSong => {
    res.status(201).json({
      message: "Song added successfully",
      postId: createdSong._id
    });
  });
});

router.get("", (req, res, next) => {
 const pGrp = req.query.pace;
 const Age = +req.query.age;
 const Rating = +req.query.rating;
 const searchString = req.query.find;

var query = {};
var queryArray = [];

var userInput = new RegExp(searchString+" ", 'i');
queryArray = [
  { 'Lyrics': { $regex: new RegExp(searchString,'i')}},
  { 'Title': { $regex: new RegExp(searchString,'i')}},
  { 'FirstLine': { $regex: new RegExp(searchString,'i')}},
  { 'Author': { $regex: new RegExp(searchString,'i')}},
  { 'Copyright': { $regex: new RegExp(searchString,'i')}}
];

switch (true) {
  case pGrp == 0:  // Standard
     query.PaceGrp = {$lt: 5};
     break;
  case pGrp == 1:  // Fast
     query.PaceGrp = {$lt: 3};
     break;
  case pGrp == 2:  // Medium
     query.PaceGrp = {$lt: 4, $gt: 1};
     break;
  case pGrp == 3:  // Slow
     query.PaceGrp = {$lt: 5, $gt: 2};
     break;
  case pGrp == 4:  // Kids
     query.PaceGrp = {$eq: 8};
     break;
     case pGrp == 5:  // Christmas
     query.PaceGrp = {$eq: 9};
     break;
  default:  // All
}

  var d = new Date();
  d.setDate(d.getDate() - (Age * 365));
  query.LastPlay = { $gt: d };

  query.Rating = { $gt: Rating};

  Song.find({ $or: queryArray }).find(query).then(documents => {
    res.status(200).json({
      message: "Songs fetched successfully!",
      songs: documents
    });
  });
});

router.delete("/:id", (req, res, next) => {
  Song.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Song deleted" });
  });
});

module.exports = router;
