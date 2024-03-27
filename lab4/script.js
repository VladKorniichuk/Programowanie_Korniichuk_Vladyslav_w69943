for (i = 10; i > 0; i--) {
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

