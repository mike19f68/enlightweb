const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const songsRoutes = require("./routes/songs");
const setsRoutes = require("./routes/sets");
const app = express();

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose
.connect(
  "mongodb+srv://mfarrant:NbncTkYWPgy9lC5I@cluster0-tmobm.mongodb.net/enlight?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(() => {
    console.log('Connection to DB Failed');
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false}));

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

app.use("/api/songs", songsRoutes);
app.use("/api/sets", setsRoutes);

module.exports = app;


