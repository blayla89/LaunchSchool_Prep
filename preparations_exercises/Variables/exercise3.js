// 3. What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);

/* 

  Response: JS raises a ReferenceError because the variable foo is declared within a block with let => creates a block-scoped variable which is inaccessible outside the block in which is was declared
   - block scoping reduces the visibility, foo doesn't exist outside that block 

*/