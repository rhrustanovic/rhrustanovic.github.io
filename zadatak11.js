11. Zatražiti od korisnika da unese broj manji od 25. Preko switch-case-a provjeriti je li
uneseni broj višekratnik broja 5 (to su brojevi 5, 10, 15 i 20). Ukoliko jest, ispišite uneseni
broj, ukoliko nije, ispišite da broj nije višekratnik broja 5. Za sve druge brojeve koji nisu
izmeðu 0 i 20 ispišite da je unesen pogrešan broj.



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
console.log("Unešen je pogrešan broj");
}
