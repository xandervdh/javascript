/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    /*let buttonOne = document.getElementById("part-one");
    let buttonTwo = document.getElementById("part-two");
    let buttonThree = document.getElementById("part-three");
    let buttonFour = document.getElementById("part-four");*/
    let number = document.getElementById("target");

    let buttons = document.getElementsByTagName("button");
    /*let outputOne;
    let outputTwo;
    let outputThree;
    let outputFour;*/

    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function (){
            numberCheck();

            if (buttons[i].innerText < buttons[i].dataset.max){
                button[i]++;
                if (button[i] < 10){
                    button[i] = "0" + button[i];
                }
            } else {
                button[i] = buttons[i].dataset.min;
            }
            buttons[i].innerHTML = button[i];
            let output = "";
            for (let y = 0; y < button.length; y++){
                output += button[y];
            }
            //output = button[i];
            number.innerHTML = "0" + output;
        });
    }

    /*buttonOne.addEventListener("click", function () {
        numberCheck();
        if (outputOne < buttonOne.dataset.max) {
            outputOne++;
        } else {
            outputOne = buttonOne.dataset.min;
        }
        buttonOne.innerHTML = outputOne;
        number.innerHTML = "0" + outputOne + outputTwo + outputThree + outputFour;
    });

    buttonTwo.addEventListener("click", function () {
        numberCheck();
        if (outputTwo < buttonTwo.dataset.max) {
            outputTwo++;
            if (outputTwo < 10) {
                outputTwo = "0" + outputTwo;
            }
        } else {
            outputTwo = "00";
        }
        buttonTwo.innerHTML = outputTwo;
        number.innerHTML = "0" + outputOne + outputTwo + outputThree + outputFour;
    });

    buttonThree.addEventListener("click", function () {
        numberCheck();
        if (outputThree < 99) {
            outputThree++;
            if (outputThree < 10) {
                outputThree = "0" + outputThree;
            }
        } else {
            outputThree = "00";
        }
        buttonThree.innerHTML = outputThree;
        number.innerHTML = "0" + outputOne + outputTwo + outputThree + outputFour;
    });

    buttonFour.addEventListener("click", function () {
        numberCheck();
        if (outputFour < 99) {
            outputFour++;
            if (outputFour < 10) {
                outputFour = "0" + outputFour;
            }
        } else {
            outputFour = "00";
        }
        buttonFour.innerHTML = outputFour;
        number.innerHTML = "0" + outputOne + outputTwo + outputThree + outputFour;
    });*/

    function numberCheck() {
        button = [];
        for (let x = 0; x < buttons.length; x++){
            button[x] = buttons[x].innerText;
            console.log(button);
        }

    }

})();
