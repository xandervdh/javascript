/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let one;
    let two;

    let performOperation = function(operation) {
        let symbol = document.getElementById(operation).id;
        switch (operation){
            case "addition":
                checkInput();
                let addition = parseInt(one) + parseInt(two);
                alert(addition);
                break;
            case "substraction":
                checkInput();
                let substraction = parseInt(one) - parseInt(two);
                alert(substraction);
                break;
            case "multiplication":
                checkInput();
                let multiplication = parseInt(one) * parseInt(two);
                alert(multiplication);
                break;
            case "division":
                checkInput();
                let division = parseInt(one) / parseInt(two);
                alert(division);
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
    function checkInput(){
        one = document.getElementById("op-one").value;
        two = document.getElementById("op-two").value;
    }
})();
