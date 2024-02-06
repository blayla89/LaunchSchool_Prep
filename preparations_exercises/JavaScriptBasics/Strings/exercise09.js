// 9. Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

/* ------------------------------------------------------------------------------------------------------------------
  Problem: 
    Input : String
    Output : String 
    Details: return copy of same string => same order, same words except the first letter of each word is capitalized
     - What does upper do when it encounters a character that cannot be converted to upper case? 
      - appears to return 


    Examples : 
      - 'launch school tech & talk' => 'Launch School Tech & Talk'


    Data Structure: Array to hold capitalized words 

    Algorithm : 
    1. convert the string to an array of words and initialize it to `words`
    2. declare and initialize `capitalize` to an empty array to hold the resulting capitalized words 
      2. loop through each word 
        -  during each iteration: 
          - 1. access the first letter of each word
          - 2. transform it to upper case
          - 3. merge it back together with the rest of the letters
          - 4. add the resulting capitalized word to `capitalize`
      3. convert `capitalize` to a string separated by a space character and return the value of this operation

    Code with Intent!
 ------------------------------------------------------------------------------------------------------------------- */

function capitalizeFirst (string) {
 let words = string.split(' ');  
 let capitalize = []; 

 words.forEach( word => {
  let capitalWord = word[0].toUpperCase() + word.substring(1); 
  capitalize.push(capitalWord); 
 })

 return capitalize.join(' '); 
}

console.log(capitalizeFirst('launch school tech & talk')); // 'Launch School Tech & Talk'