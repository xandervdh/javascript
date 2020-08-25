/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let number;

    document.getElementById("run").addEventListener("click", function() {

        checkInput();
        let result = 1;
        for (var i = number - 1; i >= 1; i--) {
            result += result * i;
        }
        alert(result);
    });
    function checkInput(){
        number = document.getElementById("number").value;
    }

})();
