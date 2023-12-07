// 10. What value does the following expression evaluate to?

'foo' === 'Foo';

/* Response */
  /* 
    evaluates to boolean false; 
      result of equality comparison is a boolean and strings are case sensitive thefore they are not equal to eachother 
  */


// 11. What value does the following expression evaluate to?

parseInt('3.1415');

/* Response */
  /* 
    evaluates numeric value 3: 
      parseInt converts a string value that begins with digits to a numeric type (specifically an integer) => conversion stops when it encounters an invalid character => explains the return of integer 3 because stopped converting when it reached the decimal point which is an invalid character 
  */



// 12. What value does the following expression evaluate to?

'12' < '9';

/* Response */
  /* 
    evaluates to boolean true: 
      result of < relational opeartor returns a boolean value:
      char by char analysis until different char encountered => lexicographic comparison of different chars => comparison stops after and returns result of the lexicographic comparison

        lexicographic = dictionary order = analagous to the way words are ordered in a dictionary i.e short before shorthand 
  */
