/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function tableCreate() {
        let element = document.getElementById("target");
        let tbl = document.createElement('table');
        tbl.setAttribute("width", "100%")
        tbl.setAttribute('border', '1');
        let tbdy = document.createElement('tbody');
        for (let i = 0; i < 10; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < 10; j++) {
                if (i == 10 && j == 10) {
                    break
                } else {
                    let td = document.createElement('td');
                    tr.appendChild(td)
                }
            }
            tbdy.appendChild(tr);
        }
        tbl.appendChild(tbdy);
        element.appendChild(tbl)
    }
    tableCreate();

    let table = document.getElementsByTagName("table");
    for (let a = 0; a <= 9; a++){
        if (a == 10 && i == 10) {
            break
        } else {
            for (let i = 0; i <= 9; i++) {
                let x = table[0].rows[i].cells;
                let y = i+1;
                let w = a + 1;
                let u = y*w;
                x[a].innerHTML = u;
            }
        }
    }

})();
