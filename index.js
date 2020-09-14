let diceValue1;
let diceValue2;

function playerOneDice() {
    //get dice for player one
     diceValue1 = Math.random();
    diceValue1 = Math.floor((diceValue1 * 6)) + 1;
    return document.querySelector(".img1").setAttribute("src", "images/dice" + diceValue1 + ".png");
}

function playerTwoDice() {
    //get dice value for player two
     diceValue2 = Math.random();
    diceValue2 = Math.floor((diceValue2 * 6)) + 1;
    return document.querySelector(".img2").setAttribute("src", "images/dice" + diceValue2 + ".png");
}

function determineWinner() {
    if (diceValue1 > diceValue2) {
        document.querySelector("h1").innerHTML=" <i class=\"fas fa-flag\"></i> Player One Wins!"
    } else if (diceValue1 === diceValue2) {
        document.querySelector("h1").innerHTML="Draw!";
    } else {
        document.querySelector("h1").innerHTML="Player Two Wins! <i class=\"fas fa-flag\"></i>";
    }
}

function refresh() {
    playerOneDice();
    playerTwoDice();
    determineWinner();
}

if (sessionStorage.getItem('reloaded') != null) {
    refresh();
} else {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

sessionStorage.setItem('reloaded', 'yes'); // could be anything