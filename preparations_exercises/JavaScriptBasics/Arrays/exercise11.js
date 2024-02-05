// 11. We have made a grocery list, and as we check off items on that list, we would like to remove them.
  // Write code that removes the items from 'groceryList' one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows.

  /* -----------------------------------------------------------------------------------------------
    Problem: 
      Input: Array (list of grocery items)
      Output: Array (truncated array from original)
      Details/ Rules: 
        - as an element is checked off, remove the item from the array 
        - appears to be in order - removes first to last 
        - final array output is an empty, mutated array

    Examples/Test Cases: 
      let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
        // Your code.
          // logs:
          // paprika
          // tofu
          // garlic
          // quinoa
          // carrots
          // broccoli
          // hummus
          groceryList; // []

      Data structure: Array 

      Algorithm: 
        1. iterate through the array and remove each element
        2. declare a variable `removedItem` and initialize it the result of the operation that removes the element
        2. log `removedItem` to the console for each iteration
        3. continue removing items until the array is empty 

      Code with Intent !
  */

  let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

  while (groceryList.length > 0) {
    let removedItem = groceryList.shift(); 
    console.log(removedItem); 
  }

  console.log(groceryList); 

