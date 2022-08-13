const express = require("express");

const songset = require("../models/songset");

const router = express.Router();

router.post("",(req, res, next) => {
  console.log(JSON.stringify(req.body.SetRows));
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
  const leader = req.query.leader;
  const setDate = req.query.setDate;
  var query = {};
  query.Leader = {$eq: leader};
  query.SetDate = {$eq: setDate};
  console.log(JSON.stringify(query));

  songset.findOne(query).then(documents => {
      res.status(200).json({
        message: "Search Completed",
        songsets: documents
      });
    });
});

router.delete("/:id", (req, res, next) => {
    songset.deleteOne({ _id: req.params.id }).then(result => {
    res.status(200).json({ message: "Set deleted" });
    console.log(result);
  });
});

module.exports = router;
