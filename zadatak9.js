9. Zatra�iti od korisnika da unese 3 ocjene. Ukoliko je jedna od njih 1, ispi�ite ''Niste
zadovoljili''. U suprotnom, zbrojite sve 3 ocjene i izra�unajte prosjek. Ukoliko je prosjek
manji od 2.5, ispi�ite ''Dovoljan 2'', za prosjek izme�u 2.5 i 3.5 ispi�ite ''Dobar 3'', za
prosjek izme�u 3.5 i 4.5 ispi�ite ''Vrlo dobar 4'', za prosjek iznad 4.5 ispi�ite ''Odli�an 5''.



var ocjena1 = parseInt(prompt("UNESITE PRVU OCJENU"), 10);
var ocjena2 = parseInt(prompt("UNESITE DRUGU OCJENU"), 10);
var ocjena3 = parseInt(prompt("UNESITE TRE�U OCJENU"), 10);
var prosjek = (ocjena1 + ocjena2 + ocjena3)/3;

if (ocjena1 == 1 || ocjena2 == 1 || ocjena3 == 1) {
console.log("Niste zadovoljili");
}
else if (prosjek < 2.5) {
console.log("Dovoljan 2");
}
else if (prosjek >= 2.5 && prosjek < 3.5) {
console.log("Dobar 3");
}
else if (prosjek >= 3.5 && prosjek < 4.5) {
console.log("Vrlo dobar 4");
}
else if (prosjek >= 4.5 && prosjek <= 5) {
console.log("Odli�an 5");
}
else {
console.log("Unijeli ste pogre�ne ocjene");
}