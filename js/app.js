var numberOfGuess = 10;
var guessText = document.querySelector('.guessText');
var hintText = document.querySelector('.hintText');
var answerArea = document.querySelector('.answerArea')
guessText.innerHTML=`<h3>You have ${numberOfGuess} guess left.</h3>`
var intermediateAnswer;

var totalValue;
var answer=[];
let wordStatus=null;
//  #fab1a0
window.addEventListener('DOMContentLoaded', (e) => {
    var i
    fetch('/js/data.json').then(
        (res) => {
            return res.json();
        }).then((data) => {
            totalValue=Math.floor(Math.random()*data.length)
            hintText.innerHTML=`Hint: ${data[totalValue].hint}`
            answer=data[totalValue].value.toLowerCase();
            for(i=0;i<answer.length;i++){
                //intermediateAnswer+='_'
                answerArea.innerHTML+="_"
            }
            intermediateAnswer=answerArea.innerHTML.toString()
        }).catch((err) => {
            console.log(err)
        })
});

function btnClicked(value){
    var x = document.querySelectorAll('alphabets')
    var status=document.getElementById(value)
    if(answer.indexOf(value)>=0){

        var index=answer.indexOf(value);

        status.style.background='#2ed573'
        status.style.color='white'
        
        wordStatus= intermediateAnswer.split('').map(value=>(answer.indexOf(value)>=0?value:"_")).join();

        answerArea.innerHTML=wordStatus
        
        
    }
    else{

        status.style.background='#ff6b81'
        status.style.color='white'

        numberOfGuess--

        if(numberOfGuess<0){
            answerArea.innerHTML=answer
            guessText.style.color='red'
          x.remove();
        }
    }
    guessText.innerHTML=`<h3>You have ${numberOfGuess} guess left.</h3>`
    
    
}


var playAgain=document.querySelector('.playAgain').addEventListener('click',function reload(){
    window.location.reload()
})
