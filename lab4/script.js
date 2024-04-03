for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Happy New Year!");


let countdown = 10;
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log("Happy New Year!");

function obliczSilnie() {
    let userInput = prompt("Podaj liczbę całkowitą:");
    let liczba = parseInt(userInput);
    
    function silnia(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        }
    }
    
    if (!isNaN(liczba)) {
        if (liczba < 0) {
            alert("Silnia jest zdefiniowana tylko dla liczb nieujemnych.");
        } else {
            let wynik = silnia(liczba);
            alert("Silnia liczby " + liczba + " wynosi: " + wynik);
        }
    }
}

obliczSilnie();

var age = prompt("Ile masz lat? ");
if (age >= 18) {
    console.log("xxl");
    var myWindow = window.open("", "_self");
    document.write("adult");
} else {
    console.log("xxs");
    var myWindow = window.open("", "_self");
    document.write("kid");
    window.open("https://www.nickjr.com.pl/")
}



//dalej prośilbym robić jakiś latwiejsze zadania, ponieważ te dalnejsze zadania zrobiłem tylko z pomocą internetu albo więcej pokazywać przykładów na zajęciach

function handleButtonClick(event) { 
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
        btn.style.backgroundColor = '';
    });

    event.target.style.backgroundColor = '#f39c12';
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});

function handleToggleButtonClick() {
    const elementToToggle = document.getElementById('elementToToggle');
    if (elementToToggle.style.display === 'none' || elementToToggle.style.display === '') {
        elementToToggle.style.display = 'block';
    } else {
        elementToToggle.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', handleToggleButtonClick);
});


function handleAddToListButtonClick() {
    const textInput = document.getElementById('textInput');
    const list = document.getElementById('list');
    const listItem = document.createElement('li');
    const inputValue = textInput.value.trim(); 
    
    if (inputValue !== "") {
        listItem.textContent = inputValue;
        list.appendChild(listItem);
        textInput.value = ''; 
    
}
}

document.addEventListener('DOMContentLoaded', function() {
    const addToListButton = document.getElementById('addToListButton');
    addToListButton.addEventListener('click', handleAddToListButtonClick);
});