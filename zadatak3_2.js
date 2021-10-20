/*3. Pomoæu prompt-a korisniku postaviti jednostavan matematièki izraz (npr: Koliko je
2+2?). U funkciji provjeriti toènost unesenog odgovora. Ako je toèan, ispisati poruku i
vratiti true. Ako nije toèan, vratiti toèan rezultat u glavni program, gdje se zatim treba
ispisati poruka "Vaš odgovor je netoèan, toèan odgovor glasi: ...".
*/




var pitanje = parseInt(prompt('Koliko je 2 + 2 ?'));
function myFun() {
if (pitanje === 4) {
return "Taèno ste odgovorili, rezultat je 4.";
}
else {
console.log("Vaš odgovor je netaèan, taèan odgovor glasi 4.");
}
}
myFun();

