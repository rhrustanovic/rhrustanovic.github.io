18. Zatražiti unos dvoznamenkastog broja. Ispisati sve njegove djelitelje. Ako nije
dvoznamenkast, samo treba ispisati odgovarajuæu poruku.


var a = parseInt(prompt("Unesite dvocifren broj"), 10);
var b = 0;
if (a>9 && a<100) {
for (i=a; i>b; i--) {
if (a%i===0) {
console.log(i);
}
}
}
else {
console.log("unijeli ste pogrešan broj");
} 
