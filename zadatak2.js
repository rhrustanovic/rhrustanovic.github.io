
2. Ako su deklarirane varijable var a = 4, b = 44, c = 24, d = "44". Napišite koji je rezultat
operacija ( true ili false ):


a = 4, b = 44, c = 24, d = "44" 
 console.log( (a > c) );

console.log( (a > b) || (b > c) );
 console.log( (a < b) && (a < c) );

 console.log( (c > b) && (b < a) );
 
console.log( !(a > b) || ( (a > c) && (c > b) ) );

 console.log( !(a > b) );
 console.log( (b === d) );