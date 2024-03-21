let a = 10
let b = 20
let c = 23.2

// alert(a+b+c)


document.getElementById("wynikD").innerHTML = a+b+c;
document.getElementById("wynikO").innerHTML = a-b-c;
document.getElementById("wynikM").innerHTML = a*b*c;
document.getElementById("wynikDz").innerHTML = a/b/c;

for(let i = 0; i <= 100; i ++){
    if(i%2 == 0){
        console.log(i);
    }
}


//function myFunction() {
    //document.getElementById("fm1").innerHTML = 
    //let p = (a+b+c)/2;
   // let n = Math.sqrt(p(p-a)*(p-b)*(p-a))
    
//}
let some = prompt("Enter something: ")
//console.log(some)
alert("hi" + some);