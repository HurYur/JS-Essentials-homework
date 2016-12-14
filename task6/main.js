var guessNumber,
    userNumber,
    count = 0;

guessNumber = Math.floor(Math.random()*100);
(function quessing() {
    userNumber = prompt('Type your number');
    count++;
    if (userNumber > guessNumber){
        alert('Your number is higher then mine, try again');
        quessing();
    }
    else if(userNumber < guessNumber){
        alert('Your number is lower then mine, try again');
        quessing();
    }
    else {
        alert('You are right, the number is ' + guessNumber +
            ' It takes you ' + count + ' steps to guess the number!');

    }
})();