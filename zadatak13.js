

13. Zatražiti od korisnika da unese neki tekst. Izraèunati koliko rijeèi ima unutar unesenog
teksta.  



var text = prompt("Unesite neki tekst");
var brojac = 1;
for(var i = 0; i < text.length; i++) {
if(text[i] == " ") {
brojac++;
}
}
console.log("Unijeli ste tekst koji se sastoji od " + brojac + " rijeèi!");
