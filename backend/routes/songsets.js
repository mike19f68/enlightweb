const express = require("express");

const songset = require("../models/set");

const router = express.Router();

router.post("",(req, res, next) => {
  const postset = new songset({
    Leader: req.body.Leader,
    SetDate: req.body.SetDate,
    JsonSetRows: req.body.SetRows
  });
  postset.save().then(createdSet => {
    res.status(201).json({
      message: "Set saved successfully on " + createdSet._id,
      setId: createdSet._id
    });
  });
});

router.put("/:id", (req, res, next) => {
  const postset = new songset({
    _id: req.body.id,
    Leader: req.body.Leader,
    SetDate: req.body.SetDate,
    JsonSetRows: req.body.SetRows
  });
  songset.updateOne({ _id: req.params.id },  postset).then(result => {
    res.status(200).json({ message: "Update Successful" });
    console.log(result);
  });
});

router.get("", (req, res, next) => {
  const leader = req.query.Leader;
  var query = {};
  query.Leader = { $eq: leader};
  songset.find(query)
    .then(documents => {
      res.status(200).json({
        message: "Sets fetched successfully!",
        songsets: documents
      });
    })
    .catch({
      message: "Failed to load data!"
    });
});

router.get("/find", (req, res, next) => {
  const leader = req.query.Leader;
  const setDate = req.query.SetDate;
  var query = {};
  query.Leader = {$eq: leader};
  query.SetDate = {$eq: setDate};

  songset.findOne(query)
     .then(documents => {
      res.status(200).json({
<<<<<<< HEAD
        message: "Search Completed",
        songsets: documents
=======
        message: "Set Already Exists",
        songsets: query
>>>>>>> ac434a9 (SetSave)
      });
  });
});

router.delete("/:id", (req, res, next) => {
  songset.deleteOne({ _id: req.params.id }).then(result => {
    res.status(200).json({ message: "Set deleted" });
  });
});

module.exports = router;
