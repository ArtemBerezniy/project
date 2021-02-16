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


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);



// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Wrong');
// }

// const num = 48;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('Too much');
// }else {
//     console.log('ok');
// }



// const nums = 50;
// (nums === 50) ? console.log('ok') : console.log('error');


// const num = 50;


// switch (num) {
//     case 49:
//         console.log('wrong');
//         break;
//     case 100:
//         console.log('wrong');
//         break;
//     case 50:
//         console.log('Super');
//         break;
//     default:
//         console.log('Not this time');
//         break;

// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

//  for (let i = 1; i < 10; i++) {
//      if (i === 6) {
//         //  break;
//         continue;
//      }

//     console.log(i);
//  }


const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

   if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB[a] = b;
      console.log('Super');
   } else {
      console.log('Wrong');
      i--;
   }
}

if (personalMovieDB.count < 10) {
   console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
   console.log("Вы киноман");
} else {
   console.log('ERRRROOOOORRRRR');
}
console.log(personalMovieDB);