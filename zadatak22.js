22. Uèitati 2 cijela broja, koristeæi prompt funkciju i izraèunati im zbroj, razliku, umnožak i
koliènik, ispisati sumu svih parnih brojeva izmeðu ta 2 broja, te sumu svih neparnih
brojeva izmeðu njih, ne ukljuèujuæi njih.


var a = parseInt(prompt('Unesite prvi broj:'), 10);
var b = parseInt(prompt('Unesite drugi broj:'), 10);
var c;
var x = 0;
var y = 0;
if (a > b) {
c = b;
b = a;
a = c;
}
for (var i = a+1; i < b; i++) {
if (i%2 === 0) {
x += i;
}
}
for (var i = a+1; i < b; i++) {
if (i%2 === 1) {
y += i;
}
}
console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(b/a);
console.log(x);
console.log(y);

