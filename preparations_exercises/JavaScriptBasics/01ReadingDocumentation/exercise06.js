// 6. What are the return values of the statements on lines 3 to 5? Refer to the MDN documentation about the Array object for help.

let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1]; // returns 'palm tree' => this operation returns the element at last index position
trees.pop();             // returns 'palm tree' => this method invocation removes the last element and RETURNS the removed element
trees[trees.length - 1]; // returns 'sequoia' => this operation returns the element at last index position, which is now 'sequoia' because .pop() used on line 6 mutated the calling array