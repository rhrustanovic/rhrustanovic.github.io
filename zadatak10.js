10. Zatra�iti od korisnika da unese odgovor na pitanje ''Bojite li se zubara?''. Ukoliko je
odgovor negativan, ispi�ite ''Hrabri ste!!'', u suprotnom, ispi�ite ''I ja!!''. Za ostale
odgovore ispisati da je unos nepravilan. Ovaj zadatak rije�iti preko switch-case-a



var a = (prompt("BOJITE LI SE ZUBARA?"));
a = a.toLowerCase();
switch (a) {
case "da":
result = "Hrabri ste!!";
break;
case "ne":
result = "I ja!!";
break;
default:
result = "Unos je nepravilan";
}
console.log(result);