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
    size[0] = [1, 2, 3, 4, 5, 4, 3, 2];
    size[1] = [2, 3, 4, 5, 4, 3, 2, 1];
    size[2] = [3, 4, 5, 4, 3, 2, 1, 2];
    size[3] = [4, 5, 4, 3, 2, 1, 2, 3];
    size[4] = [5, 4, 3, 2, 1, 2, 3, 4];
    size[5] = [4, 3, 2, 1, 2, 3, 4, 5];
    size[6] = [3, 2, 1, 2, 3, 4, 5, 4];
    size[6] = [2, 1, 2, 3, 4, 5, 4, 3];
    for (let i = 0; i < characters.length; i++) {
        wave += "<span>" + characters[i] + "</span>";
    }
    document.getElementById("target").innerHTML = wave;
    //let span = document.getElementsByTagName("span");
    //span[0].remove();
    let letters = document.getElementsByTagName("span");
    for (let h = 0; h < letters.length; h++) {
        letters[h].style.fontSize = size[0][h % size[0].length] + "0px";
    }
    let array = 0;

    function animation() {
        let o = 0;
        if (o < 10) {

            for (let h = 0; h < letters.length; h++) {
                let move = array % size.length;
                letters[h].style.fontSize = size[move][h % size[move].length] + "0px";
            }
            array++;
            o++;
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

    /*let letters = document.getElementsByTagName("span");
    for (let x = 0; x < letters.length; x++){
        let y = x+1;
        let array = size[x];
        console.log(array);
        letters[y].style.fontSize = size[0][x % size[0].length] + "0px";
    }*/


})();
