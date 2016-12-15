var guessNumber,
    userNumber,
    countGuess = 0,
    game = 0,
    win = 0,
    gap = 5,
    prize = [10, 5, 2];

function startGame() {
    if(confirm('Do you want to play the game?') == true){
        quessing();
    }
    else {
        console.log('Today you will not win the jackpot, but you could');
    }
}
function quessing() { //Here we generete number to quess
    if (game >= 1) { //If player continue to play, then increase the gap 2 times
        gap = gap * 2;
        guessNumber = Math.floor(Math.random() * gap);
        doGame();
    }
    else { // Usual first game gap
        guessNumber = Math.floor(Math.random() * gap);
        doGame();
    }
}
function doGame() { //Here we compare quessing
    if (countGuess < 3){
        userNumber = prompt('Type your number from 0 to ' + gap + guessNumber);
        countGuess++;
        if (userNumber > guessNumber) {
            alert('Your number is higher then mine, try again');
            doGame();
        } else if (userNumber < guessNumber) {
            alert('Your number is lower then mine, try again');
            doGame();
        } else {
            alert('You are right, the number is ' + guessNumber);
            if (game >= 1){
                win = win + prize[countGuess - 1] * Math.pow(3, game);
            }
            else{
                win = prize[countGuess - 1]; // first game prize
            }
            playAgain(win)
        }
    }
    else{ //The player lose game
        console.log('Your win - 0$');
        game -= 1;
        playAgain(win)
    }
}
function playAgain(win) {
    if(confirm('Do you want to play one more time?') == true){
        countGuess = 0;
        game += 1;
        quessing();
    }
    else {
        if(win > 0){
            console.log('Thanks for the game! Your win is ' + win + '$');
        }
        else{
            console.log('Thanks for the game! Your win is 0$')
        }
    }
}