/*
1. Zatra�iti od korisnika da unese 2 broja. Ukoliko je prvi broj ve�i od drugog, pozvati
funkciju koja �e oduzeti drugi od prvog. U suprotnom, pozvati funkciju koja �e ih
zbrojiti. Ispisati rezultat u oba slu�aja.
*/


var broj1 = parseInt(prompt('Unesite prvi broj:'));
var broj2 = parseInt(prompt('Unesite drugi broj:'));
function zbroj(br1, br2){
return br1 + br2;
}
function razlika(br1, br2){
return br1 - br2;
}
if(broj1 > broj2){
console.log('Razlika brojeva je: ' + razlika(broj1, broj2));
}
else{
console.log('Zbroj brojeva je: ' + zbroj(broj1, broj2));
}