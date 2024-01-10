// 4. What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// Solution: 
  /*
    It logs 'Product2', 'Product3', and 'Product not found!'. 
    This is because the first case match is '113' so its clause executes, but so 
    do the following clauses thereafter. This is referred to as fall through 
    and occurs because we didn't add break statements to tell JS to stop execution 
    after our match has been found and to only run its corresponding clause. 
  */