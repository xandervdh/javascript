/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let words = "Woo-hoo! I'm making waves! Wéééé! Oh ... I think I'm having seasickness ...";
    let characters = words.split('');
    let wave = "";
    let size = [1, 2, 3, 4, 5, 4, 3, 2]
    for (let i = 0; i < characters.length; i++){
        wave += "<span>" + characters[i] + "</span>";
    }
    document.getElementById("target").innerHTML = wave;
    let letters = document.getElementsByTagName("span");
    for (let x = 0; x < letters.length; x++){
        let y = x+1;
        letters[y].style.fontSize = size[x % size.length] + "0px";
    }


})();
