
const cards = [];
function writeCards(names,event) {
  for (let i= 0; i < names.length; i++) {
      cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      debugger;
  }
  return cards;
}
writeCards(names, event);

function countDown(positiveNumber) {
while(positiveNumber >= 0) {
     console.log(positiveNumber);
    positiveNumber--;
}

}
