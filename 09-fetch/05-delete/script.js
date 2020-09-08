/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let submit = document.getElementById("run");
    let input;

    submit.addEventListener("click", function () {
        checkInput();
        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(data => removeData(data))
    })

    function removeData(data){
        console.log(data);
        console.log(input);
        delete data[input-1];
        console.log(data);
    }

    function checkInput() {

        input = document.getElementById("hero-id").value;
    }
})();
