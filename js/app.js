var numberOfGuess = 10;
var guessText = document.querySelector('.guessText');
var hintText = document.querySelector('.hintText');
var answerArea = document.querySelector('.answerArea')
guessText.innerHTML = `<h3>You have ${numberOfGuess} guess left.</h3>`
var intermediateAnswer;

var totalValue;
var answer = [];
let wordStatus;
var answerValue = 0
window.addEventListener('DOMContentLoaded', (e) => {
    var i

    fetch('/js/data.json').then(
        (res) => {
            return res.json();
        }).then((data) => {
            totalValue = Math.floor(Math.random() * data.length)
            hintText.innerHTML = `Hint: ${data[totalValue].hint}`
            answer = data[totalValue].value.toLowerCase();

            for (i = 0; i < answer.length; i++) {
                answerArea.innerHTML += "_"
            }

            intermediateAnswer = answerArea.innerHTML
            console.log(intermediateAnswer)
        }).catch((err) => {
            console.log(err)
        })
});

function btnClicked(value) {
    var x = document.querySelectorAll('alphabets')
    var status = document.getElementById(value)
    if (answer.indexOf(value) >= 0) {


        answerValue++;
        if (answerValue <= answer.length) {
            var index = answer.indexOf(value);
            var newStr;
            status.style.background = '#2ed573'
            status.style.color = 'white'

            wordStatus = intermediateAnswer.split('')

            wordStatus[index] = value

            newStr = wordStatus.join("");

            answerArea.innerHTML = newStr

            intermediateAnswer = newStr

            console.log(answerValue)

        } else {
            x.remove();
        }
    }
    else {
        if (answerValue >= answer.length) {
            x.remove()

        } else {
            status.style.background = '#ff6b81'
            status.style.color = 'white'

            numberOfGuess--

            if (numberOfGuess < 0) {
                answerArea.innerHTML = answer
                guessText.style.color = 'red'
                x.remove();
            }
        }

    }


    if(answerValue>=answer.length){
        guessText.innerHTML = `<h3>Congratulations !!!. Click Play Again</h3>`
    }else{
        guessText.innerHTML = `<h3>You have ${numberOfGuess} guess left.</h3>`

    }


}


var playAgain = document.querySelector('.playAgain').addEventListener('click', function reload() {
    window.location.reload()
})
