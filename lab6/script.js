function task1() {
    const book = {
        title: "The Witcher",
        author: "A. Sapkowski",
        year: 1986,

        bookInfo: function() {
            console.log("Nazwa: " + this.title + ", Autor: " + this.author + ", Rok napisania: " + this.year);
        }
    };
    book.bookInfo();
}

function task2() {
    const student = {
        name: "Jan",
        surname: "Bąk",
        age: 30,
        id: 654321,
        marks: {
            math: 3,
            biology: 4,
            PE: 5,
        },

        averageMark: function() {
            let totalMarks = 0;
            const marksList = Object.values(this.marks);
            for (let mark of marksList)
                totalMarks += mark;
            const average = totalMarks / marksList.length;
            console.log("Średnia ocen studenta: " + average.toFixed(2));
        },

        full: function() {
            console.log("Cześć, jestem " + this.name + " " + this.surname);
        },
        Age: function() {
            console.log("Mam " + this.age + " lat");
        },
        idInfo: function() {
            console.log("Mój numer albumu: " + this.id);
        }
    };

    student.full();
    student.Age();
    student.averageMark();
    student.idInfo();
}

function task3() {
    class Triangle {
        constructor(height, baseLength, name) {
            this.height = height;
            this.baseLength = baseLength;
            this.name = name;
        }

        calculateArea() {
            return 0.5 * this.baseLength * this.height;
        }

        compareTriangles(anotherTriangle) {
            const currentTriangleArea = this.calculateArea();
            const anotherTriangleArea = anotherTriangle.calculateArea();

            if (currentTriangleArea > anotherTriangleArea) {
                return this;
            } else if (currentTriangleArea < anotherTriangleArea) {
                return anotherTriangle;
            } else {
                return "Both triangles have the same area ";
            }
        }
    }

    const triangle1 = new Triangle(4, 6, "ABC");
    const triangle2 = new Triangle(5, 7, "DEF");
    const triangle3 = new Triangle(3, 8, "GHI");

    console.log("The area of triangle ", triangle1.name, "is: ", triangle1.calculateArea());

    const biggerTriangle = triangle1.compareTriangles(triangle2);
    console.log("The triangle with a bigger area is: ", biggerTriangle.name);
}

//zadanie 4
function task4(){
    class Trapez {
        constructor(height, base1, base2, name) {
            this.height = height;
            this.base1 = base1;
            this.base2 = base2;
            this.name = name;
        }

        calculateArea() {
            return 0.5 * (this.base1 + this.base2) * this.height;
        }

        changeName(newName) {
            this.name = newName;
        }
    }

    const trapez1 = new Trapez(4, 6, 8, "Trapez1");
    const trapez2 = new Trapez(5, 7, 9, "Trapez2");
    const trapez3 = new Trapez(3, 8, 10, "Trapez3");

    console.log("Pole trapezu ", trapez1.name, "wynosi: ", trapez1.calculateArea());

    trapez1.changeName("Trapez 1");
    console.log("Nowa nazwa trapezu1: ", trapez1.name);
    }

    //zadanie 5
    function task5(){
        class Triangle {
            constructor(height, baseLength, name) {
                this.height = height;
                this.baseLength = baseLength;
                this.name = name;
            }
    
            calculateArea() {
                return 0.5 * this.baseLength * this.height;
            }
        }
    
        class Trapez {
            constructor(height, base1, base2, name) {
                this.height = height;
                this.base1 = base1;
                this.base2 = base2;
                this.name = name;
            }
    
            calculateArea() {
                return 0.5 * (this.base1 + this.base2) * this.height;
            }
        }
    
        function compareShapes(triangle, trapez) {
            const triangleArea = triangle.calculateArea();
            const trapezArea = trapez.calculateArea();
    
            if (triangleArea > trapezArea) {
                return {
                    name: triangle.name,
                    area: triangleArea
                };
            } else if (triangleArea < trapezArea) {
                return {
                    name: trapez.name,
                    area: trapezArea
                };
            } else {
                return {
                    name: "Obie figury mają takie same pole ",
                    area: triangleArea // lub trapezArea, ponieważ są równe
                };
            }
        }
        const triangle1 = new Triangle(4, 6, "ABC");
        const trapez1 = new Trapez(4, 6, 8, "Trapez1");
    
        const biggerShape = compareShapes(triangle1, trapez1);
        console.log("Większa figura to:", biggerShape.name, "o polu:", biggerShape.area);
    }

//zadanie 6
const rectangle = {
    length: 0,
    width: 0,

    setDimensions: function(length, width) {
        this.length = length;
        this.width = width;
    },

    calculateArea: function() {
        return this.length * this.width;
    },

    calculatePerimeter: function() {
        return 2 * (this.length + this.width);
    },

    isSquare: function() {
        return this.length === this.width;
    }
};

function createRectangle() {
    const length = parseInt(document.getElementById("length").value);
    const width = parseInt(document.getElementById("width").value);

    rectangle.setDimensions(length, width);

    const area = rectangle.calculateArea();
    const perimeter = rectangle.calculatePerimeter();
    const isSquare = rectangle.isSquare() ? "Yes " : "No ";

    const rectangleInfo = `Rectangle Info:<br> 
        Length: ${rectangle.length}<br>
        Width: ${rectangle.width}<br>
        Area: ${area}<br>
        Perimeter: ${perimeter}<br>
        Is Square?: ${isSquare}`;

    document.getElementById("rectangleInfo").innerHTML = rectangleInfo;
}
    