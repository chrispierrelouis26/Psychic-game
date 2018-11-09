var arrAlphabet = genCharArray('a', 'z');

var computerLetter = randomLetter(arrAlphabet);
console.log("test");

var guessGame = {
    currentGuessLetter: "",
    Wins: 0,
    Losses: 0,
    GuessesLeft: 10,
    GuessedLetters: [],
    GameOver: false,

    CheckLetter: function (varLetter) {
        if (varLetter === this.currentGuessLetter) {
        // add code to win the game
        this.Wins++;
        this.newGame();
        alert("you win this game!");
        } else {
            //code here incase of loss
            if (this.GuessesLeft - 1 === 0){
                this.GameOver = true;
                this.Losses++;
                this.newGame();
                alert("Not this time!");
            }
            else {
            this.GuessesLeft--;
            this.GuessedLetters.push(varLetter);
     
            }
        
        }
    

    },
    setLetterToGuess: function () {
        this.currentGuessLetter = randomLetter(arrAlphabet);
        var actualLetter = document.getElementById("actual");
        actualLetter.innerHTML = this.currentGuessLetter;
    },
    newGame: function () {
        this.GameOver = false;
        this.GuessedLetters = [];
        this.GuessesLeft = 10;
        this.setLetterToGuess();


    },
    updateScore : function(){
        var winHandle = document.getElementById("win");
        winHandle.innerHTML = this.Wins;

        var lossHandle = document.getElementById("loss");
        lossHandle.innerHTML= this.Losses;
        
        var leftHandle = document.getElementById("left");
        leftHandle.innerHTML = this.GuessesLeft;

        var currentHandle = document.getElementById("current");
        currentHandle.innerHTML = this.GuessedLetters.toString();

        var actualLetter = document.getElementById("actual");
        actualLetter.innerHTML = this.currentGuessLetter;
    }


}

function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
function randomLetter(array) {
    var rndLetter = array[Math.floor(Math.random() * array.length)];
    return rndLetter;
}
var computerLetter = randomLetter(arrAlphabet);

guessGame.currentGuessLetter=computerLetter
document.onkeyup = function(event){
    var userGuess = event.key;
    guessGame.CheckLetter(userGuess);
    guessGame.updateScore();
}        