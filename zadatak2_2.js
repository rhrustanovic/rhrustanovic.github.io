/*2. Jedostavan kalkulator - Zatražiti od korisnika unos dva broja i znaka za operaciju koju želi
obaviti nad brojevima (+, -, *, /). Napisati funkciju koja imitira rad jednostavnog
kalkulatora: prima dva broja, i znak operacije. Ovisno o znaku, obaviti traženu operaciju.
Funkcija vraæa rezultat u glavni program, zatim je on ispisuje.
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
function koliènik(a, b){
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
console.log("Koliènik brojeva je: " + koliènik(br1,br2));
}
else {
console.log("Unijeli ste pogrešan znak");
}
