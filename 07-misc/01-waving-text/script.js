/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let words = document.getElementById("target").innerText;
    let characters = words.split('');
    let wave = "";
    let size = [];
    size = [1, 2, 3, 4, 5, 4, 3, 2];
    for (let i = 0; i < characters.length; i++) {
        wave += "<span>" + characters[i] + "</span>";
    }
    document.getElementById("target").innerHTML = wave;
    //let span = document.getElementsByTagName("span");
    //span[0].remove();
    let letters = document.getElementsByTagName("span");
    for (let h = 0; h < letters.length; h++) {
        letters[h].style.fontSize = size[h % size.length] + "0px";
    }
    let offset = 0;
    function animation() {
        let o = 0;
        if (o < 10) {

            for (let h = 0; h < letters.length; h++) {
                let pointer = h + offset;
                letters[h].style.fontSize = size[pointer % size.length] + "0px";
            }
            offset++;
        }
        animate = setTimeout(function () {
            animation();
        }, 110);
    }

    document.getElementById("start").addEventListener("click", function () {
        animation();
    });

    document.getElementById("stop").addEventListener("click", function () {
        clearTimeout(animate);
    });
})();
