/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   let button = document.getElementById("increment");
   let target = document.getElementById("target");
   let number = localStorage.getItem("number");
   if (number == null){
       number = "0";
   }
   target.innerHTML = number;

   button.addEventListener("click", function (){
       number++;
       localStorage.setItem("number", number);
       target.innerHTML = number;
   });

})();
