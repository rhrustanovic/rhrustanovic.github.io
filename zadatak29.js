29. Pomoæu while petlje omoguæite korisniku da unese toèno 8 brojeva. Pomoæu console.log
funkcije ispišite èetvrti unešeni broj te zbroj prvog i petog unesenog broja.


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