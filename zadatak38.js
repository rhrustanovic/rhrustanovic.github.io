/*38. U�itavati brojeve u niz sve dok im zbroj ne prije�e 150. Napraviti novi niz sastavljen od
neparnih brojeva iz prvog niza. Ispisati novi niz sortiran od najve�eg prema najmanjem.
*/

var sum = 0;
var niz = [];
var neparniniz = [];

while (sum <=150) {
var unos = (parseInt(prompt("Unesite neki broj")));
sum += unos;
if (unos % 2 == 1) {
neparniniz.push(unos);
neparniniz.sort(function(a,b){return b-a});
}
}
console.log(neparniniz);