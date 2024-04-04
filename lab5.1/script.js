/*let tablica1 = [];

for(let i = 0; i <= 10; i++){
    tablica1.push(prompt("enter number "));
    console.log(tablica1[i]);
}
let number = prompt("which element ");
console.log(number);

let numb = tablica1.filter(elem => elem == number);
console.log(numb);

console.log("amount of elements ")
console.log(numb.length);


let table = [1, 2, 3, 4, 5, 6];
console.log(table);
let num = prompt("enter number ");

let num1 = prompt("enter place ");

table.splice(num, 0 , parseFloat(num1));
console.log(table);


let table = [1, 2, 3, 4, 5, 6];
table.reverse();

console.log(table);
let pom = 0
let len = table.length

for(let i = 5; i>=0; i--){
    pom = table[i];
    table[i] = table[len-1-i];
    table[len-1-i] = pom 
}
console.log(table);
*/

function random(len){
    let table = [];
    for(i = 0; i <= len; i++){
        table.push(Math.floor(Math.random()*100));
    }
    return table;
}
console.log(random(5));

let len =parseFloat( prompt("długośc tablicy"));
let minEl =parseFloat prompt("górną "));
let maxEl =parseFloat ("dolną "));

console.log(random(len, minEl, maxEl));












/*for (i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Happy New Year!");

countdown = 10;
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log("Happy New Year!");



var age = prompt("How old are u? ")
if (age > 18 ){
    console.log("xxl")
    var myWindow = window.open("", "_self");
    myWindow.document.write("adult");
}
else {
    console.log("xxs")
    var myWindow = window.open("", "_self");
    myWindow.document.write("kid");
}
*/
