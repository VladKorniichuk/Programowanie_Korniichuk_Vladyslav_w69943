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

//na początek trzeba nacisnąć 2 razy na button
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', handleToggleButtonClick);
});


function handleAddToListButtonClick() {
    const textInput = document.getElementById('text');
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




function handleAddToTableButtonClick() {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const tableBody = document.getElementById('tableBody');

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    if (firstName !== "" && lastName !== "") {
        const newRow = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = firstName;
        const lastNameCell = document.createElement('td');
        lastNameCell.textContent = lastName;
        newRow.appendChild(firstNameCell);
        newRow.appendChild(lastNameCell);
        tableBody.appendChild(newRow);
        firstNameInput.value = '';
        lastNameInput.value = '';
    } else {
        alert("Pola imię i nazwisko nie mogą być puste");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const addToTableButton = document.getElementById('addToTableButton');
    addToTableButton.addEventListener('click', handleAddToTableButtonClick);
});


// Z Celsiusza na Fahrenheita
function convertCelsiusToFahrenheit() {
    const celsiusInput = document.getElementById('celsius').value;
    const resultCelsiusToFahrenheit = document.getElementById('resultCelsiusToFahrenheit');
    
    if (celsiusInput === '') {
        resultCelsiusToFahrenheit.textContent = 'Please enter a temperature.';
    } else {
        const celsius = parseFloat(celsiusInput);
        const fahrenheit = (celsius * 9/5) + 32;
        resultCelsiusToFahrenheit.textContent = `${celsius}°C to ${fahrenheit.toFixed(2)}°F.`;
    }
}

// Z Fahrenheita na Celsiusza
function convertFahrenheitToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheit').value;
    const resultFahrenheitToCelsius = document.getElementById('resultFahrenheitToCelsius');
    
    if (fahrenheitInput === '') {
        resultFahrenheitToCelsius.textContent = 'Enter a temperature';
    } else {
        const fahrenheit = parseFloat(fahrenheitInput);
        const celsius = (fahrenheit - 32) * 5/9;
        resultFahrenheitToCelsius.textContent = `${fahrenheit}°F to ${celsius.toFixed(2)}°C.`;
    }
}


//zrobiłem 8 zadań