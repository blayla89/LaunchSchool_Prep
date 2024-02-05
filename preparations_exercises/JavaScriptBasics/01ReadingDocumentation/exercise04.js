// 4. Locate the documentation for the Array built-in object on MDN.

  // How can we access the element 'and' in the array ['fish', 'and', 'chips']?


  // Solution: You can use bracket notation to access the element 'and'
    // - if the index is known, you simply use bracket notation on the array or a variable with a reference to the array with the known index position between the brackets
      // - if you don't know the index, you will need to perform some sort of operation that searches the array, finds the index, and then use the index between the brackets so access the element

    // known index + bracket notation
    console.log(['fish', 'and', 'chips'][1]);

    // unkown index + bracket notation
    console.log(['fish', 'and', 'chips'][['fish', 'and', 'chips'].indexOf('and')]);

