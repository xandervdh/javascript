/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.querySelector("button").onclick = function (event) {
        var d = new Date();
        var dobd = document.getElementById("dob-day").value;
        var dobm = document.getElementById("dob-month").value;
        var doby = document.getElementById("dob-year").value;
        var dob = dobd + "/" + dobm + "/" + doby;
        var bday = new Date(dob);
        var age = d.getFullYear() - bday.getFullYear();
        var m = d.getMonth() - bday.getMonth();

        if (m < 0 || (m === 0 && d.getDate() < bday.getDate())) {
            age = age - 1;
        }
        alert(age);
    }

})();
