// Code your solutions in this file
function writeCards(names, occasion) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
      thankYouMessages.push(message);
    }
    return thankYouMessages;
  }
  writeCards(['Elnathan','Wedding']);
  // Function of a count down from a number and log each number to the console
  
    
    function countDown(integer) {
       
      while (integer>=0 && integer <= 10 ) {
        console.log(integer);
        integer--;
      }
    return integer;
    }
    
    // Example: Count down from 10 to 1
    countDown(10);

  
   //loops lessons 
   for(let age =30;age<31;age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);

   }
   
const gift=['blankets','clothes','sweets'];
function wrapGifts(gift){
  for(let i=0;i<gift.length;i++){
    console.log(`We bought ${gift[i]} and added a cow!`);
  }
  return gift
}
  
  wrapGifts(gift);
  
  
  
  
  
  
  
  
  
  