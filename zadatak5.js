
5. Zatra�iti od korisnika unos njegove godine ro�enja. Izra�unati starost korisnika i ispisati
odgovaraju�u poruku (�Punoljetni ste�/�Niste punoljetni�). Ne uzeti u obzir ako korisnik
unese nevaljanu godinu (npr. 2016) - u tom slu�aju ispisati odgovaraju�u poruku.  



var godina = parseInt(prompt("unesi godinu ro�enja"), 10);
var result = 2021 - godina;
if (godina > 2021 || godina < 1900) {
console.log("Unijeli ste pogre�nu godinu");
}
else if (result >= 18) { 
console.log("Punoljetni ste");
}
else {
console.log("Maloljetni ste");
}