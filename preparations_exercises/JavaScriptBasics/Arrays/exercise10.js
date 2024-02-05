// 1. We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];


// Array.prototype.join(separator) -> combines each element with comma (Default) or specified separator
  //Higher level of abstraction

let joined = passcode.join('-'); 
console.log(joined) // => '11-jZ5-hQ3f*-8!7g3-p3Fs'

// for loop - step-by-step string building = lower level of abstraction

let joinedPasscode = ''; 

for (let i = 0; i < passcode.length; i += 1) {
  if(i > 0) {
    joinedPasscode += '-'; 
  }
  joinedPasscode += passcode[i]; 
}

console.log(joinedPasscode);


// iteration 1 : 0 < 5 => true => i === 0 => false => `11` 
  // iteration 2 : 1 < 5 => true => i === 1 =>  true => `11-` => `11-jZ5` 
    // iteration 3 : 2 < 5 => true => i === 2 => true => `11-jZ5-` => `11-jZ5-hQ3f*` 
      // iteration 4 : 3 < 5 => true => i === 3 => true => `11-jZ5-hQ3f*-` => `11-jZ5-hQ3f*-8!7g3`
        // iteration 5 : 4 < 5 +> true => i === 4 => true => `11-jZ5-hQ3f*-8!7g3-` => `11-jZ5-hQ3f*-8!7g3-p3Fs`
          // iteration 6 : 5 < 5 => false => loop terminates 

