

24. Što æe se ispisati:
var a = 2, b = 20, c = ”6”;

var a = 2;
var b = 20;
var c = "6";
for (var i= a; i<b; i+=4) {
if (i === c) {
console.log(i);
}
if (b%i === 0) {
console.log(i);
}
else {
console.log(i+1);
}
}
//ispisat ce se: 2,7,10,15,19 
