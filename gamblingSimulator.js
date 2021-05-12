console.log("Welcome To Gambling Simulation Problem");

const STAKE = 100;
const BET = 1;
const WON = 1;
const LOSE_CONDITION = STAKE / 2;
const WIN_CONDITION = STAKE + STAKE / 2;
const TOTAL_DAYS = 20;

console.log("Stake : " + STAKE);
console.log("Bet : " + BET);

let total;
var winTime = 0;
var loseTime = 0;
var totalAmountWin = 0;
var totalAmountLose = 0;

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
    return total;
}

daysPlaying = () => {
    for (let day = 1; day <= TOTAL_DAYS; day++) {
        let Amount = 0;
        Amount = game();
        if (Amount > STAKE) {
            totalAmountWin += (Amount - STAKE);
        } else {
            totalAmountLose += (STAKE - Amount);
        }
        console.log("Total for Day " + day + " is : " + Amount);
    }
    console.log("Total Amount Won : " + totalAmountWin);
    console.log("Total Amount Lose : " + totalAmountLose);
    console.log("Total Win Time : " + winTime);
    console.log("Total Lose Time : " + loseTime);
}
daysPlaying();