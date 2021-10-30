/*4. Napraviti funkciju koja je na proslijeðeni mjesec vratiti koliko dana ima u tom mjesecu.
Rezultat ispisati u glavnom programu.
*/



function br_dana(mjesec){
if(mjesec === "sijecanj" || mjesec === "ozujak" || mjesec === "svibanj" || mjesec ===
"srpanj" || mjesec === "kolovoz" || mjesec === "listopad" || mjesec === "prosinac"){
return 31;
}
else if(mjesec === "travanj" || mjesec === "lipanj" || mjesec === "rujan"|| mjesec ===
"studeni"){
return 30;
}
else if(mjesec === "veljaca"){
return 28;
}
else {
return "Pogresno ste unijeli naziv mjeseca!Molimo unesite ponovo";
}
}
var mjesec = prompt("Molimo unesite mjesec, èiji zelite znati broj dana : ");
var broj = br_dana(mjesec);
console.log("Mjesec " + mjesec + " ima " +broj+ " dana!");




