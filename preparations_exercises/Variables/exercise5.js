// 5. What does this program log to the console? Why?

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/*
    Response: logs the string 'bar' to the console
    The variable foo on line 3 is independent from the the variable foo declared on line 5 = they are NOT the same variable even though they have the same name(bad practice)! 
    Because the variable foo on line 3 is globally-scoped, it is the only one accessible to the console.log call on line 8 => line 5 variable foo is block-scoped and thus out-of-scope for line 8

    !Important: 
      line 4 starts a block: the variable foo declared on line 3 is still visible
      line 5 declares a new variable foo that shadows(hides) the variable on line 3
      line 6 ends the block => line 5 variable goes out of scope and line 3 comes back into scope
      line 8: the call to console.log() can only resolve the statement with the variable on line 3 because it is the only one that *technically* exists => it's the only one visible so 'bar' is output to the console
*/