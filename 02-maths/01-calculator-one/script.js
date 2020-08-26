/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let one;
    let two;

    document.getElementById("addition").addEventListener("click", function() {
        checkInput();
        let addition = parseInt(one) + parseInt(two);
        alert(addition);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        checkInput();
        let substraction = parseInt(one) - parseInt(two);
        alert(substraction);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        checkInput();
        let multiplication = parseInt(one) * parseInt(two);
        alert(multiplication);
    });

    document.getElementById("division").addEventListener("click", function() {
        checkInput();
        let division = parseInt(one) / parseInt(two);
        alert(division);
    });


function checkInput(){
     one = document.getElementById("op-one").value;
     two = document.getElementById("op-two").value;
}

})();