
function rolarDado(dado) {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    if (randomNumber1 === 1) {
        document.querySelector(dado).setAttribute("src", "images/dice1.png")
    } else if (randomNumber1 === 2) {
        document.querySelector(dado).setAttribute("src", "images/dice2.png")
    } else if (randomNumber1 === 3) {
        document.querySelector(dado).setAttribute("src", "images/dice3.png")
    } else if (randomNumber1 === 4) {
        document.querySelector(dado).setAttribute("src", "images/dice4.png")
    } else if (randomNumber1 === 5) {
        document.querySelector(dado).setAttribute("src", "images/dice5.png")
    } else if (randomNumber1 === 6) {
        document.querySelector(dado).setAttribute("src", "images/dice6.png")
    }
    return randomNumber1;
}

function jogar() {
    var num1 = rolarDado(".img1");
    var num2 = rolarDado(".img2");
    if (num1 === num2){
        jogar();
    }
    else if(num1 > num2){
        document.querySelector("h1").innerHTML = "Vitoria do jogador1!&#x1F3C6";
    }
    else{
        document.querySelector("h1").innerHTML = "&#x1F3C6Vitoria do jogador2!";
    }
}