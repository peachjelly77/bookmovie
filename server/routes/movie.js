const router = require("express").Router();
const Movie = require('../models/Movie');
const auth = require('../middleware/auth');

//add movie
router.post("/add-movie", auth, async (req, res) => {
    try {
      const newMovie = new Movie(req.body);
      await newMovie.save();
      res.send({
        success: true,
        message: "Movie added successfully",
      });
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  });


//bring all movie
router.get("/get-all-movies", async (req, res) => {
    try {
      const movies = await Movie.find().sort({ createdAt: -1 });
      res.send({
        success: true,
        message: "Movies fetched successfully",
        data: movies,
      });
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  });

  module.exports = router;