const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model.js");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((response) => {
      //console.log(response);
      res.render("movies.hbs", {
        allMovies: response,
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/movies/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((response) => {
      console.log(response);
      res.render("movie-info.hbs", {
        oneMovie: response,
      });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
