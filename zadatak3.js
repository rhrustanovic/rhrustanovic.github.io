3. Unesite 3 broja. Ukoliko su svi ve�i od 10, ispi�ite njihov zbroj. U suprotnom ispitajte koji
je od njih najve�i pa ga pomno�ite sa samim sobom te nakon toga ispi�ite njihov zbroj


var a = parseInt(prompt("Unesi prvi broj"), 10);
var b = parseInt(prompt("Unesi drugi broj"), 10);
var c = parseInt(prompt("Unesi tre�i broj"), 10);
var result;
 
if (a>10 && b>10 && c>10) {

result = a+b+c;
}
else if (a>b && a>c) {
result = a*a;
}
else if (b>a && b>c) {
result = b*b;
}
else if (c>a && c>b) {
result = c*c;
}
else {
result = a+b+c;
}
