11. Zatra�iti od korisnika da unese broj manji od 25. Preko switch-case-a provjeriti je li
uneseni broj vi�ekratnik broja 5 (to su brojevi 5, 10, 15 i 20). Ukoliko jest, ispi�ite uneseni
broj, ukoliko nije, ispi�ite da broj nije vi�ekratnik broja 5. Za sve druge brojeve koji nisu
izme�u 0 i 20 ispi�ite da je unesen pogre�an broj.



var a = parseInt(prompt("Unesi broj manji od 25"), 10);
 switch (a>0 && a<25) {
    case 5:
    console.log(5);
    break;
    case 10:
    console.log(10);
    break;
    case 15:
    console.log(15);
    break;
    case 20:
    console.log(20);
    break;
default:
console.log("Une�en je pogre�an broj");
}
