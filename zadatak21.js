
21. Zatra�iti od korisnika unos nekog stringa. Ispisati koliko ima suglasnika u tom stringu.
Ispisati prva 3 slova unesenog stringa.


var text = (prompt("UNESI NEKI TEXT"));
var x = text.match(/[B,C,�,�,D,D�,�,F,G,H,J,K,L,LJ,M,N,NJ,P,R,S,�,T,V,Z,�]/gi);
var y = x.length; 
var z = text.slice(0, 3);
console.log(y);
console.log(z);
