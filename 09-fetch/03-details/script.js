/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let run = document.getElementById("run");
    let input;
    run.addEventListener("click", function (){
        checkInput();
        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(data => appendData(data))
        function appendData(data){
            console.log(data);
            let target = document.getElementById("target");
            target.innerHTML = '<h4 class="title">\n' +
                '<strong class="name">' + data[input-1].name + '</strong>\n' +
                '<em class="alter-ego">' + data[input-1].alterEgo + '</em>\n' +
                '</h4>\n' +
                '<p class="powers">' + data[input-1].abilities + '</p>';
        }
    })
    function checkInput() {
        input = document.getElementById("hero-id").value;
    }
})();
