const express = require("express");

const set = require("../models/set");

const router = express.Router();

router.post("",(req, res, next) => {
  const set = new Set({
    Leader: req.body.Leader,
    SetName: req.body.SetName,
    SetRow: {
      songtype: req.body.SongType,
      songref: req.body.SongRef,
      title: req.body.Title,
      firstline: req.body.FirstLine,
      pacegrp: req.body.PaceGrp,
      musicalkey: req.body.MusicalKey
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
  var query = {};
  query.Leader = { $gt: ''};
  set.find(query).then(documents => {
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
