/*2. Jedostavan kalkulator - Zatra�iti od korisnika unos dva broja i znaka za operaciju koju �eli
obaviti nad brojevima (+, -, *, /). Napisati funkciju koja imitira rad jednostavnog
kalkulatora: prima dva broja, i znak operacije. Ovisno o znaku, obaviti tra�enu operaciju.
Funkcija vra�a rezultat u glavni program, zatim je on ispisuje.
*/

var br1 = parseInt(prompt('Unesite prvi broj:'));
var br2 = parseInt(prompt('Unesite drugi broj:'));
var znak =prompt('Unesite znak +, -, * ili /:');

function zbir(a, b){
return (a+b);
}
function razlika(a, b){
return (a-b);
}
function proizvod(a, b){
return (a * b);
} 
function koli�nik(a, b){
return (a / b);
}
if (znak == "+") {
console.log("Zbir brojeva je: " + zbir(br1,br2));
}
else if (znak == "-") {
console.log("Razlika brojeva je: " + razlika(br1,br2));
}
else if (znak == "*") {
console.log("Proizvod brojeva je: " + proizvod(br1,br2));
}
else if (znak == "/") {
console.log("Koli�nik brojeva je: " + koli�nik(br1,br2));
}
else {
console.log("Unijeli ste pogre�an znak");
}
