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
var won = new Array;
var lose = new Array;
var luck = new Map;

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
            won.push(day);
            luck.set(day, Amount);
        } else {
            totalAmountLose += (STAKE - Amount);
            lose.push(day);
            luck.set(day, Amount);
        }
        console.log("Total for Day " + day + " is : " + Amount);
    }

    console.log("Total Amount Won : " + totalAmountWin);
    console.log("Total Amount Lose : " + totalAmountLose);
    console.log("Won Days : " + won);
    console.log("Lose Days : " + lose);

    if (won.length > lose.length) {
        console.log("Gambler Won by : " + (won.length - lose.length + " Days and Overall Amount Won : " + (totalAmountWin - totalAmountLose)));
    } else if (lose.length > won.length) {
        console.log("Gambler Lose by : " + (lose.length - won.length + " Days and Overall Amount Lose : " + (totalAmountLose - totalAmountWin)));
    } else {
        console.log("Tie No Amount Lose or Gain")
    }

    console.log("Total Win Time : " + winTime);
    console.log("Total Lose Time : " + loseTime);
    luckiestAndUnluckiestDay();
}

luckiestAndUnluckiestDay = () => {
    var luckySortMap = new Map([...luck.entries()].sort((a, b) => b[1] - a[1]));
    var unluckySortMap = new Map([...luck.entries()].sort((a, b) => a[1] - b[1]));
    var luckiestday = luckySortMap.keys();
    var unluckiestday = unluckySortMap.keys();
    console.log("Luckiest Day is : " + luckiestday.next().value);
    console.log("UnLuckiest Day is : " + unluckiestday.next().value);
}
daysPlaying();