28. Zatra�iti od korisnika da unosi brojeve sve dok ne unese broj koji je ve�i od 20. Kada
unese taj broj, ispisati iz kojeg je poku�aja unesen broj ve�i od 20.



var brojac = 0;
var unos = 0;
while (unos <= 20) {
unos = parseInt(prompt("Unesite neki broj:"));
brojac++;
}
console.log("Broj ve�i od 20 je une�en iz" + " " + brojac + " " + "poku�aja");
