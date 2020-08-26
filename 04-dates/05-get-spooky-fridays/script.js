/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let y;


    document.querySelector("button").onclick = function (event) {
        checkInput();
        let answer = "";
        for (x = 0; x <= 11; x++){
            let d = new Date(y, x, 13);
            var weekday = d.getDay();
            if (weekday === 5){
                answer += (d.toLocaleString("default", {month: "long"}) + "\n");
            }
        }
        alert(answer);
    }

    function checkInput(){
         y = document.getElementById("year").value;
    }

})();
