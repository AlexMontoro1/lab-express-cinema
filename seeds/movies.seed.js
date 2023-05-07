const Movie = require("../models/Movie.model.js");
const mongoose = require("mongoose");

const allMovies = require("./data.json");
require("../db/index.js");
Movie.insertMany(allMovies)
  .then(() => {
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
