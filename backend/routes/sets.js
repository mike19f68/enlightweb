const express = require("express");

const Song = require("../models/set");

const router = express.Router();

router.post("",(req, res, next) => {
  const set = new Set({
    setname: req.body.SetName,
    SetRow: {
      seq: req.body.Seq,
      title: req.body.Title,
      firstline: req.body.FirstLine,
      key: req.body.Key,
      songref: req.body.SongRef,
      lyrics: req.body.Lyrics,
      style: req.body.Style
    }
  });
  set.save().then(createdSet => {
    res.status(201).json({
      message: "Set saved successfully",
      postId: createdSong._id
    });
  });
});

router.get("", (req, res, next) => {
  Set.find({ $or: queryArray }).find().then(documents => {
    res.status(200).json({
      message: "Sets fetched successfully!",
      sets: documents
    });
  });
});

router.delete("/:id", (req, res, next) => {
  Song.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Set deleted" });
  });
});

module.exports = router;
