const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbsUp: {
    type: Number,
    required: true,
  },
  thumbsDown: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('movie', MovieSchema);
