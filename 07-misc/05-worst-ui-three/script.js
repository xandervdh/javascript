/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let buttons = document.getElementsByTagName("button");
    let input = document.getElementsByTagName("input");
    let target = document.getElementById("target");
    let value = [];

    for (let i = 0; i < buttons.length; i++){

        let min = parseInt(input[i].dataset.min);
        let max = parseInt(input[i].dataset.max);

        buttons[i].addEventListener("click", function (){
            numberCheck();
            let output = Math.floor(Math.random() * (max - min + 1) + min);

            if (output < 10){
                output = "0" + output;
            }

            input[i].setAttribute("value", output);
            value[i] = output;

            let number = "0";
            for (let y = 0; y < value.length; y++){
                number += value[y];
            }

            target.innerHTML = number;
        });
    }
    function numberCheck() {
        for (let x = 0; x < input.length; x++){
            value[x] = input[x].value;
        }
    }

})();
