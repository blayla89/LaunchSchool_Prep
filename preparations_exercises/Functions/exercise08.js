// 8. Without running the code, what do you think it will output? 

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

// output: 
  // = 42
  // = 3.1415
  // reason: the funciton foo was only init with 2 parameters, but we provide 1 addition: in repsonse, JS just ignores this additional argument 
    // the bar parameter is init to 42 and logged to the console on line 4
    // the qux parameter is init to 3.1415 and logged to the console on line 5
    // 2.718 is ignored