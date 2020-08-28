/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let input;
    checkInput();

    function textLength(value){
        let length = 7;
        let string = value.match(/\d/g);
        if(value.length > length && string.length >= 2) return false;
        return true;
    }

    input.onkeyup = function() {

        if (!textLength(this.value)){
            document.getElementById("validity").innerHTML = "ok";
        } else {
            document.getElementById("validity").innerHTML = "Not ok";
        }
    }

    function checkInput(){
        input = document.getElementById("pass-one");
    }

})();
