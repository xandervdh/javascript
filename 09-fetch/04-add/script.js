/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let submit = document.getElementById("run");
    let nameInput = document.getElementById("hero-name");
    let alterEgoInput = document.getElementById("hero-alter-ego");
    let powersInput = document.getElementById("hero-powers");
    let name;
    let alterEgo;
    let powers;


    submit.addEventListener("click", function () {
        if (nameInput.value !== "" && alterEgoInput.value !== "" && powersInput.value !== "") {
            name = nameInput.value;
            alterEgo = alterEgoInput.value;
            powers = powersInput.value.split(",");
            fetch("http://localhost:3000/heroes")
                .then(response => response.json())
                .then(data => addToData(data))
        } else {
            nameInput.style.border = "1px solid red";
            alterEgoInput.style.border = "1px solid red";
            powersInput.style.border = "1px solid red";
        }
    })

    function addToData(data) {

        data.push({"id": data.length+1, "name": name, "alterEgo": alterEgo, "abilities": powers});
        console.log(data);
    }

})();
