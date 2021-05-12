console.log("Welcome To Gambling Simulation Problem");

const STAKE = 100;
const BET = 1;
const WON = 1;
const LOSE_CONDITION = STAKE / 2;
const WIN_CONDITION = STAKE + STAKE / 2;

console.log("Stake : " + STAKE);
console.log("Bet : " + BET);

let total;
var winTime = 0;
var loseTime = 0;

game = () => {
    total = STAKE;
    while (total > LOSE_CONDITION && total < WIN_CONDITION) {
        let gameCheck = Math.floor(Math.random() * 10 % 2);
        if (gameCheck == WON) {
            total += BET;
            winTime++;
        } else {
            total -= BET;
            loseTime++;
        }
    }
    console.log("Total : " + total);
    console.log("Total Win Time : " + winTime);
    console.log("Total Lose Time : " + loseTime);
}
game();