/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let one;
    let two;

    document.getElementById("run").addEventListener("click", function (){
        checkInput();
        if (one.value === two.value){
            one.style.border = "";
            two.style.border = "";
        } else {
            one.style.border = "1px solid red";
            two.style.border = "1px solid red";
        }
    })

    function checkInput(){
        one = document.getElementById("pass-one");
        two = document.getElementById("pass-two");
    }

})();
