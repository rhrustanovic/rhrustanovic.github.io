/*3. Pomo�u prompt-a korisniku postaviti jednostavan matemati�ki izraz (npr: Koliko je
2+2?). U funkciji provjeriti to�nost unesenog odgovora. Ako je to�an, ispisati poruku i
vratiti true. Ako nije to�an, vratiti to�an rezultat u glavni program, gdje se zatim treba
ispisati poruka "Va� odgovor je neto�an, to�an odgovor glasi: ...".
*/




var pitanje = parseInt(prompt('Koliko je 2 + 2 ?'));
function myFun() {
if (pitanje === 4) {
return "Ta�no ste odgovorili, rezultat je 4.";
}
else {
console.log("Va� odgovor je neta�an, ta�an odgovor glasi 4.");
}
}
myFun();

