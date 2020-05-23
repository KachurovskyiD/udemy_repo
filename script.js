'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
personalMovieDB.count = numberOfFilms;

let firstAsk = prompt("Один из последних просмотренных фильмов?", ""),
  firstAskRate = +prompt("Нас сколько оцените его?", ""),
  secondAsk = prompt("Один из последних просмотренных фильмов?", ""),
  secondAskRate = +prompt("Нас сколько оцените его?", "");
personalMovieDB.movies[firstAsk] = firstAskRate;
personalMovieDB.movies[secondAsk] = secondAskRate;

console.log(personalMovieDB);