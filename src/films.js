const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(function (movies) {
    return movies.director;
  });
  //console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director == director);
  //console.log(result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let filmsByDirector = getMoviesFromDirector(array, director);
  let result = moviesAverage(filmsByDirector);

  return result;
}

function moviesAverage(array) {
  if (array.length == 0) {
    return 0;
  }
  if (array.length == 1) {
    if (array[0].score == '') {
      return 0;
    } else {
      return array[0].score;
    }
  }
  let result = array.reduce((valorAnterior, valorActual) => ((valorAnterior.score + valorActual.score)) / array.length);

  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let filmsBytitle = array.map(movie => movie.title);
  let result = filmsBytitle.sort().slice(0, 20);
  return result;
}

// Exercise 5: Order by year, ascending

/* function orderByYear(array) {
  
  let result = [...array].sort((a, b) => {
    // If year a is gratter than b
    if (a.year > b.year)
      return 1;
    // If year b is gratter than b
    if (a.year < b.year)
      return -1;
    // if year a ==  year b
    if (a.title.toUpperCase() > b.title.toUpperCase())
      return 1;
    // If title b is gratter than b
    if (a.title.toUpperCase() < b.title.toUpperCase())
      return -1;
    // If a == b
    return 0;
  });

  return result
} */

//with localCompare 

function orderByYear(array) {
  let result = [...array].sort((a, b) => {
    return (a.year - b.year) || (a.title.localeCompare(b.title))
  })
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
/* function moviesAverageByCategory(movies, parameter) {
  let filmsByGenre = [];
  movies.forEach(function (movie) {
    if (movie.genre.includes(parameter) && movie.score != '') {
      filmsByGenre.push(movie);
    }
  });
  
  let result = moviesAverage(filmsByGenre);
  return result;
} */

//with filter

function moviesAverageByCategory(array, parameter) {
  let filmsByGenre = array.filter(movie =>
    movie.genre.includes(parameter) && movie.score != '');
  let result = moviesAverage(filmsByGenre);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  let arrayMovies = [...array].map((movie) => {
    getHours(movie.duration);
    return movie
  });

  console.log(arrayMovies);
}
//return {...movie, duration: nuevo valor}
//let saludo = "hola"; console.log([...saludo])
function getHours(duration) {

  //  let chars = []
  //   for(let i= 0; i<movie.length; i++){
  //     if(movie.duration.includes("h")){
  //       chars = movie.duration.split();
  //       console.log(chars);
  //     }
  //   }

  let result = [...array].map(movie => {
    if (movie.duration.includes("h")) {
      return movie
      //console.log(chars)
    }
  })
  console.log(result);
  return result;
}
// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
