// Zadanie 1
function getNumbersFromUser() {
  let numbers = [];
  for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt("Wpisz liczbę całkowitą:"));
    numbers.push(number);
  }
  return numbers;
}

function countOccurrences(array, target) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      count++;
    }
  }
  return count;
}

function runTask1() {
  let userNumbers = getNumbersFromUser();
  console.log("Wprowadzone liczby:", userNumbers);

  let targetNumber = parseInt(prompt("Wpisz liczbę, którą chcesz znaleźć:"));

  let occurrences = countOccurrences(userNumbers, targetNumber);
  console.log("Liczba wystąpień liczby", targetNumber, "w tablicy:", occurrences);
}

// Zadanie 2
function runTask2() {
  let numbers = [1, 2, 3, 4, 5, 6];

  console.log("Tablica:", numbers);

  let userNumber = parseInt(prompt("Podaj liczbę całkowitą:"));

  let userIndex = parseInt(prompt("Podaj indeks, na którym chcesz wstawić liczbę:"));

  if (userIndex >= 0 && userIndex <= numbers.length) {
    numbers.splice(userIndex, 0, userNumber);
    console.log("Zmodyfikowana tablica:", numbers);
  } else {
    console.log("Podany indeks jest poza zakresem tablicy.");
  }
}

// Zadanie 3
function runTask3() {
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  let userInput = prompt("Podaj ciąg znaków:");

  let reversedString = reverseString(userInput);
  console.log("Odwrócony ciąg znaków:", reversedString);
}

// Zadanie 4
function runTask4() {
  function generateRandomNumbers(length, min, max) {
    let numbers = [];
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.push(randomNumber);
    }
    return numbers;
  }

  let numbersList = document.getElementById("numbers-list");
  let randomNumbers = generateRandomNumbers(10, 1, 100);

  randomNumbers.forEach(function(number) {
    let listItem = document.createElement("li");
    listItem.textContent = number;
    numbersList.appendChild(listItem);
  });
  console.log(randomNumbers);
}

// Zadanie 5
function runTask5() {
  let liczby = [1, 2, 3, 4, 5, 6, 7, 8];
  const suma = liczby.reduce((acc, curr) => acc + curr, 0);
  console.log("Suma wartości:", suma);
  const parzyste = liczby.filter(num => num % 2 === 0);
  console.log("Liczby parzyste:", parzyste);
  const pomnozone = liczby.map(num => num * 3);
  console.log("Wartości pomnożone przez 3:", pomnozone);
  const numerAlbumu = "69943";
  liczby.push(numerAlbumu);
  const indexNumeruAlbumu = liczby.indexOf(numerAlbumu);
  console.log("Indeks numeru albumu:", indexNumeruAlbumu);
  const srednia = suma / liczby.length;
  console.log("Średnia arytmetyczna:", srednia);
  const max = Math.max(...liczby);
  console.log("Największa liczba:", max);
  const wybranaWartosc = 6;
  const iloscWystapien = liczby.filter(num => num === wybranaWartosc).length;
  console.log("Ilość wystąpień wartości", wybranaWartosc + ":", iloscWystapien);
}

// Zadanie 6
function runTask6() {
  function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }

  let fibSequence = fibonacci(100);
  console.log(fibSequence);
}

// Zadanie 7
function runTask7() {
  function sumTwo(arr) {
    arr.sort(function(a, b) {
      return b - a;
    });
    return arr[0] + arr[1];
  }

  let numbers1 = [1, 10, 20, 35, 215];
  console.log("Suma dwóch największych liczb: " + sumTwo(numbers1));
}

// Zadanie 8
function runTask8() {
  function removeD(arr1) {
    return Array.from(new Set(arr1));
  }

  let arrayD = [1, 2, 2, 3, 4, 4, 5];
  let uniqueA = removeD(arrayD);
  console.log(uniqueA);
}

// Zadanie 9
function runTask9() {
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; 
      }
    }
    return true; 
  }
  console.log(isPrime(17)); //pierwsza
  console.log(isPrime(15)); //nie
}

// Zadanie 10
function runTask10() {
  function reverseWords(sentence) {
    let words = sentence.split(" ");
    let reversedWords = words.reverse();
    let reversedSentence = reversedWords.join(" ");
    return reversedSentence;
  }

  let sentence = "Ala ma kota, kot ma Alę";
  console.log(reverseWords(sentence));
}
