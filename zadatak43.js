/*43. U�itati niz od 10 brojeva. Ispisati najve�i i najmanji �lan niza, zatim poredati �lanove niza
po veli�ini - od najve�eg prema najmanjem i ispisati ga, potom od najmanjeg prema
najve�em i njega tako�er ispisati
*/


var brojac = 0;
var niz = [];
while (brojac < 10) {
var unos = (parseInt(prompt("Unesite neki broj")));
niz.push(unos);
brojac++
function maksimalno(arr) {
  return Math.max.apply(null, arr);
}
function minimalno(arr) {
  return Math.min.apply(null, arr);
}
function mojafunkcija1() {
return niz.sort(function(a, b){return a - b});
}
function mojafunkcija2() {
return niz.sort(function(a, b){return b - a});
}
}
console.log("Najve�i broj:" +" "+maksimalno(niz));
console.log("Najmanji broj:" +" "+minimalno(niz));
console.log(mojafunkcija2());
console.log(mojafunkcija1());

