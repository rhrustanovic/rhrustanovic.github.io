/*39. Uèitavati brojeve u niz sve dok im zbroj ne prijeðe 250. Napraviti novi niz sastavljen od
parnih brojeva iz prvog niza. Ispisati novi niz sortiran od najmanjeg prema najveæem.
*/

var sum = 0;
var niz = [];
var parniniz = [];

while (sum <=250) {
var unos = (parseInt(prompt("Unesite neki broj")));
sum += unos;
if (unos % 2 == 0) {
parniniz.push(unos);
parniniz.sort(function(a,b){return a-b});
}
}
console.log(parniniz);
