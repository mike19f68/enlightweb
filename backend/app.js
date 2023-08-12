const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require('mongoose');
const cors = require('cors');

const songsRoutes = require("./routes/songs");
const songsetsRoutes = require("./routes/songsets");
const userRoutes = require("./routes/user");

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
  app.use(cors({
    origin: ["http://localhost:4200", "http://localhost:3000"],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
  }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false}));
  app.use("/",express.static(path.join(__dirname, "Enlight")));

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
app.use("/api/songsets", songsetsRoutes);
app.use("/api/user", userRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "Enlight", "index.html"));
});

module.exports = app;
