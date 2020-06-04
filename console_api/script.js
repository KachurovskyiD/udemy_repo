'use strict';

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("Нас сколько оцените его?", "");

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
      if (genre === '' || genre === null) {
        console.log("You don't enter correct data");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }

    // Alternative
    // for (let i = 1; i < 2; i++) {
    //   let genres = prompt(`Ваши любимые жанры через запятую`, "").toLowerCase();
    //   if (genres === '' || genres === null) {
    //     console.log("You don't enter correct data");
    //     i--;
    //   } else {
    //     personalMovieDB.genres = genres.split(', ');
    //   }
    // }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр № ${i+1}  - это ${item}`);
    });
  }
};