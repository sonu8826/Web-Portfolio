//Create the numbers div tags dynamically
for(var i=1; i<=90; i++){
    var divTag = document.createElement("div");
    divTag.setAttribute("class", "coinCircle");
    divTag.setAttribute("id", "coin_" + i);
    divTag.innerText = i;

    document.querySelector('.container').append(divTag);
}
var pickedCoins = [];
var pickRandomCoin = () => {
    var randomCoin = Math.round(Math.random() * 90);
    while(pickedCoins.indexOf(randomCoin) != -1) {
        randomCoin = Math.round(Math.random() * 90);
    }
    var coinId = '#coin_' + randomCoin;
    document.querySelector(coinId).classList.add('highlight');
    if (pickedCoins.length == 90) {
        alert("Game done")
    }
}