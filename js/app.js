
var numberOfGuess = 10;
var guessText = document.querySelector('.guessText');
var hintText = document.querySelector('.hintText');

var totalValue;
var answer;
window.addEventListener('DOMContentLoaded', (e) => {

    fetch('/js/data.json').then(
        (res) => {
            
            return res.json();
        }).then((data) => {
            totalValue=Math.floor(Math.random()*data.length)
            hintText.innerHTML=`Hint: ${data[totalValue].hint}`
            answer=data[totalValue].value
            console.log(answer)
        }).catch((err) => {
            console.log(err)
        })
});

function btnClicked(value) {
    console.log(value)
}