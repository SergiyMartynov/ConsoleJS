const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("looks are mo films");
        } else if (personalMovieDB.count >= 10 && personalMovieDB <= 30) {
            console.log("you are classic viewer");
        } else if (personalMovieDB.count < 30) {
            console.log("you are great viewer!");
        } else {
            console.log("ERROR");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    WriteYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`You best film liked in order${i}`);

            // if (genre === '' || genre == null) {
            //     console.log('You input do not correct date');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            let genres = prompt(`Input you best genres withoud comma`).toLocaleLowerCase();
            if (genres === '' || genres == null) {
                console.log('You input do not correct date');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }

        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Fovorite genre ${i + 1} - this ${item}`);
        });
    }
};