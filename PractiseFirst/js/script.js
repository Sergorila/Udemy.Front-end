//1
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//3

let latestFilm = prompt("Один из последних просмотренных фильмов?", "");
let personalRating = +prompt("На сколько его оцените?", "");

personalMovieDB.movies[latestFilm] = personalRating;

latestFilm = prompt("Один из последних просмотренных фильмов?", "");
personalRating = +prompt("На сколько его оцените?", "");

personalMovieDB.movies[latestFilm] = personalRating;