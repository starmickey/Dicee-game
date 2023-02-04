// Change dice's image to a random one

var randomNumber1 = Math.round(Math.random() * 5) + 1;
var randomNumber2 = Math.round(Math.random() * 5) + 1;

var diceImg1 = document.querySelector(".dice-img1");
var diceImg2 = document.querySelector(".dice-img2");

diceImg1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
diceImg2.setAttribute("src", "images/dice" + randomNumber2 + ".png");


// Change title to show who is the winner

var heading1 = document.querySelector("h1");
var flagIcon = "<i class='fa-solid fa-flag flag'></i>";

if (randomNumber1 > randomNumber2) {
    heading1.innerHTML = flagIcon + " Player 1 wins!";
} else if(randomNumber1 === randomNumber2){
    heading1.innerHTML = "Draw!";
} else {
    heading1.innerHTML = "Player 2 wins! " + flagIcon;
}
