29. Pomo�u while petlje omogu�ite korisniku da unese to�no 8 brojeva. Pomo�u console.log
funkcije ispi�ite �etvrti une�eni broj te zbroj prvog i petog unesenog broja.


var brojac = 0;
var unos = 0;
var sum = 0;
while (brojac < 8) {
unos = parseInt(prompt("Unesite neki broj:"));
brojac++;
if (brojac === 4) {
console.log(unos);
}
if (brojac === 1) {
sum += unos;
} 
if (brojac === 5) {
sum += unos;
}
}
console.log(sum);