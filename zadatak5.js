
5. Zatražiti od korisnika unos njegove godine roðenja. Izraèunati starost korisnika i ispisati
odgovarajuæu poruku (‘Punoljetni ste’/’Niste punoljetni’). Ne uzeti u obzir ako korisnik
unese nevaljanu godinu (npr. 2016) - u tom sluèaju ispisati odgovarajuæu poruku.  



var godina = parseInt(prompt("unesi godinu roðenja"), 10);
var result = 2021 - godina;
if (godina > 2021 || godina < 1900) {
console.log("Unijeli ste pogrešnu godinu");
}
else if (result >= 18) { 
console.log("Punoljetni ste");
}
else {
console.log("Maloljetni ste");
}