const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных фильмов', ''),
        b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Dane!');
    } else {
        console.log('error');
        i--;
    }

}
if (personalMovieDB.count < 10) {
    console.log("looks are mo films");
} else if (personalMovieDB.count >= 10 && personalMovieDB <= 30) {
    console.log("you are classic viewer");
} else if (personalMovieDB.count < 30) {
    console.log("you are great viewer!");
} else {
    console.log("ERROR");
}

console.log(personalMovieDB);