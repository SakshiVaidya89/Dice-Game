var randomNumber1 = Math.round(Math.random(randomNumber1)*6) + 1;
var diceImage = "dice"+ randomNumber1 +".png"
var randomImageSource = "images/" + diceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.round(Math.random(randomNumber2) * 6) +1;
var diceImage = "dice" + randomNumber2 + ".png";
var randomImageSource = "images/" + diceImage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
} else {
    document.querySelector("h1").innerHTML = "draw!"
}

