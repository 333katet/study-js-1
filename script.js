/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilm;



function start() {
    numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
        numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    genres: [],
    privat: true
}

function showMyDB() {
    if (personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    let a;
    for (let i = 1; i <= 3; i++) {
        a = prompt('Любимый жанр фильмов?', '');
        personalMovieDB.genres[i-1] = a;
    }
    for (let i = 1; i < 3; i++) {
        console.log(`${i} жанр: ${personalMovieDB.genres[i-1]}`);
    }
}

writeYourGenres();