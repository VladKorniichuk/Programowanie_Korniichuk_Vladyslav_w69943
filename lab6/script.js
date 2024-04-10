
/*
//2
const student = {
    name: "Jan",
    surname: " Bąk",
    age: 30,
    id: 654321,
    marks: {
        math: 3,
        biology: 4,
        PE: 5,
    },

    AverageMark: function(){
        let avg = 0;
        marksList = Object.values(this.marks)
        for (let amrk of marksList)
            avg += parseFloat(mark);
        avg /= marksList.length
        console.log(this.id)
    },

    Full: function() {
        console.log("Cześć, jestem " + this.name + this.surname );
    },
    Age: function() {
        console.log("Mam " + this.age + " lat")
        
    },
    Id: function() {
        console.log("Mój numer albumu: " + this.id)
        
    }
};

student.AverageMark();
student.Full();
student.Age();
student.Id();


//3

class triangle {
    constructor(side, length, name) {
        this.side = side;
        this.length = length;
        this.name = name; 
       

    }
}

*/

class Trójkąt {
    constructor(wysokość, długość_podstawy, nazwa) {
        this.wysokość = wysokość;
        this.długość_podstawy = długość_podstawy;
        this.nazwa = nazwa;
    }

    obliczPole() {
        return 0.5 * parseFloat (this.wysokość) * parseFloat(this.długość_podstawy);
    }

}