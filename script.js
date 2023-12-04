/* Eingabe User -> Egal ob uppercase oder ne, Eingabe Computer -> Random Nummer zwischen 1-3 in Wert umwandeln
vergleichen der Eingaben
Stein schlägt Schere, Papier schlägt Stein, Schere schlägt Papier
Anzeige des Ergebnisses
Nochmal? best of three?
*/
//Defining variables for Input from User and Computer
let userChoice;
// let computerChoice

//Dummy for Input because I don't know how to prompt Input from user
userChoice = 'RoCK';

//making userChoice lowercase to allow more valid inputs

userChoice = userChoice.toLowerCase();

//random number generator for three integers (0,1,2)
function randomChoice() {
let choiceIndex = Math.floor(Math.random()*3);

//switch statement to assign Rock Scissors or Papers to the generated number
switch (choiceIndex){
    case 0: 
    return'rock'
    case 1: 
    return'paper'
    case 2: 
    return'scissors'

}
}

const computerChoice = randomChoice();
console.log(userChoice+' '+computerChoice);
if ((userChoice==='scissors' && computerChoice==='paper')||(userChoice==='paper' && computerChoice==='rock')||(userChoice==='rock'&& computerChoice==='scissors'))
{console.log('winner');}
else if (userChoice===computerChoice)
{console.log('drawing');}
else {
    console.log('loser');
}