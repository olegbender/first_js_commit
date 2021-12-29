'use srtict';

let numbersOfFilm = +prompt('How many films have you watched?', '');

let personalMovieDB = {
  count: numbersOfFilm,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let lastFilm = prompt('What was the last film?', ''),
  rateOfFilm = +prompt('What is your rate?', ''),
  lastFilm2 = prompt('What was the last film?', ''),
  rateOfFilm2 = +prompt('What is your rate?', '');

personalMovieDB.movies[lastFilm] = rateOfFilm;
personalMovieDB.movies[lastFilm2] = rateOfFilm2;

console.log(personalMovieDB);
