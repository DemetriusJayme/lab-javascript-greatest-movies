// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  return moviesArray.map((m) => m.director);
}

// Bonus - Iteration 1.1: Clean the array of directors
function getUniqueDirectors(moviesArray) {
  return [...new Set(moviesArray.map((m) => m.director))];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (m) => m.genre.includes("Drama") && m.director === "Steven Spielberg"
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  let sum = 0;
  moviesArray.forEach((m) => (sum += m.score || 0));
  return Math.round((sum / moviesArray.length + Number.EPSILON) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  return scoresAverage(moviesArray.filter((m) => m.genre.includes("Drama")));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  moviesArray.sort((Mes1, Mes2) => {
    if (Mes1.year > Mes2.year) return 1;
    if (Mes1.year < Mes2.year) return -1;
    if (Mes1.title > Mes2.title) return 1;
    if (Mes1.title < Mes2.title) return -1;
  });

  return [...moviesArray];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((m) => m.title)
    .sort()
    .slice(0, 20);
}
