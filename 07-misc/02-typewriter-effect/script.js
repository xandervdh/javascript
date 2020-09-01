/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let words = "Je suis un texte qui va apparaître dans un effet \"machine à écrire\", un peu comme dans les films noirs. Sauf que... je ne sais pas qui est l'assassin ! Y en a-t-il vraiment un ? Habite-t-il au 21 ? Que de mystères !";
    let characters = words.split('');
    let target = document.getElementById("target");
    target.innerHTML = "";

    function showLetters (index){
        if (index < characters.length){
            target.append(characters[index++]);
            setTimeout(function () {showLetters(index);}, 200);

        }
    }
    showLetters(0);

})();
