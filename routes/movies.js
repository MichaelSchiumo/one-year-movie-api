const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const Movie = require('../models/Movie');

router.get('/', async (req, res) => {
  try {
    const filter = {};
    const movies = await Movie.find(filter);
    res.json(movies);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.post(
  '/',
  [check('title', 'Title is required').not().isEmpty()],
  async (req, res) => {
    const {
      title,
      director,
      releaseDate,
      description,
      thumbsUp,
      thumbsDown,
    } = req.body;

    try {
      const newMovie = new Movie({
        title,
        director,
        releaseDate,
        description,
        thumbsUp,
        thumbsDown,
      });

      const movie = await newMovie.save();
      res.json(movie);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

router.put('/:id', async (req, res) => {
  const {
    title,
    director,
    releaseDate,
    description,
    thumbsUp,
    thumbsDown,
  } = req.body;

  const movieFields = {};

  if (title) movieFields.title = title;
  if (director) movieFields.director = director;
  if (releaseDate) movieFields.releaseDate = releaseDate;
  if (description) movieFields.description = description;
  if (thumbsUp) movieFields.thumbsUp = thumbsUp;
  if (thumbsDown) movieFields.thumbsDown = thumbsDown;

  try {
    let movie = await Movie.findById(req.params.id);

    if (!movie) return res.status(404).json({ msg: 'Movie not in DB' });

    movie = await Movie.findByIdAndUpdate(req.params.id, { $set: movieFields });

    res.json(movie);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
