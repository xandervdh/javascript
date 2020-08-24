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
    var one = document.getElementById("op-one").value;
    var two = document.getElementById("op-two").value;

    document.getElementById("addition").addEventListener("click", function() {
        var addition = parseInt(one) + parseInt(two);
        alert(addition);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        var substraction = parseInt(one) - parseInt(two);
        alert(substraction);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        var multiplication = parseInt(one) * parseInt(two);
        alert(multiplication);
    });

    document.getElementById("division").addEventListener("click", function() {
        var division = parseInt(one) / parseInt(two);
        alert(division);
    });
})();
