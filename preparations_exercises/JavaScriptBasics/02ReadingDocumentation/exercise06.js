// 6. The MDN page for Date lists two methods to get the year of a date.

let today = new Date();  // creates new date Obj representing ms since epoch

console.log(today.getYear()); // => ! deprecated ! - does not return full years - returns integer representing year - 1900 (yr 2000 problem)

console.log(today.getFullYear()); // returns 4 digit year for given date according to local time - replaces .getYear()


