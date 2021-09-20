
35. Ako imate reèenicu: “Hello world je najbolja udruga ikada” izbacite sve samoglasnike iz
nje i ispišite reèenicu bez njih. To možete spremiti u neku novu varijablu. Potom izbacite
sve suglasnike iz iste reèenice te i nju ispišite.


var text = "Hello world je najbolja udruga ikada";
var x = text.split(/[a, e, i, o, u]/gi);
var y = text.split(/[ b, c, è, æ, d, dž, ð, f, g, h, k, p, s, š, t, z, ž, j, l, lj, m, n, nj, r, v]/gi);
console.log(x);
console.log(y);
