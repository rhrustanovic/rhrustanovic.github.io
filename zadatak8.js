8. Zatra�iti od korisnika da unese ime i broj godina. Ponovite to 3 puta. Ukoliko postoje 2
osobe istih godina, ispi�ite njihova imena. U suprotnom provjerite postoje li 2 osobe
istog imena, ako postoje, ispi�ite njihovo ime te zbroj godina. Ukoliko nijedno nije
zadovoljeno, ispi�ite da nema imenjaka ni vr�njaka!

var ime1 = (prompt("UPI�I IME"));
var godina1 = parseInt(prompt("UPI�I BROJ GODINA"), 10);
var ime2 = (prompt("UPI�I DRUGO IME"));
var godina2 = parseInt(prompt("UPI�I BROJ GODINA"), 10);
var ime3 = (prompt("UPI�I TRE�E IME"));
var godina3 = parseInt(prompt("UPI�I BROJ GODINA"), 10);
var sum1 = godina1 + godina2 + godina3;
var sum2 = godina1 + godina2;
var sum3 = godina1 + godina3;
var sum4 = godina2 + godina3;


 if (godina1 == godina2 == godina3) {
console.log(ime1 +" "+ ime2 +" "+ ime3);
} 
else if (godina1 == godina2) {
console.log(ime1+" "+ime2);
}
 else if (godina1 == godina3) {
console.log(ime1 +" "+ ime3);
} 
else if (godina2 == godina3) {
console.log(ime2 +" "+ ime3);
} 
else if (ime1 === ime2 === ime3) {
console.log(ime1 +" "+ sum1);
} 
else if (ime1 === ime2) {
console.log(ime1 +" "+ sum2);
} 
else if (ime1 === ime3) {
console.log(ime1 +" "+ sum3);
} 
else if (ime2 === ime3) {
console.log(ime2 +" "+ (godina2+godina3));
} 
else {
console.log("Nema imenjaka ni vr�njaka!");
} 