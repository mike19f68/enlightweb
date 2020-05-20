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
  Song.find().then(documents => {
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
