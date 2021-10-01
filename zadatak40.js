/* 40. Deklarirati niz koji se sastoji od 5 rijeèi. Napraviti novi niz koji se sastoji samo od onih
rijeèi iz prvog niza koje imaju više od 2 slova. Ispisati novi niz rijeèi.
*/

var novi = new Array();
var niz = ["jabuka", "ne", "banana", "e", "nar"];
for (var i=0; i < niz.length; i++) {
if (niz[i].length > 2) {
novi.push(niz[i]);
}
}
console.log(novi);
