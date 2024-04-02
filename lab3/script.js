let a = 10
let b = 20
let c = 23.2

// alert(a+b+c)

alert("Hello world")

document.getElementById("wynikD").innerHTML = a+b+c;
document.getElementById("wynikO").innerHTML = a-b-c;
document.getElementById("wynikM").innerHTML = a*b*c;
document.getElementById("wynikDz").innerHTML = a/b/c;

for(let i = 0; i <= 100; i ++){
    if(i%2 == 0){
        console.log(i);
    }
}


function obliczPoleTrojkata(d, e, f) {
    var p = (d + e + f) / 2;
    var pole = Math.sqrt(p * (p - d) * (p - e) * (p - f));
    return pole;
}

var d = 3;
var e = 4;
var f = 5;
var pole = obliczPoleTrojkata(d, e, f);
console.log("Pole trójkąta wynosi: " + pole);

let some = prompt("Enter ur name: ")
//console.log(some)
alert("hi " + some);


var liczba1 = prompt("Wprowadź pierwszą liczbę całkowitą:");
var liczba2 = prompt("Wprowadź drugą liczbę całkowitą:");

liczba1 = parseInt(liczba1);
liczba2 = parseInt(liczba2);

var suma = liczba1 + liczba2;

document.write("<h2>Wynik dodawania:</h2>");
document.write("<p>" + liczba1 + " + " + liczba2 + " = " + suma + "</p>");