28. Zatražiti od korisnika da unosi brojeve sve dok ne unese broj koji je veæi od 20. Kada
unese taj broj, ispisati iz kojeg je pokušaja unesen broj veæi od 20.



var brojac = 0;
var unos = 0;
while (unos <= 20) {
unos = parseInt(prompt("Unesite neki broj:"));
brojac++;
}
console.log("Broj veæi od 20 je unešen iz" + " " + brojac + " " + "pokušaja");
