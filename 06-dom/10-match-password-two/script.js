/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
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
            one.removeAttribute("class");
            two.removeAttribute("class");
        } else {
            one.setAttribute("class", "error");
            two.setAttribute("class", "error");
        }
    })

    function checkInput(){
        one = document.getElementById("pass-one");
        two = document.getElementById("pass-two");
    }

})();
