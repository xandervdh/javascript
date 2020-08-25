/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    var d = new Date;
    var month =  d.toLocaleString("default", {month: "long"});
    var day = d.toLocaleDateString("default", { weekday: "long"});
    var currDate = day + " " + d.getDate() + " " + month + " " + d.getFullYear() + ", " + d.getHours() + "h" + d.getMinutes();
    document.getElementById("target").innerHTML = currDate;

})();
