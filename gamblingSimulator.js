console.log("Welcome To Gambling Simulation Problem");

const STAKE = 100;
const BET = 1;
const WON = 1;

console.log("Stake : " + STAKE);
console.log("Bet : " + BET);

let total;

game = () => {
    total = STAKE;
    let gameCheck = Math.floor(Math.random() * 10 % 2);
    if(gameCheck == WON){
        total += BET;
        console.log("Game Won")
    }else{
        total -= BET;
        console.log("Game Lose")
    }
    console.log("Total : " + total);}
game();