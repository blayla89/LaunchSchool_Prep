// 6. Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/*

    Response:  No, it won't produce an error. It will output the string 'bar' to the console.
    - The constant declared on line 3 and the constant declared on line 5 are INDEPENDENT variables despite having the same name. If we had attempted to re-assign the constant within the block, that would've raised an error but in this case they are 2 distinct variables that happen to have the same name. However, this is a terrible idea because the constant declared on line 5 shadows the variable on line 3 which can creates some issues. The only variable in-scope for the call to console.log() on line 8 is the constant declared on line 3 so JS will output 'bar' to the console. 

*/