
35. Ako imate re�enicu: �Hello world je najbolja udruga ikada� izbacite sve samoglasnike iz
nje i ispi�ite re�enicu bez njih. To mo�ete spremiti u neku novu varijablu. Potom izbacite
sve suglasnike iz iste re�enice te i nju ispi�ite.


var text = "Hello world je najbolja udruga ikada";
var x = text.split(/[a, e, i, o, u]/gi);
var y = text.split(/[ b, c, �, �, d, d�, �, f, g, h, k, p, s, �, t, z, �, j, l, lj, m, n, nj, r, v]/gi);
console.log(x);
console.log(y);
