
/*41. Deklarirati niz koji se sastoji od 5 rijeèi. Ispisati koja je najduža i najkraæa rijeè iz niza.
*/


var a;
var b;
var niz = ["Barcelona", "lacio", "lion", "Roma", "psv", "Rozenborg", "Hertha"];
var min = niz[0].length;
var max = niz[0].length;
for (var i=0; i < niz.length; i++) {
if (niz[i].length < min) {
min = niz[i].length;
a = niz[i];
}
if (niz[i].length > max) {
max = niz[i].length;
b = niz[i];
}
if (niz[0].length > niz[i].length) {
b = niz[0];
}
if (niz[0].length < niz[i].length) {
a = niz[0];
}
}
console.log("Najduža rijeè niza je" +" "+ b);
console.log("Najkraèa rijeè niza je" +" "+ a);
