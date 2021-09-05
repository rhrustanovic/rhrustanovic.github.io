23. Što æe se ispisati:

//ispisat ce se: 3
, 6=6
, 6
, 9
, 11
, 14

var a = 3, b = 18, c = “6”;
for( var i = a; i < b; i += 3 ){
if( i = = c ){
console.log( i + " = " + c );
}
if( b % i != = 0 ){
console.log( i - 1 );
}
else{
console.log( i );
}
}
