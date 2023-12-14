let greetingMessage = 'Good Morning!'; // global: accessible throughout entire program
console.log(greetingMessage);

function greetPeople() {               // fxn that uses global variable from within 
  console.log(greetingMessage); 
}

greetPeople(); 

function changeGreetingMessage(newMessage) { 
  greetingMessage = newMessage;
}

changeGreetingMessage('Good Evening'); 
console.log(greetPeople())