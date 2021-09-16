34. Deklarirati prazan niz i tražiti od korisnika da unosi brojeve dok suma unesenih èlanova
niza ne preðe 50. Nakon toga ispisati duljinu niza.


var unos;
niz = [];
var brojac=0;
var sum=0;
while (sum<50) {
var unos=parseInt(prompt("unesite brojeve?"));
niz.push(unos);
sum+=unos;
brojac++;
}
console.log(niz.length);
