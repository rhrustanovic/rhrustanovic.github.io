
16. Zatražiti od korisnika da unese broj. Ukoliko je paran, ispisati sve brojeve unatrag od
unesenog do 1, u suprotnom, zbrojiti sve brojeve od 1 do unesenog broja.



var a = parseInt(prompt("Unesi broj"), 10);
var b = 0;
var sum = 0;
if (a % 2 === 0) {
for (i=a; i>b; i--) {
console.log(i);
}
}
else {
for (i=0; i<=a; i++ ) 
sum+=i;
console.log(sum);
} 
