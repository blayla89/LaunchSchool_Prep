// 7.  How many arguments does the Array.prototype.join() method expect? What happens if you call it with less or more arguments?

  // doesn't *require* any arguments - but expects an optional separator
    // 0 args: concatenates array elements with comma 
    // > 0 args: concatenates array elements with first argument (separator) and ignores the rest

    let words = ['To', 'be', 'or', 'not', 'to', 'be...']; 

    let zero = words.join(); 
    console.log(zero); 

    let one = words.join(' '); 
    console.log(one); 

    let greaterThanOne = words.join('-', ' ', ' _'); 
    console.log(greaterThanOne); 
