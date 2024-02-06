// 3. Implement a function repeat that repeats an input string a given number of times, as shown in the example below without using the pre-defined string method String.prototype.repeat().


// for loop ---------------------------------------

function repeat (count, string) {
  let repeat = ''; 
  for(let i = count; i > 0; i -= 1) {
    repeat += string; 
  }
  return repeat; 
}

console.log(repeat(3, 'ha')); // 'hahaha'
console.log(repeat(5, 'ha')); // 'hahahahaha'
console.log(repeat(2, 'ha')); // 'haha'
console.log(repeat(1, 'ha')); // 'ha'

// while loop ---------------------------------------

function repeat2 (n, string) {
  let repititions = '';
  while (n > 0) {
    repititions += string; 
    n -= 1; 
  }
  return repititions;
}
console.log(repeat2(3, 'ha')); // 'hahaha'
console.log(repeat2(5, 'ha')); // 'hahahahaha'
console.log(repeat2(2, 'ha')); // 'haha'
console.log(repeat2(1, 'ha')); // 'ha'