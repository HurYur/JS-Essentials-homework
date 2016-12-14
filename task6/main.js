var guessNumber,
    userNumber;

guessNumber = Math.floor(Math.random()*100);
(function quessing() {
    userNumber = prompt('Type your number');

    if (userNumber > guessNumber){
        alert('Your number is higher then mine, try again');
        quessing();
    }
    else if(userNumber < guessNumber){
        alert('Your number is lower then mine, try again');
        quessing();
    }
    else {
        alert('You are right, the number is ' + guessNumber);

    }
})();