/* 40. Deklarirati niz koji se sastoji od 5 rije�i. Napraviti novi niz koji se sastoji samo od onih
rije�i iz prvog niza koje imaju vi�e od 2 slova. Ispisati novi niz rije�i.
*/

var novi = new Array();
var niz = ["jabuka", "ne", "banana", "e", "nar"];
for (var i=0; i < niz.length; i++) {
if (niz[i].length > 2) {
novi.push(niz[i]);
}
}
console.log(novi);
