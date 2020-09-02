/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    console.log(randomNumber);
    let guesses = 0;
    let guess;


    function guessing() {
        guess = window.prompt("what is your guess?");
    }

    while (guesses < 5) {
        guessing()
        if (guesses < 4) {
            if (guess < randomNumber) {
                guesses++;
                alert("the number is higher, gues " + guesses + "/5.");
                //guessing();
            } else if (guess > randomNumber) {
                guesses++;
                alert("the number is lower, gues " + guesses + "/5.");
                //guessing();
            } else {
                alert("you are right! you got it in " + guesses + " tries.");
                break;
            }
        } else {
            alert("you lost! the number was " + randomNumber + "! \n better luck next time.");
            break;
        }
    }


})();
