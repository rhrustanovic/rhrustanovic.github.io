22. U�itati 2 cijela broja, koriste�i prompt funkciju i izra�unati im zbroj, razliku, umno�ak i
koli�nik, ispisati sumu svih parnih brojeva izme�u ta 2 broja, te sumu svih neparnih
brojeva izme�u njih, ne uklju�uju�i njih.


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

