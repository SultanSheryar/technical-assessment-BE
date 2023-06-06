const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  Source: String,
  Value: String,
});

export const movieSchema = new mongoose.Schema({
  Title: String,
  Year: String,
  Rated: String,
  Released: String,
  Runtime: String,
  Genre: String,
  Director: String,
  Writer: String,
  Actors: String,
  Plot: String,
  Language: String,
  Country: String,
  Awards: String,
  Poster: String,
  Ratings: [ratingSchema],
  Metascore: String,
  imdbRating: String,
  imdbVotes: String,
  imdbID: { type: String, unique: true },
  Type: String,
  DVD: String,
  BoxOffice: String,
  Production: String,
  Website: String,
  Response: String,
});


