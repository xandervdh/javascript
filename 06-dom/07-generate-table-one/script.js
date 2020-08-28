/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function tableCreate() {
        var element = document.getElementById("target");
        var tbl = document.createElement('table');
        tbl.setAttribute("width", "100%")
        tbl.setAttribute('border', '1');
        var tbdy = document.createElement('tbody');
        for (var i = 0; i < 10; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < 1; j++) {
                if (i == 10 && j == 1) {
                    break
                } else {
                    var td = document.createElement('td');
                    tr.appendChild(td)
                }
            }
            tbdy.appendChild(tr);
        }
        tbl.appendChild(tbdy);
        element.appendChild(tbl)
    }
    tableCreate();

})();
