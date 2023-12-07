// 1. What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

/*
    Response: logs 'Good Morning, Victor', 'Good Afternoon, Victor', 'Good Evening, Victor' the raises a TypeError on line 8 because const cannot be reassigned => immutable binding to its value

*/