17. U�itati dva broja, zatim ispisati svaki drugi broj izme�u njih koji je djeljiv sa 2 i 3.


var a = parseInt(prompt("Unesi broj"), 10);
var b = parseInt(prompt("Unesi broj"), 10);
for (i=a; i<b; i++) {
if (i%2 === 0 && i%3 === 0) {
console.log(i);
}
}

