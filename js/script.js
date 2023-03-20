"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const film1 = prompt("Один из последних просмотренных фильмов?", ""),
	ball1 = prompt("На сколько оцените его", ""),
	film2 = prompt("Один из последних просмотренных фильмов?", ""),
	ball2 = prompt("На сколько оцените его", "");

personalMovieDB.movies[film1] = ball1;
personalMovieDB.movies[film2] = ball2;

console.log(personalMovieDB);
