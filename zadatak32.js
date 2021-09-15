32. Zatražiti od korisnika da unese 2 broja. Koristeæi do-while petlju ispisati neparne
brojeve koji se nalaze izmeðu ta dva broja.


var broj1 = parseInt(prompt("Unesite 1.broj:"));
var broj2 = parseInt(prompt("Unesite 2.broj:"));
var brojac = 0;
if(broj1 > broj2) {
var pom = broj1;
broj1 = broj2;
broj2 = pom;
}
brojac = broj1;
do {
if(brojac % 2 == 1){
console.log(brojac);
}
brojac++;
} while(brojac < broj2);