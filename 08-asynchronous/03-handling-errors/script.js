/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const btn = document.getElementById("run");
    btn.addEventListener("click", function (){
        window.lib.getPersons((rejected, notrejected) => {
            if (rejected){
                console.error(rejected);
            } else {
                console.log(notrejected);
            }
        });
    })

})();
