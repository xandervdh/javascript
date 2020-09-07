/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const btn = document.getElementById("run");
    let varr;
    btn.addEventListener("click", function (){
        window.lib.getPosts((rejected, notrejected) => {
            if (rejected){
                console.log(rejected);
            } else {
                console.log(notrejected);
                varr = notrejected;
                window.lib.getComments(varr, (rejected, notrejected) => {
                    if (rejected){
                        console.log(rejected);
                    } else {
                        console.log(notrejected);
                    }
                });
            }
        });
        /*window.lib.getComments(varr, (rejected, notrejected) => {
            if (rejected){
                console.log(rejected);
            } else {
                console.log(notrejected);
            }
        });*/
    })

})();
