// Code your solutions in this file
function writeCards(names, occasion) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
      thankYouMessages.push(message);
    }
    return thankYouMessages;
  }
  
  // Function to count down from a number and log each number to the console
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  