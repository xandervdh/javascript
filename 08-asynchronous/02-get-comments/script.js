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

    let run = document.getElementById("run");

    run.addEventListener("click", getPostsWithComments)

    function getPostsWithComments() {
        window.lib.getPosts(function (error, posts){
            posts.forEach(post => {
                window.lib.getComments(post.id, function (error, comments){
                    post.comment = comments;
                })
                console.log(post);
            })
        });
    }

    /*const btn = document.getElementById("run");
    let varr = "";
    btn.addEventListener("click", function (){
        window.lib.getPosts((rejected, notrejected) => {
            if (rejected){
                console.log(rejected);
            } else {
                console.log(notrejected);
                varr = notrejected;
            }
        });
        let comments = () => {
            for (let i = 0; i < varr.length; i++) {
                window.lib.getComments(i, (rejected, notrejected) => {
                    if (rejected) {
                        return rejected;
                    } else {
                        return notrejected;
                    }
                });
            }
        }
        let promise = new Promise(comments)
        console.log(promise);
    })*/

})();
