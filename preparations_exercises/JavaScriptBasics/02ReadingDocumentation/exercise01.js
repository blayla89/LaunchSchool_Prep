// In the following code snippet, find all violations of the style guide. Rewrite it so that it conforms with the guide.


// let ice_cream_taste = 'chocolate'  =>  ! this type of snake_case not permitted & missing terminating semi-colon
// let ice_cream_density = 10 => !this type of snake_case not permitted & missing terminating semi-colon


// while(ice_cream_density > 0) => ! add space b/w while and condition & snake_case for variable name not allowed
// {  => ! opening bracket for block on same line with space between 
//   console.log('Drip...'); => ! 2 spaces for tab
//   ice_cream_density -= 1; => ! 2 spaces for tab & this type of snake_case not allowed
// } => Ok 

// console.log('The '+ ice_cream_taste +' ice cream melted.'); => ! space between operators & this type of snake case not allowed

let iceCreamTaste = 'chocolate'; 
let iceCreamDensity = 10; 
while (iceCreamDensity > 0) {
  console.log('Drip...'); 
  iceCreamDensity -= 1; 
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');


