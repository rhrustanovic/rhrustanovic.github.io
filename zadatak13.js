

13. Zatra�iti od korisnika da unese neki tekst. Izra�unati koliko rije�i ima unutar unesenog
teksta.  



var text = prompt("Unesite neki tekst");
var brojac = 1;
for(var i = 0; i < text.length; i++) {
if(text[i] == " ") {
brojac++;
}
}
console.log("Unijeli ste tekst koji se sastoji od " + brojac + " rije�i!");
