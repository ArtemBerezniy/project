"use strict";
// let a = 15;

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// {
//    var result = 50;
// }

// console.log(result);

// alert(`Hello`);

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Are you 18 years old or older?', '18');
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('What is your name?', '');
// answers[1] = prompt('What is your second name?', '');
// answers[2] = prompt('How old are you?', '');

// console.log(typeof(answers));


// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Artem';

// const namesa = "artem";
// console.log(namesa);ы

// alert(`Hello, ${user}`);


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
