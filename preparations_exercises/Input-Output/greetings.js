/* let name = 'Jane'; 
console.log(`Good Morning, ${name}!`);  */

let rlSync = require(`readline-sync`); 
let name = rlSync.question(`What's your name?\n`);
console.log(`Good Morning, ${name}!`);